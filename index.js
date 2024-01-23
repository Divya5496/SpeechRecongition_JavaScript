const text = document.querySelector('texts');

const start = document.getElementById('start');

const stop = document.getElementById('stop');


const speechRecongnition =  window.speechRecognition || window.webkitSpeechRecognition;
const recognition =  new speechRecongnition;

recognition.lang = 'en';

recognition.interimResults= false;

recognition.continuous = true; 

start.addEventListener('click',()=>{
    recognition.start();
    console.log('recognition started');
})

recognition.onresult=(e)=>{
    text.innerText = e.results[0][0].transcript;
    console.log(e);
}

stop.addEventListener('click',()=>{
    recognition.stop();
    console.log(`Recognition has stopped `);
})