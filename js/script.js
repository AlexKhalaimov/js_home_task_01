function powerNumb(number, power) {
    var result = 1;

    if (number === 0 && power === 0) {
        return 1;
    }

    if (power < 0) {
        for (var i = 0; i > power; i--) {
            result *= number;
        }
        return 1 / result;
    }

    for (i = 0; i < power; i++) {
        result *= number;
    }
    return result;
}
alert('result is' + ' ' + (powerNumb(+prompt('enter number'), +prompt('enter power'))));
