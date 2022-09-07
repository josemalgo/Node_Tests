async function callFunc() {
    
    try {
        return (await promiseFunc());
    } catch(err) {
        return (err);
    }
}

function promiseFunc() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Han pasado dos segundos!");
        }, 2000);
    });
}

module.exports = {
    callFunc
};