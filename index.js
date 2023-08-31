// Variable to hold the current angle of rotation
  let rotation = 0;

// How much to rotate the image at a time
 const angle = 45;


function bangClicked(){
    //this part turns the button blue when clicked on
    console.log("bang clicked")
    var buttonElement =document.getElementById("bangButton")
    buttonElement.style.backgroundColor="blue"

        


   //this part sets the rotation
    rotation = (rotation + angle) % 360;
    buttonElement.style.transform=`rotate(${rotation}deg)`;


    

}