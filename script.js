// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");
const yesBtn2 = document.getElementById("yesBtn2");
const windowBox = document.querySelector(".letter-window");

const title = document.getElementById("letter-title");
const usImg = document.getElementById("letter-us");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Click Envelope

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout( () => {
        document.querySelector(".letter-window").classList.add("open");
    },50);
});

// Logic to move the NO btn

noBtn.addEventListener("mouseover", () => {
    const min = 200;
    const max = 200;

    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// Logic to make YES btn to grow

// let yesScale = 1;

// yesBtn.style.position = "relative"
// yesBtn.style.transformOrigin = "center center";
// yesBtn.style.transition = "transform 0.3s ease";

// noBtn.addEventListener("click", () => {
//     yesScale += 2;

//     if (yesBtn.style.position !== "fixed") {
//         yesBtn.style.position = "fixed";
//         yesBtn.style.top = "50%";
//         yesBtn.style.left = "50%";
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }else{
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }
// });

// YES is clicked

yesBtn.addEventListener("click", () => {
    title.textContent = "YAYYYYY! Happy Valentine's Day, My Pretty Girl!!! (the only way I can give flowers atm)";
    usImg.src = "snoopy.gif";
    windowBox.classList.add("final", "snoopy");
    windowBox.classList.remove("kitties");
    yesBtn.style.display = "none";     // hide first YES
    noBtn.style.display = "none";      // hide NO
    yesBtn2.style.display = "inline";  // show second YES

    finalText.style.display = "block";
});

if (yesBtn2) {
  yesBtn2.addEventListener("click", () => {
    windowBox.classList.remove("snoopy");
    windowBox.classList.add("kitties");
    title.textContent = "study hard for your upcoming exams and acts, I am always so proud of you! you are doing great";
    usImg.src = "kitties.gif";
    finalText.textContent = "Don't forget to pahinga oke <3 I miss you always :( and I Love You MOSTTT. Thank you for always living and coming into my life po";
    yesBtn.style.display = "none";
    yesBtn2.style.display = "none";
    noBtn.style.display = "none"; 
    finalText.style.display = "block";
  });
}