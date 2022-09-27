if (window.Worker) {

    var myWorker = new Worker("worker.js"); // create a worker object 
    var message = { addData: { num1: 1, num2: 5 } };
    myWorker.postMessage('') // send message to worker

    myWorker.onmessage = function() {
            console.log(1)
        } // get the response from the worker

} else {
    alert("your browser do not support");
}