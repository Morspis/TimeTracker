module.exports = app => {
    const times = require("../controllers/time.controller.js");

    var router = require("express").Router();


    router.use(function (req, res, next) {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.setHeader("Content-Type", "application/json");
        return next();
    });



    // Create a new Time
    router.post("/", times.create);

    // Retrieve all Times
    router.get("/", times.findAll);

    // Retrieve all published Times
    router.get("/published", times.findAllPublished);

    // Retrieve a single Time with id
    router.get("/:id", times.findOne);

    // Update a Time with id
    router.put("/:id", times.update);

    // Delete a Time with id
    router.delete("/:id", times.delete);

    // Delete all Times
    router.delete("/", times.deleteAll);

    app.use('/api/times', router);
};