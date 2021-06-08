import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config({ silent: true });

//App init
const app = express();

//Middlewares
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'));

const port = process.env.PORT;

//Connect to DB
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => console.log(`Server is up on port ${port}`));
  })
  .catch((error) => console.log(error.message));
