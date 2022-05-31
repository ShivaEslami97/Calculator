const darkModeBtn = document.querySelector('.theme-mode');
const theme = window.localStorage.getItem("theme");
if (theme === "dark") {
    document.body.classList.add("dark");
}
darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if (theme === "dark") {
        window.localStorage.setItem("theme", "light");
    }
    else {
        window.localStorage.setItem("theme", "dark");
    }

});

///// show time
(function () {
    /// if time < 10 => add zero => format : hh:mm
    function timeFormat(time) {
        return (time < 10) ? `0${time}` : time;
    }
    function showTime() {
        let today = new Date(),
            hour = timeFormat(today.getHours()),
            min = timeFormat(today.getMinutes());
        document.querySelector('.time').innerHTML = hour + ":" + min;
        time = setTimeout(function () {
            showTime()
        }, 500);
    }
    showTime();
})();



////// calc



//display 
const calcResult = document.getElementById("calcResult");
let totalResult = document.querySelector(".calc-display__total");

//// num board
const numberButtons = document.querySelectorAll('.btn__num');
const allButtons = document.querySelectorAll('.btn');
const equalsButton = document.querySelector('#equalTo');
const operationButtons = document.querySelectorAll('.btn__operator');
const allClearButton = document.querySelector('#clear');
const singleClearButton = document.querySelector('#del');
const negationButton = document.querySelector('#negation');

function displayNum(num) {
    calcResult.textContent += num;
}
function apendOperator(opt) {
    calcResult.textContent += opt;
}
function clearAll() {
    calcResult.textContent = '';
    totalResult.textContent = '';
}
function deleteSingle() {
    if (calcResult.innerText) {
        calcResult.innerText = calcResult.innerText.slice(0, -1);
    }
}
function compute() {
    try {
        totalResult.textContent = eval(calcResult.textContent);
    }
    catch {
        totalResult.innerText = "Error";
        calcResult.textContent = '';
    }
};
function negation() {
    // if (calcResult.innerText[0] !== "-") {
    //     totalResult = -totalResult;
    // } else if (calcResult.innerText[0] === "-") {
    //     totalResult = Math.abs(totalResult);
    // }
    // calcResult.innerText = totalResult;
}

numberButtons.forEach((button, index) => {
    button.addEventListener('click', function (e) {
        displayNum(button.textContent);
    })
});
operationButtons.forEach((button, index) => {
    button.addEventListener('click', function (e) {
        apendOperator(button.textContent);
    })
});

equalsButton.addEventListener('click', (e) => {
    compute();
});
allClearButton.addEventListener('click', (e) => {
    clearAll();
});
// negationButton.addEventListener('click', (e) => {
//     negation();
// });
singleClearButton.addEventListener('click', (e) => {
    deleteSingle();
});


















