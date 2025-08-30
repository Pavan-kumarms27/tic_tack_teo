let box = document.querySelectorAll(".box");
let win = [
  [0, 1, 2],[3, 4, 5],
  [6, 7, 8],[0, 3, 6],
  [2, 5, 8],[0, 4, 8],
  [6, 4, 2],[1, 4, 7],
];
let playerx = true;
let reset_btn=document.getElementById("reset");

document.querySelectorAll(".box").forEach((element) => {
  element.addEventListener("click", () => {
    if (playerx) {
      element.innerText = "X";
      element.style.color = "red";
      playerx = false;
    } else {
      element.innerText = "O";
      element.style.color = "red";
      playerx = true;
    }
    element.disabled = true;

    for (let pattern of win) {
      let val1 = box[pattern[0]].innerText;
      let val2 = box[pattern[1]].innerText;
      let val3 = box[pattern[2]].innerText;

      if (val1 !== "" && val2 !== "" && val3 !== "") {
        if (val1 == val2 && val2 == val3) {
          
          let announcement = document.getElementById("announcement");
          let msg = document.createElement("h2");
          msg.innerText = " winner is " + val1;
//------styling of msg--------------------------------------------------------------------------------------          
          msg.style.color = "blue";
          msg.style.fontStyle="bold";
          msg.style.textTransform="uppercase"
          msg.style.fontFamily="Helvetica";

          let acc= document.createElement("h2");
          acc.innerText = "click on reset to continue the game" ;
//------styling of acc--------------------------------------------------------------------------------------           
          acc.style.color = "red";
          acc.style.fontStyle="bold";
          acc.style.textTransform="uppercase"
          
          announcement.appendChild(msg);
          announcement.appendChild(acc);
          for (let bn of box) {
            bn.disabled = true;
          }
           
        }
      }
    }
  });
});

reset_btn.addEventListener("click", () =>{
  box.forEach((element) =>{
    element.innerText="";
    element.disabled=false;
  });
    playerx = true; 
    document.getElementById("announcement").innerHTML="";
});
