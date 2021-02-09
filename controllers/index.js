const { insert, update } = require("../service");

const startDay = async (req, res, next) => {
  const { name, date, start } = req.body;
  try {
    const response = await insert({
      name,
      date,
      start,
    });
    return res.json(response);
  } catch (error) {
    next(error);
  }
};
const firstBreak = async (req, res, next) => {
  const { name, date, break1 } = req.body;
  try {
    const response = await update({ name, date, break1 });
    return res.json(response);
  } catch (error) {
    next(error);
  }
};
const secondBreak = async (req, res, next) => {
  const { name, date, break2 } = req.body;
  try {
    const response = await update({ name, date, break2 });
    return res.json(response);
  } catch (error) {
    next(error);
  }
};
const endDay = async (req, res, next) => {
  const { name, date, finish } = req.body;
  try {
    const response = await update({ name, date, finish });
    return res.json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  startDay,
  firstBreak,
  secondBreak,
  endDay,
};
