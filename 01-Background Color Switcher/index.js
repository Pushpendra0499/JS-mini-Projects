const buttons = document.querySelectorAll('.button')
const body =document.querySelector("body");

buttons.forEach( function (button){
  console.log(button);
  button.addEventListener('click',e => {
    body.style.backgroundColor =e.target.id; 
    // console.log(e.target.id); // to check the id name

  });
});




