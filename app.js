function getNumber(num){
    var result = document.getElementById("result");

    result.value +=num
}

function clearBtn (){
    var result= document.getElementById("result")

    result.value = ""
}

function getREsult(){
    var result = document.getElementById("result");
    result.value = eval(result.value)
}

function backSpace() {   
    var result = document.getElementById("result");
    output = result.value;
    result.value = output.substring(0, output.length - 1);
}

