import { useSelector } from "react-redux";
import { State } from "../../../../reducers";
import { ItemType } from "../Sidebar";
//Components
import Item from "./Item/Item";
import Loading from "../../../utils/Loading/Loading";
import Message, { msgType } from "../../../utils/Message/Message";

type Props = {
  clear: () => void;
};
const Items: React.FC<Props> = ({ clear }) => {
  const isLoading = useSelector((state: State) => state.items.isLoading);
  const errorMsg = useSelector((state: State) => state.items.errorMsg);
  const items = useSelector((state: State) => state.items.items);

  //Error screen
  if (errorMsg) return <Message msg={errorMsg} msgRole={msgType.ERROR} />;

  const getTime = (date?: Date) => {
    return date != null ? new Date(date).getTime() : 0;
  };

  const sortByCreatedAt = (array: ItemType[]): ItemType[] => {
    return array.sort((a: ItemType, b: ItemType) => {
      return getTime(b.createdAt) - getTime(a.createdAt);
    });
  };
  const sortedItems = sortByCreatedAt(items);

  //Loading screen
  if (isLoading) return <Loading />;

  //Empty items
  if (!sortedItems.length && !isLoading)
    return (
      <Message msg="You don't have any items yet." msgRole={msgType.PRIMARY} />
    );

  return (
    <ul>
      {sortedItems.map((item) => (
        <Item key={item._id} item={item} clear={clear} />
      ))}
    </ul>
  );
};

export default Items;
