this.onmessage = function() {
    console.log('worker')
    self.postMessage('')
}