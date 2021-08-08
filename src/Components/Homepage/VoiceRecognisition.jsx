import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import '../../Css/Homepage.css';
export default function VoiceRecognisition({q,callbackQuery}) {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(function(stream) {
        console.log('You let me use your mic!')
      })
      .catch(function(err) {
        console.log('No mic for you!')
      });
    const {
        transcript,
        listening,
        browserSupportsSpeechRecognition
      } = useSpeechRecognition();
    const listenContinously = () => SpeechRecognition.startListening({ continuous: true,language: 'en-GB' });
      if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition. Please use Chrome</span>;
      }
      function handleSearch() {
        callbackQuery(transcript)
        console.log(transcript)
      }
    return (
        <div className='voice'>
            <p className='mic'>Microphone: {listening ? 'on' : 'off'}</p>
            {listening ? <button className="searchButton2"
            onClick={handleSearch}
            >Search</button> : <button className="searchButton2"
            onClick={listenContinously}
            >'Click To Talk'</button>}
            <p className='transcript'>{transcript}</p>
        </div>
    )
}
