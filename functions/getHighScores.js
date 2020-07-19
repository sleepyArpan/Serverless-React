const { getHighScores } = require('./utils/airtable');

exports.handler = async (event) => {
  try {
    const records = await getHighScores(true);

    return {
      statusCode: 200,
      body: JSON.stringify(records),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: 'Something went wrong' }),
    };
  }
};
