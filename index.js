document.getElementById('stopButton').addEventListener('click', function() 
{
    document.getElementById('stopLight').classList.add('red');
    document.getElementById('slowLight').classList.remove('yellow');
    document.getElementById('goLight').classList.remove('green');
  }
);

  document.getElementById('slowButton').addEventListener('click', function() {
    document.getElementById('stopLight').classList.remove('red');
    document.getElementById('slowLight').classList.add('yellow');
    document.getElementById('goLight').classList.remove('green');
  
  });

  document.getElementById('goButton').addEventListener('click', function() {
    document.getElementById('stopLight').classList.remove('red');
    document.getElementById('slowLight').classList.remove('yellow');
    document.getElementById('goLight').classList.add('green');
  });