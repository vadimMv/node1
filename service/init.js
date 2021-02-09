const { GoogleSpreadsheet } = require("google-spreadsheet");
const creds = require("../client-secret.json");
const doc = new GoogleSpreadsheet(
  "1x1JT4DJbcKehh5-kqAE9mxbk7c-hxIIWwrw5PTGXOQs"
);

module.exports = async () => {
  try {
    await doc.useServiceAccountAuth(creds);
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    await sheet.updateProperties({ title: "Workers" });
    await sheet.setHeaderRow([
      "name",
      "date",
      "start",
      "break1",
      "break2",
      "finish",
    ]);
    return sheet;
  } catch (error) {
    console.error(error);
  }
};
