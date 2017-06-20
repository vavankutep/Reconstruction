// Дещо примітивно реалізовано але часу було обмаль щоб придумати щось краще) зате сам написав та все працює лише в мозілі та хромі. Опера v12 видає помилку Екслорер v8 тоже
// Кросбраузерність калькулятора: Мозіла, Хром, Опера до 12 версії - ок. Опера 12 і експлорер видає помилку
// на мою думку слід використати лічильник чарез цикл for та перехватити операцію за рахунок event.target
// буду вдячний за підказки як оптимізувати код таким чином щоб при введенні нової строки у таблицю було менше роботи


// Створимо масив з цінами
var price = [40, 65, 50 , 25, 40, 30, 90, 100, 140, 25, 90, 80, 90, 40, 100, 8, 90, 100, 20, 30, 35, 45, 40, 40, 11, 60, 70, 45, 35, 100, 150, 130 ]

// Створимо функції для роботи з кожним числом у масиві
function showResult1() { // результат множення числа на введені дані в інпуті
let user1 = number1.value // перемінна нашого інпута

//комбінації з лічильником наразі не дали очікуваного результату
//for(var i = 0, price.lengh, i++) {

//}
  return  user1 * price[0] // функція по вертає результат множення числа що ввів користувач на ціну що зазначена у масиві - де нуль перше число у масиві.
}


function showResult2() { // далі по аналогії з першим
  let user2 = number2.value
  return user2 * price[1]
  }

function showResult3() {
let user3 = number3.value
return user3 * price[2]
}

function showResult4() {
let user4 = number4.value
return user4 * price[3]
}

function showResult5() {
let user5 = number5.value
return user5 * price[4]
}

function showResult6() {
let user6 = number6.value
return user6 * price[5]
}

function showResult7() {
let user7 = number7.value
return user7 * price[6]
}

function showResult8() {
let user8 = number8.value
return user8 * price[7]
}

function showResult9() {
let user9 = number9.value
return user9 * price[8]
}

function showResult10() {
let user10 = number10.value
return user10 * price[9]
}

function showResult11() {
let user11 = number11.value
return user11 * price[10]
}

function showResult12() {
let user12 = number12.value
return user12 * price[11]
}

function showResult13() {
let user13 = number13.value
return user13 * price[12]
}

function showResult14() {
let user14 = number14.value
return user14 * price[13]
}

function showResult15() {
let user15 = number15.value
return user15 * price[14]
}

function showResult16() {
let user16 = number16.value
return user16 * price[15]
}

function showResult17() {
let user17 = number17.value
return user17 * price[16]
}

function showResult18() {
let user18 = number18.value
return user18 * price[17]
}

function showResult19() {
let user19 = number19.value
return user19 * price[18]
}

function showResult20() {
let user20 = number20.value
return user20 * price[19]
}

function showResult21() {
let user21 = number21.value
return user21 * price[20]
}

function showResult22() {
let user22 = number22.value
return user22 * price[21]
}

function showResult23() {
let user23 = number23.value
return user23 * price[22]
}

function showResult24() {
let user24 = number24.value
return user24 * price[23]
}

function showResult25() {
let user25 = number25.value
return user25 * price[24]
}

function showResult26() {
let user26 = number26.value
return user26 * price[25]
}

function showResult27() {
let user27 = number27.value
return user27 * price[26]
}

function showResult28() {
let user28 = number28.value
return user28 * price[27]
}

function showResult29() {
let user29 = number29.value
return user29 * price[28]
}

function showResult30() {
let user30 = number30.value
return user30 * price[29]
}

function showResult31() {
let user31 = number31.value
return user31 * price[30]
}

function showResult32() {
let user32 = number32.value
return user32 * price[31]
}

function getResult() {
  let value = 0;
  let sum = showResult1() + showResult2() + showResult3() + showResult4() + showResult5() + showResult6()
            + showResult7() + showResult8() + showResult9() + showResult10() + showResult11() + showResult12()
            + showResult13() + showResult14() + showResult15() + showResult16() + showResult17() + showResult18()
            + showResult19() + showResult20() + showResult21() + showResult22() + showResult23() + showResult24()
            + showResult25() + showResult26() + showResult27() + showResult28() + showResult29() + showResult30()
            + showResult31() + showResult32(); // сумування
if(sum <= 0) { // якщо сума менше рівна нулю
  return value; // виводити нуль
} else {
   return value + sum; // інакше виводити 0 + суму усіх функцій
  }
};
function showCount() {
result1.innerHTML = showResult1().toFixed(1); // виведення інформації в тег span через id result1 де toFixed - заокруглення до одної десятої
result2.innerHTML = showResult2().toFixed(1);
result3.innerHTML = showResult3().toFixed(1);
result4.innerHTML = showResult4().toFixed(1);
result5.innerHTML = showResult5().toFixed(1);
result6.innerHTML = showResult6().toFixed(1);
result7.innerHTML = showResult7().toFixed(1);
result8.innerHTML = showResult8().toFixed(1);
result9.innerHTML = showResult9().toFixed(1);
result10.innerHTML = showResult10().toFixed(1);
result11.innerHTML = showResult11().toFixed(1);
result12.innerHTML = showResult12().toFixed(1);
result13.innerHTML = showResult13().toFixed(1);
result14.innerHTML = showResult14().toFixed(1);
result15.innerHTML = showResult15().toFixed(1);
result16.innerHTML = showResult16().toFixed(1);
result17.innerHTML = showResult17().toFixed(1);
result18.innerHTML = showResult18().toFixed(1);
result19.innerHTML = showResult19().toFixed(1);
result20.innerHTML = showResult20().toFixed(1);
result21.innerHTML = showResult21().toFixed(1);
result22.innerHTML = showResult22().toFixed(1);
result23.innerHTML = showResult23().toFixed(1);
result24.innerHTML = showResult24().toFixed(1);
result25.innerHTML = showResult25().toFixed(1);
result26.innerHTML = showResult26().toFixed(1);
result27.innerHTML = showResult27().toFixed(1);
result28.innerHTML = showResult28().toFixed(1);
result29.innerHTML = showResult29().toFixed(1);
result30.innerHTML = showResult30().toFixed(1);
result31.innerHTML = showResult31().toFixed(1);
result32.innerHTML = showResult32().toFixed(1);
final_result.innerHTML = getResult().toFixed(1);
}
onkeyup = oninput = showCount; // виведення при введенні користувачем


onpropertychange = function() {
    if (event.propertyName == "value") showCount(); // для IE-9,10 на 8 не працює
  }
oncut = function() {
    setTimeout(showCount, 0); // показувати на момент введення значення = 0
 };
