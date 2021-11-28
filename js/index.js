var img = [
  './assets/images/pic0.jpg',
  './assets/images/pic1.jpg',
  './assets/images/pic2.jpg',
  './assets/images/pic3.jpg',
  './assets/images/pic4.jpg',
]
var next = document.getElementById('nextBtn')
var prev = document.getElementById('prevBtn')
var caption = ['Tiger', 'Nature', 'Bedroom', 'Dog', 'Parrot', 'Puppet']
var count = 0

next.onclick = () => {
  count++;
  if (count > 5) count = 0
  document.getElementById('lg_img').src = './assets/images/pic' + count + '.jpg';
  document.getElementById('capt').innerHTML = caption[count];
}
prev.onclick = () => {
  count--;
  if (count < 0) count = 5;
  document.getElementById('lg_img').src = './assets/images/pic' + count + '.jpg';
  document.getElementById('capt').innerHTML = caption[count];
}

// var thumbs = document.getElementsByClassName("thumbs").getElementsByTagName("img");
function gallery() {
  document.getElementsById('lg_img').src = this.src;
}
var thumbs = document.getElementsByClassName("thumbs").getElementsByTagName("img");
  
for (let i = 0; i < thumbs.length; i++) {
  thumbs[i].onclick = gallery;
}
