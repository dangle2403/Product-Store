import express from 'express';
import connectDB from './database/db.js';

const app = express();

app.get('/products', (req, res) => {
});


app.listen(process.env.PORT || 8000, () =>{
  connectDB();
  console.log(`Server is running on port ${process.env.PORT || 8000}`);
} )