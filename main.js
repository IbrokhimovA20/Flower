// When the page loads
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);

    // Start creating snowflakes after the loading animation
    setInterval(createSnowflake, 200);
  }, 1000);
};

// Function to create a snowflake
function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.textContent = '•';
  snowflake.style.fontSize = Math.random() * 24 + 10 + 'px';
  snowflake.style.left = Math.random() * window.innerWidth + 'px';
  snowflake.style.animation = `
    fall ${Math.random() * 4 + 4}s linear infinite, 
    sideWays ${Math.random() * 2 + 1}s ease-in-out infinite`;

  document.body.appendChild(snowflake);

  // Remove snowflake after it falls
  setTimeout(() => {
    snowflake.remove();
  }, Math.random() * 4000 + 4000);
}

// Adding keyframes for animations dynamically
document.styleSheets[0].insertRule(`
  @keyframes fall { 
    0% { top: -50px; } 
    100% { top: 100vh; } 
  }`, document.styleSheets[0].cssRules.length);

document.styleSheets[0].insertRule(`
  @keyframes sideWays { 
    0%, 100% { transform: translateX(0); } 
    50% { transform: translateX(20px); } 
  }`, document.styleSheets[0].cssRules.length);
