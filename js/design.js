$(function (){

var canvas = $("#canvas")[0];
var context = canvas.getContext("2d");
context.beginPath();
context.moveTo(0,0);
context.lineTo(300,0);
context.moveTo(0,30);
context.lineTo(300,30);
});
