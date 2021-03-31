const db = require("../models");
const Time = db.times;
const Op = db.Sequelize.Op;

// Create and Save a new Time
exports.create = (req, res) => {
    // Validate request
    if (req.body.numMinutes == 0) {
      res.status(400).send({
        message: "Please enter a time!"
      });
      return;
    }
  
    // Create a Time
    const time = {
      numMinutes: req.body.numMinutes,
      description: req.body.description,
      userID: req.body.userID ? req.body.userID : 1, //FIXME UID is always 1
      date: req.body.date ? req.body.date : "1973-01-01",
      teamName: req.body.teamName ? req.body.teamName : "testingTeam"
    };
  
    // Save Time in the database
    Time.create(time)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Time."
        });
      });
  };

// Retrieve all Times from the database.
exports.findAll = (req, res) => {
    const userID = req.query.userID;
    var condition = userID ? { userID: { [Op.like]: `%${userID}%` } } : null;
  
    Time.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving times."
        });
      });
  };

// Find a single Time with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Time.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Time with id=" + id
        });
      });
  };

// Update a Time by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
  
    Time.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Time was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Time with id=${id}. Maybe Time was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Time with id=" + id
        });
      });
  };

// Delete a Time with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Time.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Time was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Time with id=${id}. Maybe Time was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Time with id=" + id
        });
      });
  };

// Delete all Times from the database.
exports.deleteAll = (req, res) => {
    Time.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Times were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all times."
        });
      });
  };

// Find all published Times
exports.findAllPublished = (req, res) => {
    Time.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving times."
        });
      });
  };