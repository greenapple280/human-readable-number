module.exports = function toReadable (number) {
    const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number === 0) return ones[0];

    let result = '';

    // Handle hundreds
    if (Math.floor(number / 100) > 0) {
        result += ones[Math.floor(number / 100)] + ' hundred';
        number %= 100;
    }

    // Handle tens and teens
    if (number > 0) {
        if (result !== '') result += ' ';

        if (number < 10) {
            result += ones[number];
        } else if (number < 20) {
            result += teens[number - 10];
        } else {
            result += tens[Math.floor(number / 10) - 2];
            if (number % 10 > 0) {
                result += ' ' + ones[number % 10];
            }
        }
    }

    return result;
  }
