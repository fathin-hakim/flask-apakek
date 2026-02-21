// elements and doms arrays.
const quiz = [
  // for tests.
  document.getElementById("start-quiz"),  // 0
  document.getElementById("data-input"), //1
  document.getElementById("quiz-1"), //2
  document.getElementById("quiz-2"), //3
  document.getElementById("quiz-3"), //4
  document.getElementById("quiz-4"), //5
];


const progression = [
  document.getElementById("p1"),
  document.getElementById("p2"),
  document.getElementById("p3"),
  document.getElementById("p4")
];  

const footer_q = document.getElementById("footer-q");

// const body = document.getElementById("body");
const startb = document.getElementById("button-start");
const buttond = document.getElementById("data-input1");
const btnc_1 = document.getElementById("btnc-1");
const btnf_1 = document.getElementById("btnf-1");
const btnc_2 = document.getElementById("btnc-2");
const btnf_2 = document.getElementById("btnf-2");
const btnc_3 = document.getElementById("btnc-3");
const btnf_3 = document.getElementById("btnf-3");
const btnc_4 = document.getElementById("btnc-4");
const btnf_4 = document.getElementById("btnf-4");




// state
let currentQuiz = 0;

// functions (haven't declared yet.)

function updatelights(color, index) { 
  progression[index].style.backgroundColor = color;
};

function hideAllQuiz() {
  quiz.forEach(q => {
    q.style.display = "none";
  });
}

function showQuiz(index) {
  document.body.style.backgroundColor = "white" ; 
  document.body.style.transition = "background-color .5s"


  hideAllQuiz();
  quiz[index].style.display = "block";
  currentQuiz = index;
}



function goToQuiz(color, nextIndex) {
  document.body.style.transition = "background-color .8s";
  document.body.style.backgroundColor = color;

  setTimeout(() => {
    showQuiz(nextIndex);
  }, 800);
}

function updateFooter(text) {
  footer_q.innerHTML = text;
}

function correctAnswerEffect() {
  confetti({
    particleCount: 120,
    spread: 70,
    origin: { y: 0.6 }
  });
}

// function sendScore(value) {
//   fetch("/answer", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded"
//     },
//     body: `score=${value}`
//   });
// }



// starting btn start the questquiz.
startb.addEventListener("click" , () => {
  console.log("Start button has been Clicked by a User.")
  showQuiz(1);
});

// input-data
buttond.addEventListener("click", () => {
  alert("input-data has been saved.")
  showQuiz(2);
});


// Correct answer (Quiz 1 which will go to qui 2 Quiz 2)
btnc_1.addEventListener("click", () => {
  // sendScore(10);
  updateFooter("jawaban yang benar son 💔🙏🌾🙏🥹🥹🥹");
  updatelights("green", 0);
  correctAnswerEffect(); 
  goToQuiz("green",3);
});

// Wrong answer (stay on Quiz 1)
btnf_1.addEventListener("click", () => {
  // sendScore(-10)
  updateFooter("Jawabannya salah son! 😱😢😡");
  updatelights("red", 0);
  document.body.style.backgroundColor = "red";
});

// for 2nd events. 
// correct Ans (goes to quiz 3)
btnc_2.addEventListener("click", () => {
  updateFooter("jawaban yang benar son 💔🙏🌾🙏🥹🥹🥹");
  updatelights("green",1);
  correctAnswerEffect();
  goToQuiz("green", 4);
});

// Wrong answer (stay on Quiz 1)
btnf_2.addEventListener("click", () => {
  updateFooter("Jawabannya salah son! 😱😢😡");
  updatelights("red", 1);
  document.body.style.backgroundColor = "red";
});


// for 3rd events.
// corect Ans (go to quiz 4)
btnc_3.addEventListener("click", () => {
  updateFooter("jawaban yang benar son 💔🙏🌾🙏🥹🥹🥹");
  updatelights("green",2);
  correctAnswerEffect();
  goToQuiz("green", 5);
});

// Wrong answer (stay on Quiz 1)
btnf_3.addEventListener("click", () => {
  updateFooter("Jawabannya salah son! 😱😢😡");
  updatelights("red", 2);
  document.body.style.backgroundColor = "red";
});

// for 4th events.
// corect Ans (go to quiz 4)
btnc_4.addEventListener("click", (e) => {
  e.preventDefault();

  updateFooter("jawaban yang benar son 💔🙏🌾🙏🥹🥹🥹");
  updatelights("green",3);
  correctAnswerEffect()

  document.getElementById("button-Submit").style.display = "block";
});

// Wrong answer (stay on Quiz 1)
btnf_4.addEventListener("click", () => {
  updateFooter("Jawabannya salah son! 😱😢😡");
  updatelights("red",3);
  document.body.style.backgroundColor = "red";
});