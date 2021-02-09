const db = require("./init");
let instance;
(async () => {
  instance = await db();
})();

const insert = async ({ name, date, start }) => {
   try {
    await instance.addRow({
        name,
        date,
        start
      }); 
      return {
        message:"ok"
    }
   } catch (err) {
       console.log(err);
       const error = new Error('Service error');
       error.statusCode = 500;
       throw error;

   }
  
};

const update = async (data) => {
    try {
  const rows = await instance.getRows();
  const row = Object.values(rows).find((row) => row.name === data.name);
  Object.keys(data).forEach((key) => {
    row[key] = data[key];
  });
  row.save();

  return {
      message:"ok"
  }
}
catch (err) {
    console.log(err);
    const error = new Error('Service error');
    error.statusCode = 500;
    throw error;

}
};

module.exports = {
  insert,
  update,
};
