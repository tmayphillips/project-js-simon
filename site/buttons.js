document.querySelector('#start').addEventListener('click', function() {
  startGame()

  const getRandomInt = max => {
    return Math.floor(Math.random() * max);
  }

  let sounds = {
    greenBtn: new Audio("assets/simonSound1.mp3"),
    redBtn: new Audio("assets/simonSound2.mp3"),
    blueBtn: new Audio("assets/simonSound3.mp3"),
    yellowBtn: new Audio ("assets/simonSound4.mp3"),
  };

  let count = 0;
  let colors = ['red', 'blue', 'yellow', 'green']
  let color = ''
  let rand = getRandomInt(colors.length);
  let nextColor = (colors[rand])
  let sequence = [nextColor]
  let i = 0
  document.getElementById('next-color').innerHTML = nextColor

  let greenButton = document.querySelector('.simon-button.green');
  greenButton.addEventListener('click', function() {
    sounds.greenBtn.play()
    color='green'
    makeSelection(color,i)
  });

  let redButton = document.querySelector('.simon-button.red');
  redButton.addEventListener('click', function() {
    sounds.redBtn.play()
    color = 'red'
    makeSelection(color,i)
  });

  let yellowButton = document.querySelector('.simon-button.yellow');
  yellowButton.addEventListener('click', function() {
    sounds.yellowBtn.play()
    color = 'yellow'
    makeSelection(color,i)
  });

  let blueButton = document.querySelector('.simon-button.blue');
  blueButton.addEventListener('click', function() {
    sounds.greenBtn.play()
    color = 'blue'
    makeSelection(color,i)
  });

  function makeSelection (color, i) {

    let colors = ['red', 'blue', 'yellow', 'green']
    let rand = getRandomInt(colors.length);
    console.log(sequence[i])
    if (sequence[i] === color) {
      nextColor = (colors[rand])
      sequence.push(nextColor)
      console.log(sequence)
      count++
      i++
      document.getElementById('count').innerHTML = `Count: ${count}`
      setInterval(() => {
        for (let j = 0; j <= i; j++) {
          document.getElementById('next-color').innerHTML = sequence[j]
          ()
        }
      },1000)
    } else {
      document.getElementById('next-color').innerHTML = 'GAME OVER'
      document.getElementById('count').innerHTML = `Final Score: ${count}`
    }
  }
  
})

