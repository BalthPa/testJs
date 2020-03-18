let result = document.querySelector('#result');
let button  = document.querySelector("#button");
let infos  = document.querySelector("#infos");

button.addEventListener("click", function(){
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    test = getRandomInt(3);
    if(test == 0){
        result.innerHTML = "<div><h3>You are infected</h3><img src='https://image.shutterstock.com/image-photo/coronavirus-covid-19-infected-patient-600w-1648211998.jpg' class='img-fluid'/><br><button class='btn btn-primary' id='buttonInfo' onclick='Infos()'>Infos</button></div>";
    }
    else if(test == 1){
        result.innerHTML = "<div><h3>You are safe</h3><img src='https://image.shutterstock.com/image-photo/businessman-showing-thumbs-closeup-shot-600w-415992478.jpg' class='img-fluid'/><br><button class='btn btn-primary' id='buttonInfo' onclick='Infos()'>Infos</button></div>";
    }
    else{
        result.innerHTML = "<div><h3>It's too late</h3><img src='https://image.shutterstock.com/image-photo/alarm-clock-disintegrates-600w-717888439.jpg' class='img-fluid'/><br><button class='btn btn-primary' id='buttonInfo' onclick='Infos()'>Infos</button></div>";
    }
    console.log(test)

    button.disabled = true
});

function Infos(){
    if (infos.style.display === 'none'){
        infos.style.display = "block";
    }
    else{
        infos.style.display = "none";
    }
}
