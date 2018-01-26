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

const hourToAngle = hrs=> (hrs * 360) / 12;
const hourDesv = mnts => (mnts * 30) / 60;

function calcAngle(){
  let [hour, min] = getData();
  console.log(hour);
  console.log(min);
  if (validate(hour, min)){
    let txtHour
    if(hour == 12){
      hour = 0;
      txtHour == '12 Hours';
    }

    let hour_angle = hourToAngle(hour),
        min_angle = hourToAngle(min/60),
        desv = hourDesv(min);
  }
}