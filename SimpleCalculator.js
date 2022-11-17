let isNumberValue = true  // global variable to know if value of expr & expr_ is a number or not

function CheckValue(){
    const x = String(document.getElementById("expr").value);
    const y = String(document.getElementById("expr_2").value);
    
    if (isNaN(x) || isNaN(y) === true){
        document.getElementById("notify").innerHTML = "Số nhập vào không hợp lệ";
        isNumberValue = false
    }
    else{
        isNumberValue = true
    }
}

function compute(frm){
    const x = String(document.getElementById("frm").expr.value);
    const y = String(document.getElementById("frm").expr_2.value);

    
    if(isNumberValue === false){
        return;
    }


    if ((x == "") || (y == ""))    //Check if string is empty
    {
        document.getElementById("notify").innerHTML = "Xin hãy điền đủ HAI SỐ hợp lệ";
        return;
    }
        document.getElementById("notify").innerHTML = ""
        Calc(parseInt(x,10),parseInt(y,10));
}

function Calc(x,y){

    let ops = 0
    for (let i = 0; i < 4; i++) {
        if(document.getElementsByName("arithmetic")[i].checked === true){
            ops = document.getElementsByName("arithmetic")[i].value;
            break;
        }
    }

    switch (ops) {
        case "add":
            document.getElementById("result").value = x + y;
            break;
        case "subtr":
            document.getElementById("result").value = x - y;
            break;
        case "multi":
            document.getElementById("result").value = x * y;
            break;
        case "div":
            document.getElementById("result").value = x / y;
            break;

        default:
            document.getElementById("notify").innerHTML = "Chọn 1 phép tính";
            break;
    }

}
