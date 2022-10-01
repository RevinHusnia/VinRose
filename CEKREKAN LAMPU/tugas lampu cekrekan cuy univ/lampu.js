function cekrek(){
    let toggle1 = document.getElementById("checked-toggle1");
    let toggle2 = document.getElementById("checked-toggle2");
    let toggle3 = document.getElementById("checked-toggle3");
    let toggle4 = document.getElementById("checked-toggle4");
    let toggle5 = document.getElementById("checked-toggle5");
    let toggle6 = document.getElementById("checked-toggle6");
    let toggle7 = document.getElementById("checked-toggle7");
    

    let lampu1 = document.getElementById("lampu1");
    let lampu2 = document.getElementById("lampu2");
    let lampu3 = document.getElementById("lampu3");
    let lampu4 = document.getElementById("lampu4");
    let lampu5 = document.getElementById("lampu5");
    let lampu6 = document.getElementById("lampu6");
    let lampu7 = document.getElementById("lampu7");

    if(toggle1.checked){
        lampu1.src ="assest/image/on.gif"
    } else { 
        lampu1.src ="assest/image/off.gif"
    }

    if(toggle2.checked){
        lampu2.src ="assest/image/on.gif"
    } else { 
        lampu2.src ="assest/image/off.gif"
    }
    if(toggle3.checked){
        lampu3.src = "assest/image/on.gif"
    } else {
        lampu3.src = "assest/image/off.gif"
    }
    if (toggle4.checked){
        lampu4.src = "assest/image/on.gif"
    } else {
        lampu4.src = "assest/image/off.gif"
    }
    if (toggle5.checked){
        lampu5.src = "assest/image/on.gif"
    } else {
        lampu5.src = "assest/image/off.gif"
    }
    if (toggle6.checked){
        lampu6.src = "assest/image/on.gif"
    } else {
        lampu6.src = "assest/image/off.gif"
    }
    if (toggle7.checked){
        lampu7.src = "assest/image/on.gif"
    } else {
        lampu7.src = "assest/image/off.gif"
    }

}

function cekrek1(params){
    if(params == "on"){
        lampu1.src = "assest/image/on.gif"
        lampu2.src = "assest/image/on.gif"
    }
    if(params == "off"){
        lampu1.src = "assest/image/off.gif"
        lampu2.src = "assest/image/off.gif"
    }
}

function cekrek2(params){
    if(params == "onn"){
        lampu4.src = "assest/image/on.gif"
        lampu5.src = "assest/image/on.gif"
        lampu6.src = "assest/image/on.gif"
        lampu7.src = "assest/image/on.gif"
    }
    if(params == "offf"){
        lampu4.src = "assest/image/off.gif"
        lampu5.src = "assest/image/off.gif"
        lampu6.src = "assest/image/off.gif"
        lampu7.src = "assest/image/off.gif"
    }
}

function cekrekall(params){
    if (params == "on"){
        lampu1.src = "assest/image/on.gif"
        lampu2.src = "assest/image/on.gif"
        lampu3.src = "assest/image/on.gif"
        lampu4.src = "assest/image/on.gif"
        lampu5.src = "assest/image/on.gif"
        lampu6.src = "assest/image/on.gif"
        lampu7.src = "assest/image/on.gif"
    }
    if(params == "off"){
        lampu1.src = "assest/image/off.gif"
        lampu2.src = "assest/image/off.gif"
        lampu3.src = "assest/image/off.gif"
        lampu4.src = "assest/image/off.gif"
        lampu5.src = "assest/image/off.gif"
        lampu6.src = "assest/image/off.gif"
        lampu7.src = "assest/image/off.gif"
    }
}