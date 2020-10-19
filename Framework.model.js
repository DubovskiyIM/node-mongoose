const { Schema, model } = require('./conn');

const FrameworkSchema = new Schema({
  title: {
    type: String,
    unique: true
  },
  votes: {
    type: Number
  },
  id: {
    type: Number
  }
});

const Framework = model('Framework', FrameworkSchema, 'frameworks');

module.exports = {
  Framework
};
