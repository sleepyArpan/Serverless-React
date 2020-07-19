const { table, getHighScores } = require('./utils/airtable');

exports.handler = async (event) => {
  console.log(event);
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ err: 'That method is not allowed to use' }),
    };
  }
  const { Score, Name } = JSON.parse(event.body);
  if (!Score || !Name) {
    return {
      statusCode: 405,
      body: JSON.stringify({
        err: 'Bad request, expected fields not provided',
      }),
    };
  }
  try {
    const records = await getHighScores(false);
    /**
     ** We have got formatted list of records and the lowest score lives in the 9th index of the formatted records
     ** We need to check if the incoming score is greater than the lowest score i.e. the score at index 9
     */
    const lowestScore = records[9];
    if (
      typeof lowestScore.fields.Score === 'undefined' ||
      Score > lowestScore.fields.Score
    ) {
      // Update the score
      const updatedRecord = { id: lowestScore.id, fields: { Name, Score } };
      await table.update([updatedRecord]);
      return {
        statusCode: 200,
        body: JSON.stringify(updatedRecord),
      };
    } else {
      return {
        statusCode: 200,
        body: JSON.stringify({}),
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        msg: error,
      }),
    };
  }
};
