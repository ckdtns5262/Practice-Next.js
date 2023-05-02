var today = new Date()

var year = today.getFullYear();
var month = ('0' + (today.getMonth() + 1)).slice(-2);
var day = ('0' + today.getDate()).slice(-2)

var dateString = year + '년' + month + '월' + day +'일'


var hours = ('0' + today.getHours()).slice(-2);
var minutes = ('0' + today.getMinutes()).slice(-2);
var seconds = ('0' + today.getSeconds()).slice(-2);

var timeString = hours + '시' + minutes + '분' + seconds + '초'

var todayDate = dateString + timeString

export {todayDate}