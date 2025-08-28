
const saveBtns = document.getElementsByClassName("fa-regular");

for (let i = 0; i < saveBtns.length; i++) {
    saveBtns[i].addEventListener("click", function(e) {
        e.preventDefault();
        
        const favoriteList = parseInt(document.getElementById("count-fev").innerText);
        const totalFev = favoriteList + 1;
        document.getElementById("count-fev").innerText = totalFev;
    });
}

document.querySelectorAll(".copy-btn").forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();

    // count update
    let counter = document.getElementById("count-copy");
    counter.innerText = parseInt(counter.innerText) + 1;

    // phone number copy
    let phoneEl = btn.closest(".cart-body").querySelector(".phoneNumber");
    if (phoneEl) {
      let number = phoneEl.innerText.trim();
      navigator.clipboard.writeText(number);
      alert("✔ Copied: " + number);
    }
  });
});



// coin count


// all buttons
const buttons = document.querySelectorAll(".call-btn");
// all history blocks 
const historyBlocks = document.querySelectorAll(".cal-details");

buttons.forEach((btn, index) => {
  btn.addEventListener("click", e => {
    e.preventDefault();

    let coinEl = document.getElementById("count-coin");
    let currentCoin = parseInt(coinEl.innerText);
    let newCoin = currentCoin - 20;

    if (newCoin >= 0) {
      coinEl.innerText = newCoin;
      alert("✔ " + btn.dataset.msg);

     
      if (historyBlocks[index]) {
        historyBlocks[index].style.display = "block";

        // call korar somoy time add hobe
        let clock = historyBlocks[index].querySelector(".clock");
        clock.innerText = new Date().toLocaleTimeString();
      }

    } else {
      coinEl.innerText = 0;
      alert("❌ You don't have enough coin. You need minimum 20 coin for each call.");
    }
  });
});

// clear history button 
document.querySelector(".call-history-head .btn").addEventListener("click", () => {
  historyBlocks.forEach(block => block.style.display = "none");
});


// time 
  function updateClock() {
      let now = new Date();
      let time = now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      });

      document.querySelectorAll(".clock").forEach(clock => {
        clock.innerText = time;
      });
    }

    setInterval(updateClock, 1000);
    updateClock();



   