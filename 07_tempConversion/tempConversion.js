const convertToCelsius = function(fahrenheit) {
  let celcius = (fahrenheit - 32) * 5/9;
  return roundToOneDecimal(celcius);
};

const convertToFahrenheit = function(celcius) {
  let fahrenheit = celcius * 9/5 + 32;
  return roundToOneDecimal(fahrenheit);
};

function roundToOneDecimal(num) {
  return Math.round(num*10)/10
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
