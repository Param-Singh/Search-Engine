import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

export default function VoiceRecognisition() {
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
        resetTranscript,
        browserSupportsSpeechRecognition
      } = useSpeechRecognition();
    const listenContinously = () => SpeechRecognition.startListening({ continuous: true,language: 'en-GB' });
      if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
      }
    return (
        <div>
            <p>Microphone: {listening ? 'on' : 'off'}</p>
            <button
            onClick={listenContinously}
            >{listening ? 'Click On Search': 'Hold To Talk'}</button>
            <p>{transcript}</p>
        </div>
    )
}
