let boxes=document.querySelectorAll(".box");
let re=document.querySelector("#re");
let ne=document.querySelector("#game");
let mste=document.querySelector("#msg");
let tu=true;
const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];
const resetGame=()=>{
    tu=true;
    enableboxes();
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
      if(tu){
        box.innerText="O";
        tu=false;}
        else{
            box.innerText="X";
            tu=true;
        }
        box.disabled=true;
        checkwinner();
    });
});
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="?";
    }}

const shwn=(win)=>{
    msg.innerText=`Congratulations, Winner is ${win}`;
    disableboxes();
}
const checkwinner=()=>{
    for(let pattern of winPatterns){
        let pri=boxes[pattern[0]].innerText;
        let pri1=boxes[pattern[1]].innerText;
        let pri2=boxes[pattern[2]].innerText;

        if(pri!="?"&&pri1!="?"&&pri2!="?"){
            if(pri==pri1&&pri1==pri2){
              
                shwn(pri);
            }
        }
    }
};
ne.addEventListener("click",resetGame);

boxes.forEach((box)=>{
if(box.innerText==="?"){
    box.innerText.style.color="blue";
}});