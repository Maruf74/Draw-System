let inputName = document.getElementById("inputField");
let pList = document.getElementById("p-list");
let wList = document.getElementById("w-list");
let ar = [];
let winners = [];

function add() {
   nam = inputName.value;
   var n = ar.includes(nam);
   for (x in ar) {
   }
   if (nam === "") {
      alert("You haven't enter any name.");
   }else if (n == true) {
      alert("This name already exist.");
   } else {
      ar.push(nam);
      pList.innerHTML = pList.innerHTML + "<li>" + ar[ar.length - 1] + "</li>";
   }
   inputName.value = "";
}


function winner() {
   let ran = Math.round(Math.random() * x);
   var w = winners.includes(ar[ran]);

   if (ar.length < 10) {
      alert("You must have to enter 10 participant name")
   }
   else if (winners.length > 2) {
      alert("Three winners has been declared");
   } else if (w === true){
      winner();
   }else{
      wList.innerHTML = wList.innerHTML + "<li>" + ar[ran] + "</li>";
      winners.push(ar[ran]);
   }
}

function reset (){
   ar.length = 0;
   winners.length = 0;
   pList.innerHTML ="";
   wList.innerHTML ="";
   inputName.value = "";
}

