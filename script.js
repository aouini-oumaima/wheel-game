function getWheel() {
  return document.querySelector('.wheel');
}

function getSpinBtn() {
  return document.querySelector('.spinBtn');
}

function getRandomValue() {
  return Math.ceil(Math.random() * 3600);
}


function spinWheel() {
  var wheel = document.querySelector('.wheel');
  var value = getRandomValue();
  wheel.style.transform = "rotate(" + value + "deg)";
  return value;
}

function setSpinBtnOnClick() {
  var spinBtn = document.querySelector('.spinBtn');
  spinBtn.onclick = function() {
    spinWheel();
    setSpinBtnOnClick();
  };
}


setSpinBtnOnClick();

  