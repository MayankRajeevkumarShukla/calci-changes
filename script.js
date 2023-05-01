
document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('calc-display');
    const buttons = document.getElementsByClassName('btn');
    let currentValue = '';
    let inverse = false;
  
    function evaluateResult() {
      let convertedValue = currentValue
        .replace('x', '*')
        .replace('÷', '/')
        .replace('%', '*0.01')
        .replace('^', '**')
        .replace('π', 'Math.PI')
        .replace('e', 'Math.E');
  
      if (inverse) {
        convertedValue = convertedValue
          .replace('sin', 'Math.asin')
          .replace('cos', 'Math.acos')
          .replace('tan', 'Math.atan')
          .replace('log', 'Math.log10')
          .replace('√', 'Math.pow');
      } else {
        convertedValue = convertedValue
          .replace('sin', 'Math.sin')
          .replace('cos', 'Math.cos')
          .replace('tan', 'Math.tan')
          .replace('log', 'Math.log')
          .replace('√', 'Math.sqrt');
      }
  
      let result;
      try {
        result = eval(convertedValue);
      } catch (error) {
        result = 'Error';
      }
  
      currentValue = result.toString();
      display.value = currentValue;
    }
  
    function factorial(num) {
      if (num === 0 || num === 1) {
        return 1;
      }
      return num * factorial(num - 1);
    }
  
    for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i];
      button.addEventListener('click', function () {
        const value = button.innerText;
        if (value === 'AC') {
          currentValue = '';
          display.value = currentValue;
        } else if (value === '=') {
          evaluateResult();
        } else if (value === 'Inv') {
          inverse = !inverse;
          button.classList.toggle('active');
        } else if (value === 'ln') {
            currentValue += 'ln';
            display.value = currentValue;
          }
        else if (value === '!') {
          const num = parseInt(currentValue);
          if (!isNaN(num)) {
            const fact = factorial(num);
            currentValue = fact.toString();
            display.value = currentValue;
          } else {
            currentValue = 'Error';
            display.value = currentValue;
          }
        } else {
          currentValue += value;
          display.value = currentValue;
        }
      });
    }
  });
  
