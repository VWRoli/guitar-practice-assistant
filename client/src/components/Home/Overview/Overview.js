import addImage from '../../../assets/gap-add.png';
import itemsImage from '../../../assets/gap-items.png';
import metronomeImage from '../../../assets/gap-metronome.png';
import Card from './Card';

const Overview = () => {
  return (
    <section id="landing__overview">
      <Card
        title="Create your own practice items"
        text="Create, edit, delete your practice items easily, so you can practice
            as efficiently as possible."
        image={addImage}
      />
      <Card
        title="Navigate easily"
        text="Navigation is super easy between your practice items. Each item has
        it's own timer so you know how much time you put in."
        image={itemsImage}
        reverse
      />
      <Card
        title="Built in metronome"
        text=" Simple and super easy-to-use metronome. The most important thing for
        any musician is keeping time. You can practice with a metronome
        under the Metronome tab."
        image={metronomeImage}
      />
    </section>
  );
};

export default Overview;
