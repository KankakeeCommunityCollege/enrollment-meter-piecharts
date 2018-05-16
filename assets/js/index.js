var CountNumbers = {currentHeadCount: 2400, previousHeadCount: 2400, currentCreditHours: 22634, previousCreditHours: 24100};

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

  function clear () {
    offset = strokeLength;
    animate();
  }

  setTimeout(animate, 1000);

})();

(function () {
  var current = CountNumbers.currentHeadCount,
    previous = CountNumbers.previousHeadCount,
    percentHeadcount = 1 - (current / previous),
    graph = document.querySelector('#graph1-percent'),
    text = document.querySelector('#headcountPercent'),
    currentText = document.querySelector('#graph1-current'),
    previousText = document.querySelector('#graph1-previous'),
    graphRadius = graph.r.baseVal.value,
    strokeLength = 2 * Math.PI * graphRadius,
    offset = strokeLength,
    stopLength = Math.ceil(strokeLength - (strokeLength * percentHeadcount)),
    textValue = strokeLength;

  currentText.textContent = current;
  previousText.textContent = previous;

  function animate () {
    if (offset > stopLength) {
      offset -= 5;
      textValue = Math.floor((1 - offset / strokeLength) * 100);

      graph.style.strokeDashoffset = offset;
      text.textContent = '-' + textValue + '%';
      requestAnimationFrame(animate);

    }
  }

  function clear () {
    offset = strokeLength;
    animate();
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

  function clear () {
    offset = strokeLength;
    animate();
  }

  setTimeout(animate, 1000); //gives time to do animation

})();

//CREDIT HOURS red line section
(function () {
  var current = CountNumbers.currentCreditHours,
    previous = CountNumbers.previousCreditHours,
    percentCreditHours = 1 - (current / previous),
    graph = document.querySelector('#graph2-percent'),
    currentText = document.querySelector('#graph2-current'),
    previousText = document.querySelector('#graph2-previous'),
    text = document.querySelector('#creditHoursPercent2'),
    graphRadius = graph.r.baseVal.value,
    strokeLength = 2 * Math.PI * graphRadius,
    offset = strokeLength,
    stopLength = Math.ceil(strokeLength - (strokeLength * percentCreditHours)),
    textValue = strokeLength; //This is the percent number seen

  function animate () {
    if (offset > stopLength) {
      offset -= 5;
      textValue = Math.floor((1 - offset / strokeLength) * 100);

      graph.style.strokeDashoffset = offset;
      text.textContent = '-' + textValue + '%'; //This is where number is put together as visual percentage
      currentText.textContent = current;
      previousText.textContent = previous;

      requestAnimationFrame(animate);

    }
  }

  function clear () {
    offset = strokeLength;
    animate();
  }

  setTimeout(animate, 1000); //gives time to do animation

})();
