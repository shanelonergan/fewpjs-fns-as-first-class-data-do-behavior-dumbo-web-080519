/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time) {
  const hour = parseInt(time, 10);
  if ( hour < 12) return "Good Morning"
  if ( hour > 17) return "Good Evening"
  return "Good Afternoon"
}

function displayMessage(textGreeting) {
  let pageGreeting = document.getElementById('greeting')
  pageGreeting.innerText = textGreeting
}
