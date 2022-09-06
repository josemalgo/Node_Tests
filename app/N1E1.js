function sumar(...theArgs) {
    let total = 0;
    for (const arg of theArgs) {
        total += arg;
    }

    return total;
}

function restar(...theArgs) {
    let total = theArgs[0];
    for (const arg of theArgs) {
        if (arg !== theArgs[0])
            total -= arg;
    }

    return total;

    // return theArgs.reduce((a,b) => a-b);
}

function multiplicar(...theArgs) {
    let total = 1;
    for (const arg of theArgs) {
        total *= arg;
    }

    return total;
}

function dividir(...theArgs) {
    let total = theArgs[0];
    for (const arg of theArgs) {
        if(arg !== theArgs[0])
            total /= arg;
    }

    return total;
}

module.exports = { sumar, restar, multiplicar, dividir};