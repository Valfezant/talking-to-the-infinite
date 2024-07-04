window.onload = chooseFurry;

var randomNum;

  /*var myPix = new Array("IMGs/cetaceans.png","IMGs/chewythegreyhound.jpeg","IMGs/FnK5hYYX0AIRnYe.jpg");

  function chooseFurry() 
  {
    randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("myPicture").src = myPix[randomNum];
  }*/

  //me.firstName; // Larry

function Furry(index, image, text) 
{
  this.index = index;
  this.image = image;
  this.text = text;
}
    
var furry1 = new Furry(1, "IMGs/Furries/furry1.png", "The creator");
var furry2 = new Furry(2, "IMGs/Furries/furry2.png", "Something soured");
var furry3 = new Furry(3, "IMGs/Furries/furry3.png", "The friend");
var furry4 = new Furry(4, "IMGs/Furries/furry4.png", "The wolf");
var furry5 = new Furry(5, "IMGs/Furries/furry5.png", "Agonising attraction");
var furry6 = new Furry(6, "IMGs/Furries/furry6.png", "An envious affinity");

var myFurry = new Array(furry1, furry2, furry3, furry4, furry5, furry6);

var randomFurry = new Furry();

function chooseFurry()
{
  var randomNum = Math.floor(Math.random() * myFurry.length);
  console.log(randomNum);
  console.log(myFurry[randomNum]);

  var randomFurry = myFurry[randomNum];
  console.log(randomFurry);

  console.log(randomFurry.text);

  document.getElementById("furryIndex").textContent = randomFurry.index;
  document.getElementById("furryImage").src = randomFurry.image;
  document.getElementById("furryText").textContent = randomFurry.text;

  document.getElementById("furryIndexTotal").textContent = "/" + myFurry.length;
}

  

