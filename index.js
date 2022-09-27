let func = (i) => {
    return i * 2 * 2;
}

myfunc()

async function myfunc() {
    let res = await UseWorker(func, 1);
    console.log(res)
}

// принимает колбек и аргументы 
// возращает промис с результатом
// использует воркер и считает колбек в другом потоке
async function UseWorker(callback, ...args) {
    if (window.Worker) {
        var worker = new Worker("./worker.js");
    } else {
        alert("your browser do not support workers");
    }
    let str = callback.toString();
    worker.postMessage({
        callback: str,
        args: args
    })
    return await new Promise(async(res, rej) => {
        worker.addEventListener('message', (data) => {
            res(data.data.res);
            worker.terminate()
        })
    })
}