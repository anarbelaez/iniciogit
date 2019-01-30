var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/youtube-logo.png') {
      myImage.setAttribute ('src','images/imagen2.png');
    } else {
      myImage.setAttribute ('src','images/youtube-logo.png');
    }
}

