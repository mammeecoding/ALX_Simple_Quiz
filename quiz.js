 function  checkAnswer() {
  const correctAnswer = '4';
  const userAnswer =  document.querySelector('name="quiz".value ["checked"]');
  const correct = document.getElementById('#feedback');
 if (userAnswer === correctAnswer){
    correct.textContent = 'Correct! Well done.';
  }else{
    correct.textContent = "That's incorrect. Try again!";
  }
  
  }

  const submit = document.getElementById('submit-answer');
  submit.addEventListener('click', function(checkAnswer) {
    alert(checkAnswer);
  })
