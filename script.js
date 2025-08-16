let currentCamera = 1;
const feed = document.getElementById('camera-feed');
const staticEffect = document.getElementById('static');

function switchCamera(camNumber) {
  currentCamera = camNumber;
  feed.src = `cams/cam${camNumber}.gif`;

  // Flicker effect
  staticEffect.style.opacity = 0.6;
  setTimeout(() => {
    staticEffect.style.opacity = 0;
  }, 300);
}
