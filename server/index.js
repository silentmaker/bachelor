'use strict';

const app = require('./app');

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`Treehole listening on port ${PORT}!`);
});