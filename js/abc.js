$(document).ready(function(){
  function getData(){
    var name = ["Prakash Kumar Doshi","Supriya Mukesh Jain","Neil Nitin Mukesh"];
    var age = ["64","73","76"];
    var email = ["pdoshi@gmail.com","ssupjain@gmail.com","nnitin44@gmail.com"];
    var num = ["+91-9654782135","+91-8874596321","+91-9773373119"];
    var healprob= ["High Blood Pressure, High Cholestrol, Obesity"," Blood Pressure, Diabetes","High Sugar, Joint Problem"];
    var sel=0;
      document.getElementById('pkd').sel = 0;

      document.getElementById('smj').sel = 1;

      document.getElementById('nnm').sel = 2;
    $(".name").text(name[sel]);
    $(".age").text(age[sel]);
    $(".email").text(email[sel]);
    $(".num").text(num[sel]);
    $(".hp").text(healprob[sel]);
  }
  $(".btn").on("click",function(){
    getData();
  });
});