require('dotenv').config();
const Airtable = require('airtable');

Airtable.configure({
  apiKey: process.env.AIRTABLE_API_KEY,
});

const base = Airtable.base(process.env.AIRTABLE_BASE);
const table = base.table(process.env.AIRTABLE_TABLE);

const getHighScores = async (filterEmptyRecords) => {
  const query = {
    sort: [{ field: 'Score', direction: 'desc' }],
  };
  if (filterEmptyRecords) {
    query.filterByFormula = `AND(name != '', score>0)`;
  }

  const records = await table.select(query).firstPage();
  const formattedRecords = records.map((record) => ({
    id: record.id,
    fields: record.fields,
  }));
  return formattedRecords;
};

module.exports = {
  table,
  getHighScores,
};
