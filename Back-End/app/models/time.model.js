module.exports = (sequelize, Sequelize) => {
    const Time = sequelize.define("time", {
      userID: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      numMinutes: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATEONLY
      },
      teamName: {
        type: Sequelize.STRING
      }
    });
  
    return Time;
  };