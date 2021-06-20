const express = require('express');
const router = express.Router();
const MessageModel = require('../model/MessageModel');

router.post(
  '/add',
  require('../middleware/validationMiddleware'),
  (req, res) => {
    // --------------------------------------------------------------------

    const messageToBeSaved = new MessageModel({
      message: req.body.data.message,
    });

    messageToBeSaved
      .save()
      .then((data) => {
        res.json({
          message: 'posted successfully',
        });
      })
      .catch((error) => {
        res.json(error);
      });

    // --------------------------------------------------------------------
  }
);

router.get('/get', (req, res) => {
  // --------------------------------------------------------------------

  MessageModel.find({})
    .then((result) => {
      res.status(200).json({
        userData: result,
      });
    })
    .catch((error) => {
      console.log('err while getting msg from db');
      res.status(500).json({
        error: error,
      });
    });

  // --------------------------------------------------------------------
});
module.exports = router;
