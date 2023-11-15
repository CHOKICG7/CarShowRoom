let dom = document.getElementById("sect");
let btn = document.getElementById("choki");
let BTN = document.getElementById("gyaltshen");

function clickhere(){
   // alert("working");
   btn.addEventListener("click", ()=>{
      sect.style.backgroundColor = "black";
      sect.style.color = "white";
   });
}
function check(){
   BTN.addEventListener("click", ()=>{
      sect.style.backgroundColor = "white";
      sect.style.color = "black";
   });
}





