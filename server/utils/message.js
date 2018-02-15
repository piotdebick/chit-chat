const moment = require('moment');

let generateMessage = (from, text) => {
  return {
    from,
    text,
    createdAt: moment().format("ddd, MMM Do YYYY, h:mm:ss a")
  };
};

module.exports = {generateMessage};
