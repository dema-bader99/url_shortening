function getrandom() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789/._-";

    for (var i = 0; i < 14; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}


function shorturl() {

    let intext=document.getElementById("text_sh");
    if(intext.value.length==0){
        intext.style.border="3px solid hsl(0, 87%, 67%)";
        let inpar=document.getElementById("nothing_in");
        inpar.innerHTML="please add a link";
        inpar.style.color="hsl(0, 87%, 67%)";
        inpar.style.fontSize="20px"
    }
    else{
    document.getElementById("addch").innerHTML="";
    document.getElementById("addch").appendChild(adddiv());

}
}
function adddiv(){
    let intext=document.getElementById("text_sh");
    intext.style.border="none";
    let inpar=document.getElementById("nothing_in");
    inpar.innerHTML="";
    var div = document.createElement('div');
    var button = document.createElement('button');
    var p=document.createElement('input');
    var p2=document.createElement('span');
    p2.innerText=intext.value;
    p2.className="parg1";
    div.appendChild(p2);
    p.value="http://"+ getrandom();
    p.style.border="none";
    p.setAttribute("id","shlink");
    p.className="parg2";
    div.appendChild(p);
  button.innerText="copy";
    button.className="copy";
    button.setAttribute("onclick","coppy()");
    button.setAttribute("id","copyy");
    div.appendChild(button);
    div.className="addnew";
    return div;
}
function coppy(){
      /* Get the text field */
  var copyText = document.getElementById("shlink");
  var copybutton = document.getElementById("copyy");
  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  copybutton.innerText="copied!";
  copybutton.className="copied";
}
