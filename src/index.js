module.exports = function toReadable (number) {
    const allHumanNumbers = [
        ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',],
        ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety',],
        ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred',],
        ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen',],
    ];
    const numToStr = String(number);
    const reverseNum = Array.from(String(number), Number).reverse().join('');
    let result = [];
    if ((numToStr.length > 1) && (+numToStr.slice(-2) > 10) && (+numToStr.slice(-2) < 20)) {
        result[0] = allHumanNumbers[3][+numToStr.slice(-1)];
        result[2] = allHumanNumbers[2][reverseNum[2]] || '';
    } else if (number === 0) {
        return 'zero'
    } else {
        for (i = 0; i < numToStr.length; i++) {
        result[i] = allHumanNumbers[i][reverseNum[i]];
    }
    }
    return result.reverse().join(' ').trim().replace('  ', ' ')
}