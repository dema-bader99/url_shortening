window.addEventListener('DOMContentLoaded', (load) => {
const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__in');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');
let clickcount=0;

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if(!showMenu) {
    hamburger.classList.add('open');
    nav.classList.add('open');
    menuNav.classList.add('open');
    navItems.forEach(item => item.classList.add('open'));

    showMenu = true;
  } else {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    menuNav.classList.remove('open');
    navItems.forEach(item => item.classList.remove('open'));

    showMenu = false;
  }
}


function getrandom() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789/._-";

    for (var i = 0; i < 14; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

function shorturl() {

    let intext=document.getElementById("text_sh");
    if(intext.value.length !=0)
    {
        const div=document.getElementById("addch");
        div.appendChild(adddiv(intext));
    /*    if(clickcount!=0){
            document.querySelector('.copy').addEventListener("click",coppy,false);
        }*/
}
    else{
        intext.style.border="3px solid hsl(0, 87%, 67%)";
        let inpar=document.getElementById("nothing_in");
        inpar.innerHTML="please add a link";
        inpar.style.color="hsl(0, 87%, 67%)";
        inpar.style.fontSize="20px";
}
}
function clear(intext){
    intext.style.border="none";
    let inpar=document.getElementById("nothing_in");
    inpar.innerHTML="";
}
function adddiv(intext){
    clear(intext);
    clickcount +=1;
    let makediv=document.createElement("div");
    let makedivin=document.createElement("div");
    makediv.className="addnew";
    makedivin.className="parg1";
    makedivin.innerHTML=intext.value;
    let makeinput=document.createElement("input");
    makeinput.className="parg2";
    makeinput.value="http://"+`${getrandom()}`;
    makeinput.setAttribute("id",`shlink${clickcount}`);
    let makebutton=document.createElement("button");
    makebutton.className="copy";
    makebutton.setAttribute("id",clickcount);
    makebutton.onclick= function(){coppy(this);};
    makebutton.innerHTML="copy";
    makediv.appendChild(makedivin);
    makediv.appendChild(makeinput);
    makediv.appendChild(makebutton);

    return makediv;
}
  /*makediv += `<div class= addnew>

    <div class="parg1">${intext.value}</div>
    <div><input class="parg2" id="shlink${clickcount}" value="http://${getrandom()}"/></div>
    <button class="copy" id="copyy${clickcount}" onclick="function(){
        coppy("shlink${clickcount}","copyy${clickcount}");
    }">copy</button></div>
  </div>`;*/



function coppy(elem){
     /* Get the text field */
  let ide=elem.id;
  let copyText = document.getElementById(`shlink${ide}`);
  let copybutton = document.getElementById(ide);
  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  copybutton.innerText="copied!";
  copybutton.className="copied";
  for(let i=1;i<=clickcount;i++){
    if(ide!=i){
      let notcopybutton = document.getElementById(i);
      notcopybutton.className="copy";
      notcopybutton.innerText="copy";
    }

  }
}
document.querySelector('.part-two__btn').addEventListener("click",shorturl);

});