function toFraction(amount) {
  // This is a whole number and doesn't need modification.
  if (parseFloat(amount) === parseInt(amount)) {
    return amount;
  }

  if (amount > 0.32 && amount < 0.34) {
    return "1/3";
  }

  if (amount > 0.65 && amount < 0.67) {
    return "2/3";
  }

  // Next 12 lines are cribbed from https://stackoverflow.com/a/23575406.
  var gcd = function (a, b) {
    if (b < 0.0000001) {
      return a;
    }
    return gcd(b, Math.floor(a % b));
  };
  var len = amount.toString().length - 2;
  var denominator = Math.pow(10, len);
  var numerator = amount * denominator;
  var divisor = gcd(numerator, denominator);
  numerator /= divisor;
  denominator /= divisor;
  var base = 0;
  // In a scenario like 3/2, convert to 1 1/2
  // by pulling out the base number and reducing the numerator.
  if (numerator > denominator) {
    base = Math.floor(numerator / denominator);
    numerator -= base * denominator;
  }
  amount = Math.floor(numerator) + "/" + Math.floor(denominator);
  if (base) {
    amount = base + " " + amount;
  }
  return amount;
}

export { toFraction };
