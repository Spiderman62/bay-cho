function checkValues(callMeBaby) {
    let inputValues = document.getElementById("input_value");
    let checkFliter = document.getElementById("check");
    checkFliter.addEventListener("click", () => {

        let arrStorageNumber = [];
        let arrStorageString = [];
        let arrStorage = [];
        let storage = inputValues.value;
        for (let i = 0; i < storage.length; i++) {
            arrStorage[i] = storage[i];
        }
        for (let i = 0; i < arrStorage.length; i++) {
            if (arrStorage[i] === "0" || arrStorage[i] === "1" || arrStorage[i] === "2" ||
                arrStorage[i] === "3" || arrStorage[i] === "4" || arrStorage[i] === "5" ||
                arrStorage[i] === "6" || arrStorage[i] === "7" || arrStorage[i] === "8" ||
                arrStorage[i] === "9") {
                arrStorageNumber.push(parseInt(arrStorage[i]));
            } else if (arrStorage[i] !== "0" || arrStorage[i] !== "1" || arrStorage[i] !== "2" ||
                arrStorage[i] !== "3" || arrStorage[i] !== "4" || arrStorage[i] !== "5" ||
                arrStorage[i] !== "6" || arrStorage[i] !== "7" || arrStorage[i] !== "8" ||
                arrStorage[i] !== "9") {
                arrStorageString.push(arrStorage[i]);
            }
        }
        let numbersTurn = arrStorageNumber.join("");
        let stringTurn = arrStorageString.join("");
        callMeBaby(numbersTurn, stringTurn,storage);

    });



};
function callBack(value, strings,storage) {
    let printNumbers = document.getElementById("input_value_number");
    let printString = document.getElementById("input_value_string");
    let result = document.getElementById("result_success");
    printNumbers.value = value;
    printString.value = strings;
    if (storage === "") {
        result.innerHTML = "There is no value in input"
    } else {
        result.innerHTML = "Split numbers and string successfully!"

    }
}
checkValues(callBack)

let checkFliter = document.getElementById("check");
checkFliter.addEventListener("mouseover", () => {
    checkFliter.style.background = "rgb(56, 75, 56)";
    checkFliter.style.transition = ".30s";
    checkFliter.style.color = "white";

})
checkFliter.addEventListener("mouseout", () => {
    checkFliter.style.background = "rgb(213, 213, 246)";
    checkFliter.style.transition = ".30s";
    checkFliter.style.color = "black";


})