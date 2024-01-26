const login = (req, res) => {
  res.send("login");
};

const registration = (req, res) => {
  res.send("registration");
};

const getNameSpecialist = (req, res) => {
  res.send("specialist");
};

module.exports = {
  login,
  registration,
  getNameSpecialist,
};
