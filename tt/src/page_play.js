/*
 * This code and all components (c) Copyright 2019-2020, Wowza Media Systems, LLC. All rights reserved.
 * This code is licensed pursuant to the BSD 3-Clause License.
 */

import WowzaWebRTCPlay from './lib/WowzaWebRTCPlay.js';
window.WowzaWebRTCPlay = WowzaWebRTCPlay;

let state = {
  settings: {
    "playApplicationName": "live",
    "playSdpURL": "wss://5f852799e11d1.streamlock.net/webrtc-session.json",
    "playStreamName": "hello"
  }
};
let statePrefix = 'play';

const init = (errorHandler, connected, stopped) => {
  WowzaWebRTCPlay.on({
    onError: errorHandler,
    onStateChanged: (state) => {
      if (state.connectionState === 'connected') {
        connected();
      } else {
        stopped();
      }
    }
  });
  WowzaWebRTCPlay.set({
    videoElementPlay: document.getElementById('player-video'),
  });
}

const getState = () => {
  return state;
}

const start = (settings) => {
  update(settings).then(() => {
    WowzaWebRTCPlay.play();
  });
}

const stop = () => {
  WowzaWebRTCPlay.stop();
}

const update = (settings) => {
  state.settings = settings;
  let sendSettings = {};
  for (let key in settings) {
    let sendKey = key.substring(statePrefix.length);
    sendKey = sendKey[0].toLowerCase() + sendKey.slice(1);
    sendSettings[sendKey] = settings[key];
  }
  return WowzaWebRTCPlay.set(sendSettings);
}

/*
  UI updaters
*/
const onPlayPeerConnected = () => {
  state.playing = true;
  console.log("PLAYING STATUS")
}

const onPlayPeerConnectionStopped = () => {
  state.playing = false;
  console.log("STOP STATUS")
}

// error Handler
const errorHandler = (error) => {
  let message;
  if (error.message) {
    message = error.message;
  }
  else {
    message = error
  }
  console.log(message)
};

const initFormAndSettings = () => {
  setTimeout(() => {
    start(state.settings);
  }, 2000)
}
initFormAndSettings();
init(errorHandler, onPlayPeerConnected, onPlayPeerConnectionStopped);
