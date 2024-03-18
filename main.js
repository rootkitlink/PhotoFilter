const inputs = document.querySelectorAll('.filters input');
const btnReset = document.querySelector('.btn-reset');
const inputsDefault = {};


  fullscreen.onclick = () => {
    if (document.fullscreenElement === null){
      document.documentElement.requestFullscreen();
    } 
    else{
      document.exitFullscreen();
    }
  }
//fullscreen

  function paramUpdate() {
    const suffix = this.dataset.sizing || '';
    const output = this.nextElementSibling;
    output.value = this.value;
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
  }
  
  inputs.forEach(input => input.addEventListener('change', paramUpdate));
  inputs.forEach(input => input.addEventListener('mousemove', paramUpdate));
//change filters

  document.addEventListener('DOMContentLoaded', (e) => {
    inputs.forEach((item) => {
      inputsDefault[item.name] = item.value;
    })
  })

  function resetUpdate() {
    inputs.forEach(input => {
      for (const item in inputsDefault) {
        if (input.name === item) {
          input.value = inputsDefault[item];
          input.nextElementSibling.value = inputsDefault[item];
          document.documentElement.style.setProperty(`--${input.name}`, `${inputsDefault[item]}${input.dataset.sizing}`);
        }
      }
    })
  }

  btnReset.addEventListener('click', () => resetUpdate());
  //reset filters