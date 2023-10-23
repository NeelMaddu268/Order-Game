var use = [];
var arr = [];
var order = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
var pngs = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
  "13.jpg",
  "14.jpg",
  "15.jpg"
];
var later = pngs;
const square = document.querySelectorAll(".square");
const extraList = document.querySelectorAll(".extra");

square.forEach(classname => {
  classname.classList.remove("none");
});

order.sort(() => Math.random() - 0.5);

for(var i = 1;i<16;i++){
    var simpl = i
document.getElementById(simpl).style.backgroundImage = "url(" + pngs[simpl-1] + ")";
}

document.getElementById("16").style.backgroundImage = "url(16.jpg)";

function check() {
  if (
    document.getElementById("1").style.backgroundImage ==
      "url(" + '"' + pngs[0] + '"' + ")" &&
    document.getElementById("2").style.backgroundImage ==
      "url(" + '"' + pngs[1] + '"' + ")" &&
    document.getElementById("3").style.backgroundImage ==
      "url(" + '"' + pngs[2] + '"' + ")" &&
    document.getElementById("4").style.backgroundImage ==
      "url(" + '"' + pngs[3] + '"' + ")" &&
    document.getElementById("5").style.backgroundImage ==
      "url(" + '"' + pngs[4] + '"' + ")" &&
    document.getElementById("6").style.backgroundImage ==
      "url(" + '"' + pngs[5] + '"' + ")" &&
    document.getElementById("7").style.backgroundImage ==
      "url(" + '"' + pngs[6] + '"' + ")" &&
    document.getElementById("8").style.backgroundImage ==
      "url(" + '"' + pngs[7] + '"' + ")" &&
    document.getElementById("9").style.backgroundImage ==
      "url(" + '"' + pngs[8] + '"' + ")" &&
    document.getElementById("10").style.backgroundImage ==
      "url(" + '"' + pngs[9] + '"' + ")" &&
    document.getElementById("11").style.backgroundImage ==
      "url(" + '"' + pngs[10] + '"' + ")" &&
    document.getElementById("12").style.backgroundImage ==
      "url(" + '"' + pngs[11] + '"' + ")" &&
    document.getElementById("13").style.backgroundImage ==
      "url(" + '"' + pngs[12] + '"' + ")" &&
    document.getElementById("14").style.backgroundImage ==
      "url(" + '"' + pngs[13] + '"' + ")" &&
    document.getElementById("15").style.backgroundImage ==
      "url(" + '"' + pngs[14] + '"' + ")" &&
    document.getElementById("16").style.backgroundImage == 'url("16.jpg")'
  ) {
    alert("Good Job. You have finished the game. Thanks for playing 😃😃😃😃");
      alert("The code is 😃😃😃😃😃")
  }
}

for(var i = 0;i<15;i++){
  
    square[order[i]].style.backgroundImage = "url(" + pngs[i] + ")";

}

function clear() {
  square.forEach(id => {
    id.style.borderWidth = "thin";
  });
  extraList.forEach(id => {
    id.style.borderWidth = "thin";
  });
}

square.forEach(id => {
  id.style.borderWidth = "thin";
  id.addEventListener("mouseup", () => {
    if (arr.length == 0) {
      if (id.style.borderWidth == "thin") {
          
        id.style.borderColor == "red";
        id.style.borderWidth = "thick";
      }
      arr.push(id.id);
      use.push(id.id);
    } else {
      clear();
      id.style.borderColor == "red";

      id.style.borderWidth = "thick";
      use.push(id.id);
    }
  });
});


extraList.forEach(id => {
  id.style.borderWidth = "thin";
  id.addEventListener("mouseup", () => {
    if (arr.length == 0) {
      if (id.style.borderWidth == "thin") {
          
        id.style.borderColor == "red";
        id.style.borderWidth = "thick";
      }
      arr.push(id.id);
      use.push(id.id);
    } else {
      clear();
      id.style.borderColor == "red";

      id.style.borderWidth = "thick";
      use.push(id.id);
    }
  });
});


