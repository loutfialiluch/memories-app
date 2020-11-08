import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import postRoutes from './routes/posts.js';

const app = express();
app.use(express.json({ limit: "30mb" }));
// Cross Origin Resource Sharing
app.use(cors());

const MONGO_URI =
  "mongodb+srv://loutfox:fox0610108175@cluster0.hif0r.mongodb.net/memories?retryWrites=true&w=majority";

// Exposed PORT
const PORT = process.env.PORT || 5000;


// Posts routes
app.use('/posts', postRoutes);

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected successfully to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server started running on PORT : ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });


