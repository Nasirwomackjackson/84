canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
    {
        alphabetkey();
        document.getElementById("d1").innerHTML="youpressed Alphabet Key";
        console.log("alphabet key");
    }
}

function alphabetkey()
{
    img_image="Alpkey.png";
   //add();

}