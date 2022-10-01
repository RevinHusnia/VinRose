$.getScript("https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js", function(){
    particlesJS('particles-js',
      {
        "particles": {
          "number": {
            "value": 100,
            "density": {
              "enable": true,
              "value_area": 500
            }
          },
          "color": {
            "value": "#b1c900"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 5,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 100
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true,
        "config_demo": {
          "hide_card": false,
          "background_color": "#b61924",
          "background_image": "",
          "background_position": "50% 50%",
          "background_repeat": "no-repeat",
          "background_size": "cover"
        }
      }
    );

});

let inputName = document.getElementById('inputName');
let inputPassword = document.getElementById('inputPassword');
let adminInput = document.getElementById('adminInput');

let buttonLogin = document.getElementById('buttonLogin')
let buttonLogout = document.getElementById('buttonLogout');

let prof = document.getElementById('prof');
let hacker = document.getElementById('hecker');





hacker.style.display = "none";
buttonLogout.style.display = "none";
prof.style.display = "none";

function login(){
  localStorage.setItem("adminInput", adminInput.value)
  
  
  if(adminInput.value == "Rosemary"){
    prof.style.display = "block";
    hacker.style.display = "none";
    buttonLogin.style.display = "none";
    adminInput.style.display = "none"
    inputName.style.display = "none";
    inputPassword.style.display = "none";
    localStorage.setItem("data","anda admin")
  } 
  else {
    hacker.style.display = "block";
    prof.style.display = "none"
    
    inputName.style.display = "none";
    inputPassword.style.display = "none";
    adminInput.style.display = "none";
    
    buttonLogout.style.display = "block"
    buttonLogin.style.display = "none";
    localStorage.setItem("data", "tidak di kenal");
  }
  if(inputName && inputPassword ){
  inputName.style.display = "none";
  inputPassword.style.display = "none";
  adminInput.style.display = "none"

    localStorage.setItem("data", "terdaftar");

    buttonLogin.style.display = "none";
    buttonLogout.style.display = "block";
  }
} 

if(localStorage.getItem('adminInput')){
  inputName.style.display = "none";
  inputPassword.style.display = "none";
  adminInput.style.display = "none"
  buttonLogin.style.display = "none";
  buttonLogout.style.display = "block"

  if (localStorage.getItem('data') == "Rosemary"){
      prof.style.display = "block";
      hacker.style.display = "none";
  } else {
      hacker.style.display = "block";
      prof.style.display = "none";
  }
}
  

function logout(){
  localStorage.clear()
}

