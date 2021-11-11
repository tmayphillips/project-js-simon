document.querySelector('#start').addEventListener('click', function() {
  startGame()

  let greenButton = document.querySelector('.simon-button.green');
  greenButton.addEventListener('click', function() {
    console.log('You clicked the green button');
  });

  let redButton = document.querySelector('.simon-button.red');
  redButton.addEventListener('click', function() {
    console.log('You clicked the red button');
  });

  let yellowButton = document.querySelector('.simon-button.yellow');
  yellowButton.addEventListener('click', function() {
    console.log('You clicked the yellow button');
  });

  let blueButton = document.querySelector('.simon-button.blue');
  blueButton.addEventListener('click', function() {
    console.log('You clicked the blue button');
  });
})

