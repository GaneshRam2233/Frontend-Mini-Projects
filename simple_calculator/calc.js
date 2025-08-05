
let one = document.getElementById("1")
let two = document.getElementById("2")
let three = document.getElementById("3")
let four = document.getElementById("4")
let five = document.getElementById("5")
let six = document.getElementById("6")
let seven = document.getElementById("7")
let eight = document.getElementById("8")
let nine = document.getElementById("9")
let zero = document.getElementById("zero")
let dot=document.getElementById("dot")

let add = document.querySelector("#add")
let sub = document.querySelector("#sub")
let multi = document.querySelector("#multi")
let divide = document.querySelector("#divide")
let display_result = document.querySelector("#eql")
let del = document.querySelector("#delete")
let clear = document.querySelector("#clear")

let display_content = document.querySelector(".result")

let add_value = 0;
let sub_value = 0;
let multi_value = 0;
let divide_value = 0;

// let input_display="";
let input_value = "";


one.addEventListener("click", () => {
    // console.log(parseInt(one.innerText))
    // input_display+="1";
    input_value += "1";
    display_content.append("1");
})
two.addEventListener("click", () => {
    // input_display+="2"
    // input_value=input_display;
    // display_content.innerText=input_display
    input_value += "2"
    display_content.append("2")
})
three.addEventListener("click", () => {
    // input_display+="3"
    // input_value=input_display;
    // display_content.innerText=input_display;
    input_value += "3"
    display_content.append("3")
})
four.addEventListener("click", () => {
    // input_display+="4"
    // input_value=input_display;
    // display_content.innerText=input_display
    input_value += "4"
    display_content.append("4")
})
five.addEventListener("click", () => {
    // input_display+="5"
    // input_value=input_display;
    // display_content.innerText=input_display
    input_value += "5"
    display_content.append("5")
})
six.addEventListener("click", () => {
    // input_display+="6"
    // input_value=input_display;
    // display_content.innerText=input_display
    input_value += "6"
    display_content.append("6")
})
seven.addEventListener("click", () => {
    // input_display+="7"
    // input_value=input_display;
    // display_content.innerText=input_display
    input_value += "7"
    display_content.append("7")
})
eight.addEventListener("click", () => {
    // input_display+="8"
    // input_value=input_display;
    // display_content.innerText=input_display
    input_value += "8"
    display_content.append("8")
})
nine.addEventListener("click", () => {
    // input_display+="9"
    // input_value=input_display;
    // display_content.innerText=input_display
    input_value += "9"
    display_content.append("9")
})
zero.addEventListener("click", () => {
    // input_display+="0"
    // input_value=input_display;
    // display_content.innerText=input_display
    input_value += "0"
    display_content.append("0")
})
dot.addEventListener("click",()=>{
    input_value+="."
    display_content.append(".")
})

add.addEventListener("click", () => {
    display_content.append("+")
    let operation_value=parseInt(input_value)
    if(input_value.includes(".")){
        operation_value=parseFloat(input_value)
    }
    if (sub_value > 0) {
        // if sub already given do subtraction for current value from previous value(prev val - cur val)
        // and store result in input value as string. repeat it for multi,divide.
        add_value = sub_value - operation_value + ""
        sub_value = 0
    }
    else if (multi_value > 0) {
        add_value = multi_value * operation_value + ""
        multi_value = 0;
    }
    else if (divide_value > 0) {
        add_value = divide_value / operation_value + ""
        divide_value = 0;
    }
    else if (add_value > 0) {
        add_value += operation_value;
    }
    else {
        add_value = operation_value
    }
    input_value = ""
})

sub.addEventListener("click", () => {
    display_content.append("-")
    let operation_value=parseInt(input_value)
    if(input_value.includes(".")){
        operation_value=parseFloat(input_value)
    }
    if (add_value > 0) {
        sub_value = add_value + operation_value + ""
        add_value = 0;
    }
    else if (multi_value > 0) {
        sub_value = multi_value * operation_value + ""
        multi_value = 0;
    }
    else if (divide_value > 0) {
        sub_value = divide_value / operation_value + ""
        divide_value = 0;
    }
    else if (sub_value > 0) {
        sub_value -= operation_value;
    }
    else {
        sub_value = operation_value
    }
    input_value = ""
})

multi.addEventListener("click", () => {
    display_content.append("x")
    let operation_value=parseInt(input_value)
    if(input_value.includes(".")){
        operation_value=parseFloat(input_value)
    }
    if (add_value > 0) {
        multi_value = add_value + operation_value + ""
        add_value = 0;
    }
    else if (sub_value > 0) {
        multi_value = sub_value - operation_value + ""
        sub_value = 0;
    }
    else if (divide_value > 0) {
        multi_value = divide_value / operation_value + ""
        divide_value = 0;
    }
    else if (multi_value > 0) {
        multi_value *= operation_value;
    }
    else {
        multi_value = operation_value
    }
    input_value = ""
})

divide.addEventListener("click", () => {
    display_content.append("%")
    let operation_value=parseInt(input_value)
    if(input_value.includes(".")){
        operation_value=parseFloat(input_value)
    }
    if (add_value > 0) {
        divide_value = add_value + operation_value + ""
        add_value = 0;
    }
    else if (sub_value > 0) {
        divide_value = sub_value - operation_value + ""
        sub_value = 0;
    }
    else if (multi_value > 0) {
        divide_value = multi_value * operation_value + ""
        multi_value = 0;
    }
    else if (divide_value > 0) {
        divide_value /= operation_value;
    }
    else {
        divide_value = operation_value
    }
    input_value = ""
})

//todo equals -> "=" shows final result in result box
display_result.addEventListener("click", () => {
    let result = 0;
    let operation_value=parseInt(input_value)
    if(input_value.includes(".")){
        operation_value=parseFloat(input_value)
    }
    if (add_value > 0) {
        result = add_value + operation_value;
        add_value = 0;
    }
    else if (sub_value > 0) {
        result = sub_value - operation_value;
        sub_value = 0;
    }
    else if (multi_value > 0) {
        result = multi_value * operation_value;
        multi_value = 0;
    }
    else if (divide_value > 0) {
        result = divide_value / operation_value;
        divide_value = 0;
    }
    else{
        result=operation_value
    }
    display_content.innerText = result;
    input_value = result + ""
})

del.addEventListener("click", () => {
    let dis_val = display_content.innerText
    display_content.innerText = dis_val.slice(0, dis_val.length - 1)
    // if (input_value !== "0" || input_value !== "") {
    //     input_value = parseInt(input_value) / 10 +""
    // }
    if(dis_val.charAt(dis_val.length-1)==="+"){
        input_value=add_value
    }
    else if(dis_val.charAt(dis_val.length-1)==="-"){
        input_value=sub_value
    }
    else if(dis_val.charAt(dis_val.length-1)==="x"){
        input_value=multi_value
    }
    else if(dis_val.charAt(dis_val.length-1)==="%"){
        input_value=divide_value
    }
    if (add_value > 0) {
        add_value /= 10
    }
    else if (sub_value > 0) {
        sub_value/=10
    }
    else if(multi_value>0){
        multi_value/=10
    }
    else if(divide_value>0){
        divide_value/=10
    }
    input_value=input_value.slice(0,-1)
})

clear.addEventListener("click", () => {
    display_content.innerText = ""
    input_value = ""
    add_value = 0
    sub_value = 0
    multi_value = 0
    divide_value = 0
})
