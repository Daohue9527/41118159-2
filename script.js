$(document).ready(function () {
    var studentIDElement = $("#studentID");
    var studentNameElement = $("#studentName");
    var selfieElement = $("#selfie");
    var btn1 = $("#btn1");
    var btn2 = $("#btn2");
    var btn3 = $("#btn3");
    var btn4 = $("#btn4");
  
    btn1.click(function () {    
      studentIDElement.css({
        "font-family": "Arial, sans-serif",
        "color": "blue"
      });
  
      studentNameElement.css({
        "font-family": "Arial, sans-serif",
        "color": "green"
      });
    });
  
    btn2.click(function () {
      selfieElement.css({
        "border-radius": "50%",
        "border": "5px solid red"
      });
    });
  
    btn3.click(function () {
      selfieElement.attr("src", "2.jpg"); 
      selfieElement.attr("alt", "生活照");
    });
  
    btn4.click(function () {
      selfieElement.fadeOut(500, function () {
        selfieElement.attr("src", "1.jpg");
        selfieElement.fadeIn(500);
      });
    });
  });
  