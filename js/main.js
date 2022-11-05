var listNumbers = [];
var listNumbers2 = [];

function addNumber() {
  var txtNumber = document.getElementById("txtNumber").value * 1;
  listNumbers.push(txtNumber);
  document.getElementById("infoListNumbers").innerHTML = listNumbers;
}

function getPositiveNumbers() {
  var listPositiveNumbers = [];
  var countPositiveNumbers = 0;
  for (let i = 0; i < listNumbers.length; i++) {
    if (listNumbers[i] > 0) {
      listPositiveNumbers.push(listNumbers[i]);
      countPositiveNumbers++;
    }
  }
  return listPositiveNumbers;
}

function calSumPositiveNumbers() {
  var listPositiveNumbers = getPositiveNumbers();
  var sumPositiveNumber = 0;
  for (let i = 0; i < listPositiveNumbers.length; i++) {
    sumPositiveNumber += listPositiveNumbers[i];
  }
  document.getElementById("infoSumPositiveNumber").innerHTML =
    "Tổng các số dương = " + sumPositiveNumber;
}

function countPositiveNumbers() {
  var countPositiveNumbers = getPositiveNumbers().length;
  document.getElementById("infoCountPositiveNumbers").innerHTML =
    "Có " + countPositiveNumbers + " số dương";
}

function findMin() {
  var min = listNumbers[0];
  for (let i = 1; i < listNumbers.length; i++) {
    if (listNumbers[i] < min) {
      min = listNumbers[i];
    }
  }
  document.getElementById("infoMin").innerHTML =
    "Số nhỏ nhất trong mảng: " + min;
}

function findPositiveNumberMin() {
  var listPositiveNumbers = getPositiveNumbers();
  var positiveNumberMin = listPositiveNumbers[0];
  for (let i = 0; i < listPositiveNumbers.length; i++) {
    if (listPositiveNumbers[i] < positiveNumberMin) {
      positiveNumberMin = listPositiveNumbers[i];
    }
  }
  document.getElementById("infoPositiveNumberMin").innerHTML =
    "Số dương nhỏ nhất trong mảng: " + positiveNumberMin;
}

function getLastEvenNumbers() {
  var listEvenNumbers = [];
  for (let i = 0; i < listNumbers.length; i++) {
    if (listNumbers[i] % 2 == 0) {
      listEvenNumbers.push(listNumbers[i]);
    }
  }
  document.getElementById("infoTheLastEvenNumber").innerHTML =
    listEvenNumbers[listEvenNumbers.length - 1];
}

function changeLocation(params) {
  var location1 = document.getElementById("location1").value;
  var location2 = document.getElementById("location2").value;
  var temp = listNumbers[location1];
  listNumbers[location1] = listNumbers[location2];
  listNumbers[location2] = temp;
  document.getElementById("infoChangeLocation").innerHTML = listNumbers;
}

function orderArray() {
  for (let i = 0; i < listNumbers.length - 1; i++) {
    for (let j = i + 1; j < listNumbers.length; j++) {
      if (listNumbers[i] > listNumbers[j]) {
        var temp = listNumbers[i];
        listNumbers[i] = listNumbers[j];
        listNumbers[j] = temp;
      }
    }
  }
  document.getElementById("infoOrderArray").innerHTML = listNumbers;
}

function findPrimeNumbers() {
  listPrimeNumbers = listNumbers.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return number > 1;
  });
  document.getElementById("infoTheFirstPrimeNumber").innerHTML =
    listPrimeNumbers[0];
}

function countNegativeNumbers() {
  listNegativeNumbers = listNumbers.filter((number) => {
    for (var i = 0; i < listNumbers.length; i++) {
      if (number >= 0) return false;
    }
    return true;
  });
  return listNegativeNumbers;
}

function addNumber2() {
  var addNumber = document.getElementById("addNumber").value * 1;
  listNumbers2.push(addNumber);
  document.getElementById("infoListNumbers2").innerHTML = listNumbers2;
}

function countInteger() {
  var count = 0;
  for (let i = 0; i < listNumbers2.length; i++) {
    if (Number.isInteger(listNumbers2[i])) {
      count++;
    }
  }
  document.getElementById("infoCountInteger").innerHTML = "Có " + count + " số nguyên"
}

function compare() {
  var amountPositiveNumber = getPositiveNumbers().length;
  var amountNegativeNumber = countNegativeNumbers().length;
  var result = "";
  if (amountPositiveNumber > amountNegativeNumber) {
    result +=
      "Số lượng số dương nhiều hơn số lượng số âm" +
      "(" +
      amountPositiveNumber +
      ">" +
      amountNegativeNumber +
      ")";
  } else if (amountPositiveNumber < amountNegativeNumber) {
    result +=
      "Số lượng số âm nhiều hơn số lượng số dương" +
      "(" +
      amountNegativeNumber +
      ">" +
      amountPositiveNumber +
      ")";
  } else {
    result +=
      "Số lượng số dương bằng số lượng số âm " +
      "(" +
      amountPositiveNumber +
      "=" +
      amountNegativeNumber +
      ")";
  }
  document.getElementById("infoCompare").innerHTML = result;
}
