let result = document.querySelector('#result');
let button  = document.querySelector("#button");

button.addEventListener("click", function(){
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    test = getRandomInt(3);
    if(test == 0){
        result.innerHTML = "<div class='jumbotron'><h3>You are infected</h3><img src='https://image.shutterstock.com/image-photo/feeling-sick-tired-frustrated-young-600w-345950645.jpg class='img-fluid'/></div>";
    }
    else if(test == 1){
        result.innerHTML = "<div class='jumbotron'><h3>You are safe</h3><img src='https://image.shutterstock.com/image-photo/businessman-showing-thumbs-closeup-shot-600w-415992478.jpg' class='img-fluid'/></div>";
    }
    else{
        result.innerHTML = "<div class='jumbotron'><h3>It's too late</h3><img src='https://image.shutterstock.com/image-photo/alarm-clock-disintegrates-600w-717888439.jpg' class='img-fluid'/></div>";
    }
    console.log(test)

    button.disabled = true
})

/*function showRresult(){
    var doc = document.getElementById('result');
    test = getRandomInt(3);
    if(test = 0){
        doc.innerHTML = "Test 1";
    }
    else if(test = 1){
        doc.innerHTML = "Test 2";
    }
    else{
        doc.innerHTML = "Dur";
    }

}*/