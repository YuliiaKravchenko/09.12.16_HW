/*
Создать такой метод на прототипе конструктора Date, который будет принимать строку форматирования даты и возвращать строку с датой, отформатированную согласно условию.

Для форматирования могут быть приняты следующие сокращения:
YYYY - полный год
YY - последние две цифры года
MM - месяц, в цифровом представлении
MMMM - месяц, в словарном представлении на любом, удобном вам, языке
DD - день месяца
HH - часы, в 24 часовом представлении
mm - минуты
ss - секунды

Например,
someDate.getCustomFormat(“YY-MMMM-DD HH:mm:ss”);
// “16-september-13 21:00:00”
*/


;(function() {
    'use strict';

Date.prototype.myDate = function(format){
    const self = this;
    
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        year = self.getFullYear(),
        shortYear = self.getFullYear().toString().substr(2),
        month = self.getMonth()+1,
        monthTitle = months[month],
        day = self.getDate(),
        hour = self.getHours(),
        min = self.getMinutes(),
        sec = self.getSeconds(),
        result = format;
    
    const symbols = {
             'YYYY': year,
              'YY': shortYear,
              'MM': month,
              'MMMM': monthTitle,
              'DD': day,
              'hh': hour,
              'mm': min,
              'ss': sec
          };
    
    
    for (let sym in symbols){
        result = result.replace(sym,symbols[sym]);
    }
        return result; 
}

 let date = new Date();
 console.log(date.myDate('YYYY-MM'));
 console.log(date.myDate('YYYY-MM-DD'));
 console.log(date.myDate('hh-mm-ss'));

})();


/*
-----Training-----

Date.prototype.chooseFormat = function (format){

let dateNow = new Date();

function getYear(year){
    return year.getFullYear();
}

function getLastNumOfYear(year){
    let fullYear = year.getFullYear();
  fullYear += '';
  return fullYear.substr(2);
}

function getMonth(year){
  return year.getMonth()+1;
}

function getTitleOfMonth(year){
    let month = ['Jan','Feb','Mar','Apr','May','Jun',
    'Jul','Aug','Sep','Oct','Nov','Dec'];
    return month[year.getMonth()];
}

function getDay(year){
    return year.getDate();
}

function getHour(year){
    return year.getHours();
}

function getMinutes(year){
    return year.getMinutes();
}

function getSeconds(year){
    return year.getSeconds();
}

}
console.log(dateNow);
console.log(getYear(dateNow));
console.log(getLastNumOfYear(dateNow));
console.log(getMonth(dateNow));
console.log(getTitleOfMonth(dateNow));
console.log(getDay(dateNow));
console.log(getHour(dateNow));
console.log(getMinutes(dateNow));
console.log(getSeconds(dateNow));
*/