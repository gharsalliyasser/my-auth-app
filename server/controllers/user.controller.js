const User = require('../models/user.model')

exports.updateUser = (req, res) => {
  User.findOne({
    email: req.body.email
  })
  .exec((err, user) => {
    if (err) {
      res.status(500).send(err)
    } else {
      user.password = req.body.password || user.password
      user.save((err, user) => {
        res.send({ success: true, user: user})
      })
    }
  })
}

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};
