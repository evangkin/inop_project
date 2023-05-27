const { runCrudTestCases } = require('./mongo/crud.tests');

runCrudTestCases().then(response => {
  console.log(response);
});