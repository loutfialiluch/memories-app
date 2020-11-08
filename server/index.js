import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import postRoutes from './routes/posts.js';
import dotenv from 'dotenv';

const app = express();
dotenv.config();
app.use(express.json({ limit: "30mb" }));
// Cross Origin Resource Sharing
app.use(cors());

// Exposed PORT
const PORT = process.env.PORT || 5000;


// Posts routes
app.use('/posts', postRoutes);

mongoose
  .connect(process.env.CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected successfully to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server started running on PORT : ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });


