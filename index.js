"use strict";

// task 1
function searchArrayWord(name, arr) {
  var isIncludes = false;

  for (var i = 0; i < arr.length; i+=1) {
    var value = arr[i].toLowerCase();
    var str = name !== name.toLowerCase() ? name.toLowerCase() : name;

    if (!value.indexOf(str.trim())) {
      isIncludes = true;
    }
  }

  return isIncludes;
}
searchArrayWord('react ', ['JavaScript', 'Webpack', 'React', 'Redux' ]);

// task2
function average(arr) {
  var result = 0;

  for (var i = 0; i < arr.length; i+=1) {
    result += arr[i];
  }

  return result / arr.length;
}
average([2, 6, 8 , 15, 4, 10, 36]);

// task 3
function reverse(arr) {
  var newArray = [];

  for (var i = arr.length-1; i >= 0; i-=1) {
    newArray.push(arr[i]);
  }

  return newArray;
}

reverse([2, 6, 8 , 15, 4, 10, 36]);

// task 4
function getKey(obj) {
  console.log(Object.keys(obj));
}
getKey({html:'HTML', css: 'CSS', js: 'ECMA'});

// task 5
var obj = {
  name: 'Сергей',
  phone: '+380 981 35 21',
  address: 'м.Київ, вул. Грушевського, 5',
  totalAmount: 780,
  totalOrderWeight: 2700,
  purchasedGoods: {
    1: {
      product: 'Чашка',
      price: 100,
      weight: 200,
    },
    2: {
      product: 'Ложка',
      price: 30,
      weight: 100,
    },
    3: {
      product: 'Чайник',
      price: 500,
      weight: 2000,
    },
    4: {
      product: 'Тарелка',
      price: 150,
      weight: 400,
    }
  }
};
