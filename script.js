// Royal intro: open the invitation only after the visitor taps the button.
document.body.classList.add("locked");
const welcomeScreen = document.getElementById("welcomeScreen");
const enterButton = document.getElementById("enterButton");
if (enterButton && welcomeScreen) {
  enterButton.addEventListener("click", () => {
    welcomeScreen.classList.add("hidden");
    document.body.classList.remove("locked");
    window.setTimeout(() => welcomeScreen.remove(), 1000);
    // Make sure the invitation page can scroll on mobile browsers.
    document.documentElement.style.overflowY = "auto";
    document.body.style.overflowY = "auto";
  });
} else {
  document.body.classList.remove("locked");
}

// Wedding countdown: Muhurtham begins on 15 November 2026 at 9:27 AM (India time).
const weddingDate = new Date("2026-11-15T09:27:00+05:30").getTime();
function updateCountdown(){
  const now = Date.now();
  const distance = weddingDate - now;
  if(distance <= 0){
    document.querySelector(".countdown").innerHTML = "<p class='body-copy' style='color:#f4d99a;grid-column:1/-1'>The beautiful day is here! Best wishes to the couple.</p>";
    return;
  }
  const units = {
    days: Math.floor(distance / (1000*60*60*24)),
    hours: Math.floor((distance % (1000*60*60*24)) / (1000*60*60)),
    minutes: Math.floor((distance % (1000*60*60)) / (1000*60)),
    seconds: Math.floor((distance % (1000*60)) / 1000)
  };
  Object.entries(units).forEach(([id,value])=>{
    const el=document.getElementById(id);
    if(el) el.textContent=String(value).padStart(2,"0");
  });
}
updateCountdown();
setInterval(updateCountdown,1000);
