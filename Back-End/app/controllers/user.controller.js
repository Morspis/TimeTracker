const db = require("../models");

const User = db.user;
const Op = db.Sequelize.Op;



exports.allAccess = (req, res) => {
    res.status(200).send("Welcome to Summa Time\nPlease Log in or Register to Start Tracking Your Times!");
  };
  
  exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
  };
  
  exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
  };
  
  exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
  };

  exports.findUser = (req, res) => {
    const userID = req.params.userID;
    User.findByPk(userID)
      .then(data => {
        res.send(data.username);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving User with id=" + userID
        });
      });   
  };