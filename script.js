//this function is called every time a page is loaded
function loadColors(){
    //loads the colours saved on localStorage
    //in order to ensure that the color theme
    //is kept when a new page is loaded/reloaded
    if(localStorage.getItem('c1')){
        changeColor(
            localStorage.getItem('c1'),
            localStorage.getItem('c2'),                            
            localStorage.getItem('c3'),
            localStorage.getItem('c4'),
            localStorage.getItem('c5'),
           );
    }
}
//gets the part of the CSS code that the variables are stored in
let root = document.querySelector(':root');


//changes colour pallate by changing CSS color variables
function changeColor(c1, c2, c3, c4, c5) {

    localStorage.setItem('c1', c1);
    localStorage.setItem('c2', c2);
    localStorage.setItem('c3', c3);
    localStorage.setItem('c4', c4);
    localStorage.setItem('c5', c5);

    root.style.setProperty('--bg-color', c1);
    root.style.setProperty('--bg2-color', c2);
    root.style.setProperty('--bg3-color', c3);
    root.style.setProperty('--border-color', c4);
    root.style.setProperty('--text-color', c5);

}

//different color pallates
function darkMode(){
    changeColor('rgb(34, 40, 49)', 'rgb(57, 62, 70)', 'rgb(34, 40, 49)', 'rgb(0,255,255)', 'rgb(238, 238, 238)');
}

function lightMode(){
    changeColor('rgb(228, 220, 207)', 'rgb(234, 84, 85)', 'rgb(249, 245, 235)', 'rgb(0, 43, 91)', 'rgb(0, 43, 91)');
}

function colorPallate3(){
    changeColor('rgb(255, 244, 224)', 'rgb(255, 191, 155)', 'rgb(255, 244, 224)', 'rgb(180, 96, 96)', 'rgb(77, 77, 77)')
}

function colorPallate4(){
    changeColor('rgb(243, 222, 186)', 'rgb(169, 144, 126)', 'rgb(171, 196, 170)', 'rgb(103, 93, 80)', 'rgb(103, 93, 80)')
}

//notification
function notification(){

    Notification.requestPermission();
    if(Notification.permission == "granted"){
        const notif = new Notification("Hi, I'm a notificiation!")
    } else {
        Notification.requestPermission();
    }

}

//event handler

let i = 0;

function eventHandling(){

    let btn = document.getElementById("event");
    i++;
    btn.innerHTML = i;

}

//button that does something 
function extraButton(){
    let isPrime = false;
    let num = prompt("input a number to check if it's prime");

    if(num == 2){
        isPrime = true;
    }
    if(num == 3){
        isPrime = true;
    }
    if(num == 5){
        isPrime = true;
    }
    if(num == 7){
        isPrime = true;
    }
    if(num == 18174449){
        isPrime = true;
    }

    if(isPrime){
        alert(num + " is a prime number.")
    } else {
        alert(num + " might be a prime number. I'm not really sure.")
    }
}
