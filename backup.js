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
    let sequence = ['red', 'blue', 'blue', 'green']
    let i = 0
    document.getElementById('next-color').innerHTML = sequence[i]
  
    let rand = getRandomInt(colors.length);
    let nextColor = (colors[rand])
  
  
    let greenButton = document.querySelector('.simon-button.green');
    greenButton.addEventListener('click', function() {
      sounds.greenBtn.play()
      count++
      document.getElementById('count').innerHTML = `Count: ${count}`
      if (sequence[i] === 'green') {
        i++
        document.getElementById('next-color').innerHTML = sequence[i]
      } else {
        document.getElementById('next-color').innerHTML = 'GAME OVER'
      }
    });
  
    let redButton = document.querySelector('.simon-button.red');
    redButton.addEventListener('click', function() {
      sounds.redBtn.play()
      count++
      document.getElementById('count').innerHTML = `Count: ${count}`
      if (sequence[i] === 'red') {
        i++
        document.getElementById('next-color').innerHTML = sequence[i]
      } else {
        document.getElementById('next-color').innerHTML = 'GAME OVER'
      }
    });
  
    let yellowButton = document.querySelector('.simon-button.yellow');
    yellowButton.addEventListener('click', function() {
      sounds.yellowBtn.play()
      count++
      document.getElementById('count').innerHTML = `Count: ${count}`
      if (sequence[i] === 'yellow') {
        i++
        document.getElementById('next-color').innerHTML = sequence[i]
      } else {
        document.getElementById('next-color').innerHTML = 'GAME OVER'
      }
    });
  
    let blueButton = document.querySelector('.simon-button.blue');
    blueButton.addEventListener('click', function() {
      sounds.greenBtn.play()
      count++
      document.getElementById('count').innerHTML = `Count: ${count}`
      if (sequence[i] === 'blue') {
        i++
        document.getElementById('next-color').innerHTML = sequence[i]
      } else {
        document.getElementById('next-color').innerHTML = 'GAME OVER'
      }
    });
  })
  
  