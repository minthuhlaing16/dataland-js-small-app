const getdivarea = document.getElementById("divarea");

getdivarea.contentEditable = true;
getdivarea.spellcheck = false;

const getbtns = document.querySelectorAll(".btn");
// console.log(getbtns);

getbtns.forEach(function(getbtn){
    // console.log(getbtn);

   getbtn.addEventListener("click",function(){
    // const getcommand = getbtn.getAttribute("data-command");
    // console.log(getcommand);

    const getcommand = getbtn.dataset['command'];
    // console.log(getcommand);

    if(getcommand === "cleartext"){
        getdivarea.innerHTML = "";
    }else if (getcommand === 'createLink' || getcommand === "insertImage") {
        const geturl = prompt("Enter your website link: ","https://");
        document.execCommand(getcommand,false,geturl);
    }else if (getcommand === "paste") {
        navigator.clipboard.readText().then(function(text){
            getdivarea.innerHTML += text;
        })
    }else if (getcommand === "foreColor") {
        // console.log(getbtn.value);
        document.execCommand(getcommand,false,getbtn.value);
    }else if (getcommand === "backColor") {
        document.execCommand(getcommand,false,getbtn.value);
    }else if (getcommand === "fontName") {
        document.execCommand(getcommand,false,getbtn.value);
    }
    else{
        // document.execCommand(command,showUi optional false, value)
        document.execCommand(getcommand,false,null);
    }
   })
})

function uppercasefun(){
    getdivarea.style.textTransform = 'uppercase';
}

function lowercasefun(){
    getdivarea.style.textTransform = "lowercase";
}

function capitalizefun(){
    getdivarea.style.textTransform = 'capitalize';
}