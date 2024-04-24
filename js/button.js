var count=0;
document.getElementById("myButton").onclick = function () {
    count++;
    if (count % 2==0){
       document.getElementById("demo").innerHTML = "";
    } else {
       var img = document.createElement("img");
       img.src = "C:/Users/Егор1/my_first_site/images/HACK.jpg";
       document.getElementById("demo").appendChild(img);

    }
 }














