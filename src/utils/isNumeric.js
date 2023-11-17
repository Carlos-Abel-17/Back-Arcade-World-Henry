const isNumeric = (value) => {
    return typeof value === 'number' && !isNaN(value);
  };

module.exports = isNumeric