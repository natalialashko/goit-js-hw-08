import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);


player.on('timeupdate', throttle(function(currentTime) {
    // console.log('played the video!');
    localStorage.setItem("videoplayer-current-time", JSON.stringify(currentTime));
},1000));

function currentTimeV() {
    const timeApDateVideo = JSON.parse(localStorage.getItem("videoplayer-current-time"));
    console.log(timeApDateVideo.seconds);
    return timeApDateVideo;
}
const currentConfigVideo = currentTimeV();
    player.setCurrentTime(currentConfigVideo.seconds).then(function (seconds) {
    
    }).catch(function (error) {
        switch (error.name) {
            case 'RangeError':
                break;

            default:
                break;
        }
    });
  



