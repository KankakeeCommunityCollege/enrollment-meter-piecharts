var CountNumbers = {
  currentHeadCount: 2500, 
  previousHeadCount: 2400, 
  currentCreditHours: 21000, 
  previousCreditHours: 21000
};

var current = CountNumbers.currentHeadCount,
  previous = CountNumbers.previousHeadCount;
  
var percentHeadcount = percentage,
  text = document.querySelector('#headcountPercent'),
  currentText = document.querySelector('#graph1-current');

function percentage(current, previous) {
  return 1 - (current / previous);
}

function positiveOrZeroNumbers(){
  var currentLabel = document.querySelector('#headcount-currentLabel');
  text.style.fill = '#008000';
  currentLabel.style.fill = '#008000';
  currentText.style.fill = '#008000';
}

function stateOfCurrent(current, previous) {
  if(current < previous){
    text.textContent = '-' + Math.floor(percentHeadcount * 100) + '%'; //This is where number is put together as visual percentage
  } else if(current > previous){
    text.textContent = '+' + Math.floor((-(percentHeadcount)) * 100) + '%';
    positiveOrZeroNumbers();
  } else if(current === previous){
    text.textContent = Math.floor(percentHeadcount * 100) + '%';
    positiveOrZeroNumbers();
  }
}

stateOfCurrent(current, previous);