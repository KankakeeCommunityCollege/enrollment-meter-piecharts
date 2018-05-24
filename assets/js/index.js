var CountNumbers = {
  currentHeadCount: 2300,
  previousHeadCount: 2400,
  currentCreditHours: 22000,
  previousCreditHours: 20000
};

var term = 'Summer 2018'; //Term variable requested

(function () {
  var graph = document.querySelector('#graph1'), //selects the graph blue circle
    graphRadius = graph.r.baseVal.value, //Radius of the blue circle set to 100
    strokeLength = 2 * Math.PI * graphRadius,
    offset = strokeLength,
    stopLength = Math.ceil(strokeLength - (strokeLength * 1.0)),
    textValue = strokeLength;

  function animate () {
    if (offset > stopLength) {
      offset -= 5;
      textValue = Math.floor((1 - offset / strokeLength) * 100);
      graph.style.strokeDashoffset = offset;
      requestAnimationFrame(animate);
    }
  }

  setTimeout(animate, 1000);

})();

(function () {
  var current = CountNumbers.currentHeadCount,
    previous = CountNumbers.previousHeadCount,
    percentHeadcount = 1 - (current / previous),
    graph = document.querySelector('#graph1-percent'),
    text = document.querySelector('#headcountPercent'),
    currentLabel = document.querySelector('#headcount-currentLabel'),
    currentText = document.querySelector('#graph1-current'),
    previousText = document.querySelector('#graph1-previous'),
    termText = document.querySelector('#graph1-term'),
    graphRadius = graph.r.baseVal.value,
    strokeLength = 2 * Math.PI * graphRadius,
    offset = strokeLength,
    stopLength = Math.ceil(strokeLength - (strokeLength * percentHeadcount)),
    textValue = strokeLength;

  currentText.textContent = current;
  previousText.textContent = previous;
  termText.textContent = term;

  if(current < previous){
    text.textContent = '-' + Math.round(percentHeadcount * 100) + '%'; //This is where number is put together as visual percentage
  } else if(current > previous){
    text.textContent = '+' + Math.round((-(percentHeadcount)) * 100) + '%';
    text.style.fill = '#008000';
    currentLabel.style.fill = '#008000';
    currentText.style.fill = '#008000';
  } else if(current === previous){
    text.textContent = Math.round(percentHeadcount * 100) + '%';
    text.style.fill = '#008000';
    currentLabel.style.fill = '#008000';
    currentText.style.fill = '#008000';
  }

  function animate () {
    if (offset > stopLength) {
      offset -= 5;
      textValue = Math.floor((1 - offset / strokeLength) * 100);

      graph.style.strokeDashoffset = offset;
      requestAnimationFrame(animate);

    }
  }

  setTimeout(animate, 1000);

})();

(function () {
  var graph = document.querySelector('#graph2'),
    graphRadius = graph.r.baseVal.value,
    strokeLength = 2 * Math.PI * graphRadius,
    offset = strokeLength,
    stopLength = Math.ceil(strokeLength - (strokeLength * 1.0)),
    textValue = strokeLength;

  function animate () {
    if (offset > stopLength) {
      offset -= 5;
      textValue = Math.floor((1 - offset / strokeLength) * 100);

      graph.style.strokeDashoffset = offset;

      requestAnimationFrame(animate);

    }
  }

  setTimeout(animate, 1000); //gives time to do animation

})();

//CREDIT HOURS red line section
(function () {
  var current = CountNumbers.currentCreditHours,
    previous = CountNumbers.previousCreditHours,
    percentCreditHours = 1 - (current / previous),
    graph = document.querySelector('#graph2-percent'),
    currentLabel = document.querySelector('#creditHours-currentLabel'),
    currentText = document.querySelector('#graph2-current'),
    previousText = document.querySelector('#graph2-previous'),
    termText = document.querySelector('#graph2-term'),
    text = document.querySelector('#creditHoursPercent2'),
    graphRadius = graph.r.baseVal.value,
    strokeLength = 2 * Math.PI * graphRadius,
    offset = strokeLength,
    stopLength = Math.ceil(strokeLength - (strokeLength * percentCreditHours)),
    textValue = strokeLength; //This is the percent number seen

  currentText.textContent = current;
  previousText.textContent = previous;
  termText.textContent = term;

  if(current < previous){
    text.textContent = '-' + Math.round(percentCreditHours * 100) + '%'; //This is where number is put together as visual percentage
  } else if(current > previous){
    text.textContent = '+' + Math.round((-(percentCreditHours)) * 100) + '%';
    text.style.fill = '#008000';
    currentLabel.style.fill = '#008000';
    currentText.style.fill = '#008000';
  } else if(current === previous){
    text.textContent = Math.round(percentCreditHours * 100) + '%';
    text.style.fill = '#008000';
    currentLabel.style.fill = '#008000';
    currentText.style.fill = '#008000';
  }

  function animate () {
    if (offset > stopLength) {
      offset -= 5;
      textValue = Math.floor((1 - offset / strokeLength) * 100);

      graph.style.strokeDashoffset = offset;
      requestAnimationFrame(animate);

    }
  }

  setTimeout(animate, 1000); //gives time to do animation

})();
