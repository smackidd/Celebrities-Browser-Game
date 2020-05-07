var db = require('./db');

var executeQuery = async function (query) {
  var connectionPool = await db;
  console.log(query);
  var result = await connectionPool.request().query(query);
  return result.recordset;
}
//send json formatted record set as a response
var sendQueryResults = async function (query) {
  try {
   
   var recordset = await executeQuery(query);
   console.log(json(recordset));
   return recordset;
  }
  catch (err) {
    return err;
  }
};

module.exports = sendQueryResults;