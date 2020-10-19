const mongoose = require('mongoose');

import { dbConnectionUri } from './config';

mongoose.set('debug', true);

const getConn = async () => {
  await mongoose.connect(dbConnectionUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
};

getConn().catch(e => console.error(e));

module.exports = mongoose;
