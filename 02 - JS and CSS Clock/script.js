
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`
  console.log('seconds: ', secondDegrees);

  const minutes = now.getMinutes();
  const minuteDegrees = ((minutes / 60) * 360) + 90;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg`
  console.log('minute: ', minuteDegrees)

  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + ((minutes/60)*30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  console.log('hour: ', hourDegrees)
}

function currentTime() {
  const now = new Date();
  ampm = "am";
  hour = now.getHours();
  min = now.getMinutes();
  sec = now.getSeconds();

  if(hour>11) {ampm = "pm"}
  if(hour>12) {hour = hour-12}
  if(hour==0){hour = 12}
  if (min<10) { min = "0" + min; }
  if (sec<10) { sec = "0" + sec; }
  document.getElementById('timehere').innerHTML = hour + ":" + min + ":" + sec + " " + ampm;
  t=setTimeout('currentTime()',500);
}


setInterval(setDate, 1000);
setDate();
currentTime();