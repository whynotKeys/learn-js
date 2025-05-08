// Geolocation API

interface Position {
  lat: number;
  lng: number;
  accuracy: number;
}

const btn = document.querySelector('button');

btn?.addEventListener('click', find);

function find(){
  navigator.geolocation.getCurrentPosition((currentPosition) => {
    console.log(currentPosition);
    const position: Position = {
      lat: currentPosition.coords.latitude, // 위도
      lng: currentPosition.coords.longitude, // 경도
      accuracy: currentPosition.coords.accuracy // 위경도 오차(m)
    };
    showPosition(position);
  });
}

const myPosition = document.querySelector('#my-position');
function showPosition(position: Position){
  if(myPosition){
    myPosition.textContent = `${position.lat},${position.lng}(${position.accuracy.toFixed()}m)`;
  }
}