//Add to audio and control options

const mySong = document.getElementById('audio__list');
const button = document.getElementById('control__button');

button.onclick = () =>{
    if(mySong.paused){
        mySong.play();
        button.src = 'assets/img/pause.png';
    }
    else{
        mySong.pause();
        button.src = 'assets/img/play.png';
    }
        
}