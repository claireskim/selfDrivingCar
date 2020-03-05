function moveCar () {
  const car = document.getElementById('car');
  
  let position = 0;
  const interval = setInterval(frame, 50);

  function frame () {
    if (position === 800) {
      position = 0;
      // clearInterval(interval);
    }
    position += 5;
    car.style.left = position + 'px';
  }
}


window.onload = (event) => {
  moveCar();
};
