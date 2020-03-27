var date = new Date().getDay()
console.log(date)
$(document).ready(function changeday(){
if ( date >= 4 ){
$("#sun").after($("#mon"));
$("#mon").after($("#tue"));
$("#tue").after($("#wed"));
}
if (date < 4){
 $("#thu").before($("#wed"));
 $("#wed").before($("#tue"));
 $("#tue").before($("#mon"));
}
});
