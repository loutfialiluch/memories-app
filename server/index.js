import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started running on PORT : ${PORT}`);
})