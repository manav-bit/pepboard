    //icon change logic
//     let slidervalue;
//    function sliderChange(val){
//        slidervalue=val;
//         console.log(val);
//         body.tool.lineWidth(slidervalue);
//     }
   
    let recttool=document.querySelector(".fa-square");
 let linetool=document.querySelector(".fa-grip-lines-vertical");
 let penciltool=document.querySelector(".fa-pencil-alt");
 let canvasBoard=document.querySelector("canvas");
    canvasBoard.height=window.innerHeight;
    canvasBoard.width=window.innerWidth;
     //tool changelogic
linetool.addEventListener("click",function(){
    ctool="linetool";
    console.log("line clicked")
})
recttool.addEventListener("click",function(){
    console.log("rect clicked")
    ctool="recttool";
})
penciltool.addEventListener("click",function(){

    console.log("pencil clicked")
    ctool="penciltool";
})


let ctool="penciltool";
let tool=canvasBoard.getContext("2d");//this line give us tool to draw in our canvas
tool.lineWidth=1;
let body= document.querySelector("body");
     
    let boardLeft = canvasBoard.getBoundingClientRect().left;
    let boardTop = canvasBoard.getBoundingClientRect().top;
    let iX, iY, fX, fY;
    let drawingMode = false;
    body.addEventListener("mousedown", function (e) {
        iX = e.clientX - boardLeft
        iY = e.clientY - boardTop
        if (ctool == "penciltool" || ctool == "eraser") {
            drawingMode = true;
            tool.beginPath();
            tool.moveTo(iX, iY);
        }
    })
    body.addEventListener("mouseup", function (e) {
        if (ctool == "penciltool" || ctool == "eraser") {
            drawingMode = false;

        } else if (ctool == "recttool" || ctool == "linetool") {
            // rect, line
            fX = e.clientX + boardLeft;;
            fY = e.clientY - boardTop;
            let width = fX - iX;
            let height = fY - iY;
            if (ctool == "recttool") {
                tool.strokeRect(iX, iY, width, height);
            } else if (ctool == "linetool") {
                tool.beginPath();
                tool.moveTo(iX, iY);
                tool.lineTo(fX, fY);
                tool.stroke();
                console.log("line tool is pending")
            }
        }
    })
    body.addEventListener("mousemove", function (e) {
        if (drawingMode == false)
            return;
        fX = e.clientX - boardLeft;
        fY = e.clientY - boardTop;
        tool.lineTo(fX, fY);
        tool.stroke();
        iX = fX;
        iY = fY;
    })


    




//for icon pallets
let pinkpower=document.querySelector(".red");
    let greenpower=document.querySelector(".green");
    let bluepower=document.querySelector(".blue");
    pinkpower.addEventListener("click",function(){
    tool.strokeStyle="pink";
})
greenpower.addEventListener("click",function(){
    tool.strokeStyle="green";
    
})
bluepower.addEventListener("click",function(){
    tool.strokeStyle="blue";
})
// eraser
let eraserr=document.querySelector(".fa-eraser");
eraserr.addEventListener("click",function(){
    console.log("clicked");
    ctool="penciltool";
    tool.strokeStyle="white";
})
// custom color 
let customcolor=document.getElementById("color");
customcolor.addEventListener("change",function(){
    let finalcolor=customcolor.value;
    tool.strokeStyle=finalcolor;
})


// to change line width
let Slider=document.querySelector(".slider");
Slider.addEventListener("change",function(){
   
    let final=this.value;
    console.log(final);
    tool.lineWidth=final;
})

    
    let eraser=document.querySelector("#eraser");
    let pencil=document.querySelector("#pencil");
    let options=document.querySelectorAll(".sizeTool");
let close=document.querySelector("#rect");
    let cTool="pencil";
    //identify -> click->again click
    pencil.addEventListener("click",function(e){
if (cTool=="pencil"){
    options[0].style.display="flex"

}
else{
    cTool="pencil";
    for(let i=0;i<options.length;i++){
        options[i].style.display="none";
    }
}
    })
    
eraser.addEventListener("click",function(e){
    if(cTool=="eraser"){
        options[1].style.display="flex";
    }
    else{
        cTool="eraser";
    for(let i=0;i<options.length;i++){
        options[i].style.display="none";
    }
}
})



   
