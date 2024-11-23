let numberOfDice;
let point = document.getElementById("result");
let diceButton = document.getElementById("diceBtn");

let randomDice1, randomDice2, randomDice3, randomDice4, randomDice5, randomDice6;
let diceArray_1, diceArray_2, diceArray_3, diceArray_4, diceArray_5, diceArray_6;

let dictDice = {1:"diceImage/dice_1.png", 2:"diceImage/dice_2.png", 3:"diceImage/dice_3.png", 4:"diceImage/dice_4.png", 5:"diceImage/dice_5.png", 6:"diceImage/dice_6.png"}; 
let idImage = {0:"dice_1", 1:"dice_2", 2:"dice_3", 3:"dice_4", 4:"dice_5", 5:"dice_6"};
let display = ["dice_1", "dice_2", "dice_3", "dice_4", "dice_5", "dice_6"];

function inlineDisplay(num){
    for (let i = 0; i < num; i++){
        document.getElementById(display[i]).style.display = "inline-block";
    }
} 
function noneDisplay(num){
    for (let i = 5; i >= num; i--){
        document.getElementById(display[i]).style.display = "none";
    }
} 
diceButton.onclick = function diceRoller(){
    randomDice1 = Math.round(Math.random()*5) + 1;
    randomDice2 = Math.round(Math.random()*5) + 1;
    randomDice3 = Math.round(Math.random()*5) + 1;
    randomDice4 = Math.round(Math.random()*5) + 1;
    randomDice5 = Math.round(Math.random()*5) + 1;
    randomDice6 = Math.round(Math.random()*5) + 1;
    diceArray_1 = [randomDice1];
    diceArray_2 = [randomDice1, randomDice2];
    diceArray_3 = [randomDice1, randomDice2, randomDice3];
    diceArray_4 = [randomDice1, randomDice2, randomDice3, randomDice4];
    diceArray_5 = [randomDice1, randomDice2, randomDice3, randomDice4, randomDice5];
    diceArray_6 = [randomDice1, randomDice2, randomDice3, randomDice4, randomDice5, randomDice6];
    dictRoller = {1:diceArray_1, 2:diceArray_2, 3:diceArray_3, 4:diceArray_4, 5:diceArray_5, 6:diceArray_6};
    numberOfDice = document.getElementById("numDice");
    numberOfDice = Number(numberOfDice.value);
    let textCont = dictRoller[numberOfDice];
    if(numberOfDice > 0 && numberOfDice < 7){ 
        point.innerHTML = `DICE: ${textCont}`;
        for(let i = 0; i < numberOfDice; i++){
            let idImg = idImage[i];
            let image = document.getElementById(idImg);
            if (numberOfDice == 1){
                noneDisplay(1);
                let temp = dictDice[diceArray_1[i]];
                image.src = temp;
            }
            else if (numberOfDice == 2){
                inlineDisplay(2);
                noneDisplay(2);
                let temp = dictDice[diceArray_2[i]];
                image.src = temp;
            }
            else if (numberOfDice == 3){
                inlineDisplay(3);
                noneDisplay(3);
                let temp = dictDice[diceArray_3[i]];
                image.src = temp;
            }
            else if (numberOfDice == 4){
                inlineDisplay(4);
                noneDisplay(4);
                let temp = dictDice[diceArray_4[i]];
                image.src = temp;
            }
            else if (numberOfDice == 5){
                inlineDisplay(5);
                noneDisplay(5)
                let temp = dictDice[diceArray_5[i]];
                image.src = temp;
            }
            else{
                inlineDisplay(6)
                let temp = dictDice[diceArray_6[i]];
                image.src = temp;
            } 
        }
    }
    else {
        let image;
        for (let i = 0; i < 6; i++){
            let j = i;
            image = document.getElementById(idImage[i]);
            document.getElementById(display[i]).style.display = "inline-block";
            image.src = dictDice[++j];
        }
        point.textContent = "TRY AGAIN";
    }
}