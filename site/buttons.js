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

  let count = 1;
  let colors = ['red', 'blue', 'yellow', 'green']
  let color = ''
  let rand = getRandomInt(colors.length);
  let nextColor = (colors[rand])
  let sequence = [nextColor]

  console.log(sequence)
  let i = 0
  document.getElementById('next-color').innerHTML = sequence[0]

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

  function makeSelection (color) {
    console.log('log sequence[i] '+ sequence[i])
    
    if (sequence[i] === color) {
      console.log(i, sequence.length - 1)
      document.getElementById('count').innerHTML = `Count: ${count}`
     
      console.log(i === sequence.length - 1)
      if (i === sequence.length - 1) {
        console.log('inside if')
        count++
        
        displayColors()
        i = 0
        
      } else {
        i++
        //console.log('i = ' + i);
      }
    } else {
      document.getElementById('next-color').innerHTML = 'GAME OVER'
      document.getElementById('count').innerHTML = `Final Score: ${count}`
    }  
  }

  let displayColors = function() {
    console.log('inside displayColors')

    let colors = ['red', 'blue', 'yellow', 'green']
    let rand = getRandomInt(colors.length);
    nextColor = (colors[rand])
    sequence.push(nextColor)
    console.log('sequence after push '+ sequence)

    let j = 0
    setInterval(() => {
      // document.getElementById('next-color').innerHTML = sequence[j] 
      // let btnLight = document.getElementById(sequence[j]);
      // btnLight.classList.add("light-up");
      // btnLight.classList.remove("light-up");
      
      j++;
      if (j === sequence.length) return
    }, 1000)
    console.log('new sequence: ' + sequence);
  } 
})

