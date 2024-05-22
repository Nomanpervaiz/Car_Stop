let btnStop = document.getElementById("btn-stop")
let btnGo = document.getElementById("btn-go")
let car = document.getElementById("car")
let interval ;
function go() {
    let count = 0
    function abc() {
        count += 5
        car.style.left = count + "px" 
    }
    
    interval = setInterval(abc,50)
}
function stop() {
    clearInterval(interval)
}

