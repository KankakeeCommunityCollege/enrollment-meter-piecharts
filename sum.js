function stateOfCurrent(current, previous) {
  var percentHeadcount = 1 - (current / previous),
    text = document.querySelector('#headcountPercent'),
    currentLabel = document.querySelector('#headcount-currentLabel'),
    currentText = document.querySelector('#graph1-current');
  if(current < previous){
    text.textContent = '-' + Math.floor(percentHeadcount * 100) + '%'; //This is where number is put together as visual percentage
  } else if(current > previous){
    text.textContent = '+' + Math.floor((-(percentHeadcount)) * 100) + '%';
    text.style.fill = '#008000';
    currentLabel.style.fill = '#008000';
    currentText.style.fill = '#008000';
  } else if(current === previous){
    text.textContent = Math.floor(percentHeadcount * 100) + '%';
    text.style.fill = '#008000';
    currentLabel.style.fill = '#008000';
    currentText.style.fill = '#008000';
  }
}
module.exports = stateOfCurrent;
