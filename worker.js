this.onmessage = async function(props) {
    let callback = eval(props.data.callback);
    let args = props.data.args

    let res = callback(...args)
    this.postMessage({
        res: res
    })
}