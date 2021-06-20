const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded());
const cors = require('cors');

app.use(
  cors({
    origin: '*',
    credentials: true,
  })
);

// ------------------CONNECT TO MONGO---------------
mongoose.connect(process.env.MONGO_URI, () => {
  console.log('   ********************database connected *************');
});
// -------------------ROUTE-------------

app.use('/message', require('./route/messageRoute'));

app.listen(process.env.PORT || 5000, () => {
  console.log('server started at port 5000');
});
