let switchBtn = document.getElementById("switchBtn");

let modBtn = document.getElementById("modBtn");

let allLightBall = document.querySelectorAll(".ball");

let state = true;
let mod = true;
let intervalArr = [];
let nowBall = 0;
lightPower();
switchBtn.addEventListener("click", function (e) {
  state = !state;
  if (state) {
    switchBtn.innerText = "OFF";
  } else {
    switchBtn.innerText = "ON";
  }
  lightPower();
});

modBtn.addEventListener("click", function (e) {
  mod = !mod;
  if (mod) {
    modBtn.innerText = "Liner";
  } else {
    modBtn.innerText = "Rand";
  }
  lightPower();
});

function lightPower() {
  if (state) {
    clearAllInterval();
    if (mod) {
      intervalArr.push(
        setInterval(function () {
          if (nowBall === allLightBall.length) nowBall = 0;
          for (let i = 0; i < allLightBall.length; i++) {
            if (i === nowBall) {
              allLightBall[i].classList.add("lightBall");
            } else {
              allLightBall[i].classList.remove("lightBall");
            }
          }
          nowBall++;
        }, 1000)
      );
    } else {
      allLightBall.forEach((element) => {
        intervalArr.push(
          setInterval(function () {
            element.classList.toggle("lightBall");
          }, Math.floor(Math.random() * 1000) + 1000)
        );
      });
    }
  } else {
    clearAllInterval();
  }
}
function clearAllInterval() {
  for (let i = 0; i < allLightBall.length; i++) {
    allLightBall[i].classList.remove("lightBall");
  }
  for (let i = 0; i < intervalArr.length; i++) {
    clearInterval(intervalArr[i]);
  }
  intervalArr = [];
}
