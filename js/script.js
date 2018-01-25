
function calc_angle(hour, min) {
  let txt_hour = `${hour} Hours`;
  let txt_min = `${min} Minutes`;
  if(hour == 12){
      hour = 0;
  }
  let m_Angle = (min * 360) / 60;
  let h_Angle = (hour * 360) / 12;
  let desv = (min * 30) / 60;
  let result = (Math.abs(m_Angle - (h_Angle + desv)));
  msj(txt_hour, txt_min, result);
}

function error(){
  document.getElementById('error').classList.add('visible');
  document.getElementById('info-message').classList.add('visible');
  document.getElementById('info-message').textContent = "Write a valid value.";
  document.getElementById('result-message').classList.remove('visible');
  document.getElementById('final-value').textContent = "0";
}

function msj(txt_hour, txt_min, result){
  document.getElementById('error').classList.remove('visible');
  document.getElementById('info-message').classList.remove('visible');
  document.getElementById('result-message').classList.add('visible');
  document.getElementById('hour-result').textContent = txt_hour;
  document.getElementById('minutes-result').textContent = txt_min;
  document.getElementById('final-value').textContent = result;
}

const valid_hour = val =>{
  if (val != null && val != "" && val>=1 && val<=12){
    return true;
  }else{
    document.getElementById('input_hours').focus();
    return false;
  }
}

const valid_min = val =>{
  if (val != null && val != "" && val>=0 && val<=59){
    return true;
  }else{
    document.getElementById('input_minutes').focus();
    return false;
  }
}

function get_inputs(){
  let hour = document.getElementById('input_hours').value;
  let min = document.getElementById('input_minutes').value;

  if(valid_hour(hour) == true && valid_min(min) == true){
    calc_angle(hour, min);
  }else {
    error();
  }
}
