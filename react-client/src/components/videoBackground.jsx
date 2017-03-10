import React from 'react';

var nyanCatVideo = 'https://www.youtube.com/embed/QH2-TGUlwu4?autoplay=1&loop=1&playlist=QH2-TGUlwu4'

var VideoBackground = () => {
  <div classname = 'video-player'>
    <iframe classname = 'embedded-youtube-item' src={nyanCatVideo}</iframe>
  </div>
}

export default VideoBackground

