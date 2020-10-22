/*
 * This code and all components (c) Copyright 2019-2020, Wowza Media Systems, LLC. All rights reserved.
 * This code is licensed pursuant to the BSD 3-Clause License.
 */

import WowzaWebRTCPlay from './lib/WowzaWebRTCPlay.js';
import * as CONFIG from '../config'
window.WowzaWebRTCPlay = WowzaWebRTCPlay;

export function initialize(onShowError, onHideError) {

  let state = {
    settings: {
      "playApplicationName": "live",
      "playSdpURL": `wss://${CONFIG.load(CONFIG.Key.STR_WEB_RTC_URL)}.streamlock.net/webrtc-session.json`,
      "playStreamName": CONFIG.load(CONFIG.Key.STR_WEB_RTC_RECEIVE_STREAM)
    }
  };
  let statePrefix = 'play';

  const init = (errorHandler, connected, stopped) => {
    initListeners();
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
      videoElementPlay: document.getElementById('wowza-receiver'),
    });
  }

  // const getState = () => {
  //   return state;
  // }

  const start = (settings) => {
    update(settings).then(() => {
      WowzaWebRTCPlay.play();
    });
  }

  // const stop = () => {
  //   WowzaWebRTCPlay.stop();
  // }

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
    Helpers
  */



  /*
    UI updaters
  */
  const onPlayPeerConnected = () => {
    state.playing = true;
    hideErrorPanel();
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
    showErrorPanel(message);
  };

  const showErrorPanel = (message) => {
    onShowError(message)
  }

  const hideErrorPanel = () => {
    onHideError()
  }

  /*
    Listeners
  */
  // Listeners
  const initListeners = () => {

    const btn = document.getElementById("play_btn")
    btn.addEventListener("click", () => {
      start(state.settings);
    })
  }

  const initFormAndSettings = () => {
    setTimeout(() => {
      start(state.settings);
    }, 2000)
  }
  initFormAndSettings();
  init(errorHandler, onPlayPeerConnected, onPlayPeerConnectionStopped);

}
