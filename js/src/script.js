function getData(){
  let hour = document.getElementById('inputHours');
  let min = document.getElementById('inputMinutes');
  return hour, min;
}

function validate(hour, min){
  if(hour && min){
    if((0<=hour && hour<60) && (1<=min && min<=12)){
      return true;
    }
  }
  return false;
}

const hourToAngle = hrs=> (hrs * 360) / 12;
const hourDesv = mnts => (mnts * 30) / 60;

function calcAngle(){
  let hour, min = getData();
  if (validate(hour, min)){
    let hour_angle = hourToAngle(hour);
    let min_angle = hourToAngle(min/60);
    let desv = hourDesv(min);
  }
}