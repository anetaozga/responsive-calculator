let x = null;
let lastType = '';

let display = value => {
    let data = document.getElementById("display");
    if (data.value === "0") {
        if (value === ".") {
            data.value += value;
        } else {
            data.value = value;
        }
    } else {
        data.value += value;
    }
    console.log(x)
};

let remove = () => {
    let data = document.getElementById("display");
    data.value = "0";
    x = null;
};

let operate = type => {
    let data = document.getElementById("display");
    if (x !== null) {
        switch (type) {
            case '+':
                x += parseFloat(data.value, 10);
                break;
            case '-':
                x -= parseFloat(data.value, 10);
                break;
            case '*':
                x *= parseFloat(data.value, 10);
                break;
            case '/': if (data.value !== "0"){
                x /= parseFloat(data.value, 10);
                break;
            } else {
                x = "NOPE"
            }
        }
    } else {
        x=parseFloat(data.value, 10);
    }
    console.log(x)
    data.value = "";
    lastType = type;
};

let equal = type => {
    let data = document.getElementById("display");
    if (type === "=") {
        operate(lastType);
        data.value = x;
        console.log(x)
    }
}
