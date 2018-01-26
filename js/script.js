function getData(){
  let hour = document.getElementById('inputHours').value;
  let min = document.getElementById('inputMinutes').value;
  return [hour, min];
}

function validate(hour, min){
  if(hour && min){
    if((1<=hour && hour<=12) && (1<=min && min<=60)){
      return true;
    }
  }
  return false;
}

const hourToAngle = hrs => (hrs * 360) / 12;
const minToAngle = min =>(min * 360) / 60;
const hourDesv = min => (min * 30) / 60;

function showResult(hour, min, result){
  let error = document.getElementById('error');
  let hResult = document.getElementById('hourResult');
  let mResult = document.getElementById('minResult');
  let infoMsj = document.getElementById('info-message');
  let resultMsj = document.getElementById('result-message');
  let res = document.getElementById('final-value');
  if(hour == 0){
    hour = 12;
  }
  let txtHour = `${hour} Hours`,
      txtMin = `${min} Minutes`,
      txtResult = result;
  if(hour == 1){
    txtHour = `${hour} Hour`;
  }
  if(min == 1){
    txtMin = `${min} Minute`;
  }
  hResult.textContent = txtHour;
  mResult.textContent = txtMin;
  error.classList.remove('visible');
  infoMsj.classList.remove('visible');
  resultMsj.classList.add('visible');
  res.textContent = result;
}

function showError(){
  document.getElementById('error').classList.add('visible');
  document.getElementById('info-message').textContent = 'Write a valid value.';
  document.getElementById('info-message').classList.add('visible');
  document.getElementById('result-message').classList.remove('visible');
  document.getElementById('final-value').textContent = 0;
}

function calcAngle(){
  let [hour, min] = getData();
  console.log(hour);
  console.log(min);
  if (validate(hour, min)){
    if(hour == 12){
      hour = 0;
    }
    let hourAngle = hourToAngle(hour),
        minAngle = minToAngle(min),
        desvAngle = hourDesv(min);
    let result  = Math.abs(hourAngle + desvAngle - minAngle);
    showResult(hour, min, result);
  }else{
    showError();
  }
}