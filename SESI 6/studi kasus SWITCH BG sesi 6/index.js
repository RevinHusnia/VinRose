let homee = document.getElementById('homee');
let Mode = document.getElementById('Mode');
let info = document.getElementById('info');
let pagee = document.getElementById('pagee');
let ram = document.getElementById('ram');
let light = document.getElementById('light');
let dark = document.getElementById('dark')
let hello = document.getElementById('hello');
let body = document.body

const Limitdark = 7;
const rampagee = 6;
let counter = 0;
let remining;

light.style.display = "none";
ram.style.display = "none";
hello.style.display = "block";
dark.style.display = "none";

function mod(){

    if(remining == 1){
        info.textContent = "DARK MODE FINISH";
        homee.textContent =  "Restart"
        Mode.style.display = "none"; 
        return;
    }
    if (Mode){
        light.style.display = "block";
        pagee.style.display = "none";
        hello.style.display = "none";
    }
    counter += 1;
    remining = Limitdark - counter ;
    
    info.textContent = `YOU USE ${counter}x, LEFT ${remining} `
    body.classList.toggle('switchh')
}

function Page(){
    if( remining == 1){
    info.textContent = "RAMPAGE MODE END";
    homee.textContent = "Restart";
    ram.textContent = "RAMPAGE"
    light.style.display = "none"
    ram.textContent = "RAMPAGE MODE"
    pagee.style.display = "none";
    return;
    }
    if(pagee){
        Mode.style.display = "none";
        ram.style.display = "block";
        hello.style.display = "none";
    }
    counter += 1;

   remining = rampagee - counter;

    info.textContent = `RAMPAGE ${counter}x, LEFT${remining}`;
    body.classList.toggle('rampage');
}


function home(){
    location.reload();
}
