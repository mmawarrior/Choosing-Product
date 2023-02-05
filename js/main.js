var pictureList = [
  'img/Iphone7black.png',
  'img/Iphone7goldback.png',
  'img/Iphonejetblack.png',
  'img/Iphone7Rosegold.png',
  'img/Iphone7silver.png'
];

function changeImage(indexNumber) {
  var target = document.getElementById('target');
  target.src = pictureList[indexNumber];
}