function right() {
  var num = use[use.length - 1];
    var c = parseInt(num)+1
  if (document.getElementById(c).style.backgroundImage == "") {
    var middle = document.getElementById(c).style.backgroundImage;
    document.getElementById(c).style.backgroundImage = document.getElementById(num).style.backgroundImage;
    document.getElementById(num).style.backgroundImage = middle;
  }
  check();
}

function left() {
  var num = use[use.length - 1];
    var c = parseInt(num)-1;
  if (document.getElementById(c).style.backgroundImage == "") {
    var middle = document.getElementById(c).style.backgroundImage;
    document.getElementById(
      c
    ).style.backgroundImage = document.getElementById(
      num
    ).style.backgroundImage;
    document.getElementById(num).style.backgroundImage = middle;
  }
    
  check();
}

function up() {
  var num = use[use.length - 1];
    if(num==17){
          var da = parseInt(num)-1;
        var d = da.toString()
    var middle = document.getElementById(d).style.backgroundImage;
    document.getElementById(
      d
    ).style.backgroundImage = document.getElementById(
      num
    ).style.backgroundImage;
    document.getElementById(num).style.backgroundImage = middle;}
else{
    var da = parseInt(num)-4;
    var d = da.toString()
  if (document.getElementById(d).style.backgroundImage == "") {
    var middle = document.getElementById(d).style.backgroundImage;
    document.getElementById(
      d
    ).style.backgroundImage = document.getElementById(
      num
    ).style.backgroundImage;
    document.getElementById(num).style.backgroundImage = middle;
  }}  check();
}

function down() {
  var num = use[use.length - 1];
    if(num==16){
          var d = parseInt(num)+1;
var middle = document.getElementById(d).style.backgroundImage;
    document.getElementById(
      d
    ).style.backgroundImage = document.getElementById(
      num
    ).style.backgroundImage;
    document.getElementById(num).style.backgroundImage = middle;}
else{
    var d = parseInt(num)+4;
  if (document.getElementById(d).style.backgroundImage == "") {
    var middle = document.getElementById(d).style.backgroundImage;
    document.getElementById(
      d
    ).style.backgroundImage = document.getElementById(
      num
    ).style.backgroundImage;
    document.getElementById(num).style.backgroundImage = middle;
  }}  check();
}
document.onkeyup = checkKey;

function checkKey(e) {

  e = e || window.event;
    if(use.length>0){
  var keyCode = e.keyCode || e.which,
      arrow = {
        left: 37,
        up: 38,
        right: 39,
        down: 40
      };
    
  if (e.ctrlKey) {
    switch (keyCode) {
      case arrow.left:
        extLeft();
        break;
      case arrow.right:
        extRight();
        break;
        case arrow.up:
        extUp();
        break;
      case arrow.down:
        extDown();
        break;
    }}else{

      switch (keyCode) {
      case arrow.left:
        left()
              break;
      case arrow.right:
        right()
        break;
              
      case arrow.up:
        up()
        break;
              
      case arrow.down:
        down()
        break;
         }}}
}

function extRight(){
        var ext = square[use[use.length-1]-1];
    var diff = parseInt(ext.id);
    var adiff = diff+1
        if(ext.id!=1){
            
            clear()
            square[diff].style.borderWidth="thick";
            arr.push(adiff)
            use.push(adiff)
        }}

function extLeft(){
        var ext = square[use[use.length-1]-1];
    var diff = parseInt(ext.id)-2;
    var adiff = diff+1
        if(ext.id!=1){
            
            clear()
            square[diff].style.borderWidth="thick";
            arr.push(adiff)
            use.push(adiff)
        }}


function extDown(){
        var ext = square[use[use.length-1]-1];
    var diff = parseInt(ext.id)+3;
    var adiff = diff+1
            clear()
            square[diff].style.borderWidth="thick";
            arr.push(adiff)
            use.push(adiff)
}

function extUp(){
        var ext = square[use[use.length-1]-1];
    var diff = parseInt(ext.id)-5;
    var adiff = diff+1
            clear()
            square[diff].style.borderWidth="thick";
            arr.push(adiff)
            use.push(adiff)
}
