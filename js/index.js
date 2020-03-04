//Variables
function moveCar () {
  const car = document.getElementById('car');
  
  let position = 0;
  const interval = setInterval(frame, 50);

  function frame () {
    if (position === 800) {
      clearInterval(interval);
    }
    position += 5;
    car.style.left = position + 'px';
    console.log(car.style.left);
    console.log(position)
  }
}


window.onload = (event) => {
  console.log('page is fully loaded');
  moveCar();
};
