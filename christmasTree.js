
window.onload = () =>{
    const lights = document.getElementsByClassName("lights");
    looping(lights); //start the tree with lights on
    startLoop(lights); // start looping with the light color

    const lightswitch = document.getElementById("lightswitch");
    console.log(lightswitch);
    lightswitch.onclick = switchLight;
}
let counter = []; //global
const colors = ["tomato", "lightblue", "lightpurple","pink", "blue", "violet", "red"]; //array
let lights_are_on = false; //start nettsiden med lys av
const startLoop = (lights) => {
    for(let i = 0; i < lights.length; i++){
        counter[i] = Math.floor(Math.random()*colors.length); //velge tilfeldig tall for counter 
        lights[i].style.transitionDuration

    }
    looping(lights);
    setInterval(() => looping(lights), 1000); 
}
const looping = (lights) =>{  //sende lights som parameter
    for(let i = 0; i < lights.length; i++){
        const light = lights[i];
        if(lights_are_on){
            light.style.backgroundColor = colors[counter[i]];
        }
        else{
                light.style.backgroundColor = "rgba(255,255,255,0.4)";
            }
        counter[i]++;
        if(counter[i] >= colors.length) counter[i] = 0;
    }
}
const switchLight = () =>{
    lightswitch.classList.toggle("lightsOff"); //legger til class lightsOff om det ikke finnes, tar vekk om det finnes.
    if(lightswitch.className === ""){
        lights_are_on = true; //lys på
        document.getElementsByClassName("splash")[0].style.backgroundColor = "#ca7777";
      
    }
    else{
         lights_are_on = false;// lys av
         document.getElementsByClassName("splash")[0].style.backgroundColor = "#FF4949";

      
        }
}