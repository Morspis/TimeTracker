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