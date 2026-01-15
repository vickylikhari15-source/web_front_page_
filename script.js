const loginBtn = document.getElementById("loginBtn");
const msg = document.getElementById("msg");

loginBtn.addEventListener("click", () => {
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!email || !password) {
    msg.style.color = "#ff9c9c";
    msg.innerText = "Please enter email and password";
    return;
  }

  if (password.length < 6) {
    msg.style.color = "#ff9c9c";
    msg.innerText = "Password must be at least 6 characters";
    return;
  }

  msg.style.color = "#9cffc7";
  msg.innerText = "Login successful ✨ (Frontend demo)";
});

/* MOUSE EFFECT */
const mouseBg = document.querySelector(".mouse-bg");
let x = 50, y = 50, tx = 50, ty = 50;

document.addEventListener("mousemove", e => {
  tx = (e.clientX / window.innerWidth) * 100;
  ty = (e.clientY / window.innerHeight) * 100;
});

function animate() {
  x += (tx - x) * 0.08;
  y += (ty - y) * 0.08;
  mouseBg.style.setProperty("--x", `${x}%`);
  mouseBg.style.setProperty("--y", `${y}%`);
  requestAnimationFrame(animate);
}
animate();
