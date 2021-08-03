var convertBtn = document.querySelector('.convert-button');
var convertBtnMp3 = document.querySelector('.convert-button-mp3');
var URLinput = document.querySelector('.URL-input');

convertBtn.addEventListener('click', () => {
    sendURL(URLinput.value);
});

convertBtnMp3.addEventListener('click', () => {
    sendURLMp3(URLinput.value);
});

function sendURL(URL) {
    if(URL.trim() == ""){
        alert("Enter Video URL Before Convert")
    } else {
        window.location.href = `https://ytube-downloader-app.herokuapp.com/video?URL=${URL}`;
    }
}

function sendURLMp3(URL) {
    if(URL.trim() == ""){
        alert("Enter Video URL Before Convert")
    } else {
        window.location.href = `https://ytube-downloader-app.herokuapp.com/mp3?URL=${URL}`;
    }
}