/*
 * This code and all components (c) Copyright 2019-2020, Wowza Media Systems, LLC. All rights reserved.
 * This code is licensed pursuant to the BSD 3-Clause License.
 */

import WowzaWebRTCPublish from './lib/WowzaWebRTCPublish.js';
window.WowzaWebRTCPublish = WowzaWebRTCPublish;
let browserDetails = window.adapter.browserDetails;

document.addEventListener('DOMContentLoaded', () => {
  let state = {
    publishing: false,
    pendingPublish: false,
    pendingPublishTimeout: undefined,
    muted: false,
    video: true,
    selectedCam: '',
    selectedMic: '',
    settings: {
      sdpURL: "wss://5f852799e11d1.streamlock.net/webrtc-session.json",
      applicationName: "live",
      streamName: "hello",
      audioBitrate: "64",
      audioCodec: "opus",
      videoBitrate: "3500",
      videoCodec: "42e01f",
      videoFrameRate: "30",
      frameSize: "1920x1080"
    }
  };

  const init = (connected, failed, stopped, errorHandler, soundMeter) => {
    initListeners();
    WowzaWebRTCPublish.on({
      onStateChanged: (newState) => {
        console.log("WowzaWebRTCPublish.onStateChanged");
        console.log(newState)

        // LIVE / ERROR Indicator
        if (newState.connectionState === 'connected') {
          connected();
        }
        else if (newState.connectionState === 'failed') {
          failed();
        }
        else {
          stopped();
        }
      },
      onCameraChanged: (cameraId) => {
        if (cameraId !== state.selectedCam) {
          state.selectedCam = cameraId;
          let camSelectValue = 'CameraMobile_' + cameraId;
          if (cameraId === 'screen') camSelectValue = 'screen_screen';
          console.log("SET CAM", cameraId)
          // $('#camera-list-select').val(camSelectValue);
        }
      },
      onMicrophoneChanged: (microphoneId) => {
        if (microphoneId !== state.selectedMic) {
          state.selectedMic = microphoneId;
          console.log("SET MIC", microphoneId)
          // $('#mic-list-select').val('MicrophoneMobile_' + microphoneId);
        }
      },
      onError: errorHandler,
      onSoundMeter: soundMeter
    })
    WowzaWebRTCPublish.set({
      videoElementPublish: document.getElementById('publisher-video'),
      useSoundMeter: true
    })
      .then((result) => {
        console.log("Media Result: ", result.cameras, result.microphones)
        // AvMenu.init(result.cameras, result.microphones, onAvMenuCameraChanged, onAvMenuMicrophoneChanged);
      });
  };

  // const getState = () => {
  //   return state;
  // }

  // throw errors with these messages
  const okToStart = () => {
    if (state.settings.sdpURL === "") {
      throw "No stream configured.";
    }
    else if (state.settings.applicationName === "") {
      throw "Missing application name.";
    }
    else if (state.settings.streamName === "") {
      throw "Missing stream name."
    }
    return true;
  }

  const updateFrameSize = (frameSize) => {
    let constraints = JSON.parse(JSON.stringify(WowzaWebRTCPublish.getState().constraints));
    if (frameSize === 'default') {
      constraints.video["width"] = { min: "640", ideal: "1280", max: "1920" };
      constraints.video["height"] = { min: "360", ideal: "720", max: "1080" };
    }
    else {
      constraints.video["width"] = { exact: frameSize[0] };
      constraints.video["height"] = { exact: frameSize[1] };
    }
    WowzaWebRTCPublish.set({ constraints: constraints });
  }

  const update = (settings) => {
    state.settings = settings;
    return WowzaWebRTCPublish.set(settings);
  }

  // start/stop publisher
  const start = () => {
    if (okToStart()) {
      WowzaWebRTCPublish.start();
    }
  };

  const stop = () => {
    WowzaWebRTCPublish.stop();
  };

  // const videoOn = () => {
  //   WowzaWebRTCPublish.setVideoEnabled(true);
  // }
  // const videoOff = () => {
  //   WowzaWebRTCPublish.setVideoEnabled(false);
  // }

  // const audioOn = () => {
  //   WowzaWebRTCPublish.setAudioEnabled(true);
  // }

  // const audioOff = () => {
  //   WowzaWebRTCPublish.setAudioEnabled(false);
  // }

  // Helpers

  const errorHandler = (error) => {
    let message;
    if (error.name == "OverconstrainedError") {
      console.log("OverconstrainedError")
      message = "Your browser or camera does not support this frame size: " + $("#frameSize option:selected").val();
      // $("#frameSize").val("default");
      updateFrameSize("default");
    } else if (error.message) {
      message = error.message;
    }
    else {
      message = error
    }
    showErrorPanel(message);
    stop();
  };

  const setPendingPublish = (pending) => {
    if (pending) {
      console.log("Publish Disable")
      // $("#publish-toggle").prop("disabled", true);
      state.pendingPublish = true;
      state.pendingPublishTimeout = setTimeout(() => {
        // $("#publish-toggle").prop("disabled", false);
        stop();
        errorHandler({ message: "Publish failed. Unable to connect." });
        setPendingPublish(false);
      }, 10000);
    }
    else {
      // $("#publish-toggle").prop("disabled", false);
      state.pendingPublish = false;
      if (state.pendingPublishTimeout != null) {
        clearTimeout(state.pendingPublishTimeout);
        state.pendingPublishTimeout = undefined;
      }
    }
  }

  const updatePublisher = () => {
    return update(state.settings);
  }

  /*
    UI updaters
  */

  const showErrorPanel = (message) => {
    console.log("showErrorPanel", message)
  }

  const hideErrorPanel = () => {
    console.log("hideErrorPanel")
  }

  // const onAvMenuCameraChanged = (cameraId) => {
  //   if (state.selectedCam !== cameraId) {
  //     state.selectedCam = cameraId;
  //     console.log("CAM ID = ", cameraId)
  //     WowzaWebRTCPublish.setCamera(cameraId);
  //   }
  // }

  // const onAvMenuMicrophoneChanged = (microphoneId) => {
  //   if (state.selectedMic !== microphoneId) {
  //     state.selectedMic = microphoneId;
  //     console.log("MIC ID = ", microphoneId)
  //     WowzaWebRTCPublish.setMicrophone(microphoneId);
  //   }
  // }

  // sound meter
  const onSoundMeter = (level) => {
    // map level onto the rising quadrant shape of a circle to exaggerate the sound meter gradient
    // let shiftLevel = level - 1;
    // let levelCirc = Math.round(100 * Math.sqrt(1 - (shiftLevel * shiftLevel)));
    // $("#mute-toggle").css("background-image", "linear-gradient(white " + (100 - levelCirc) + "%, lime)");
    // console.log("Show Level : ", levelCirc)
  };

  const onPublishPeerConnected = () => {
    state.publishing = true;
    setPendingPublish(false);
    hideErrorPanel();
    console.log("onPublishPeerConnected")
  }

  const onPublishPeerConnectionFailed = () => {
    setPendingPublish(false);
    onPublishPeerConnected();
    errorHandler({ message: "Peer connection failed." });
    console.log("onPublishPeerConnectionFailed")
  }

  const onPublishPeerConnectionStopped = () => {
    if (!state.pendingPublish) {
      state.publishing = false;
      console.log("onPublishPeerConnectionStopped")
    }
  }

  // Listeners
  const initListeners = () => {

    const toggle = document.getElementById("publish-toggle")
    toggle.addEventListener("click", () => {
      if (state.pendingPublish) {
        return;
      }
      else if (state.publishing) {
        stop();
      }
      else {
        try {
          hideErrorPanel()
          console.log("PPPPPublish")

          console.log(state)
          updatePublisher().then(() => {
            setPendingPublish(true);
            start();
          });
        } catch (e) {
          errorHandler(e);
        }
      }
    })

  }

  const initFormAndSettings = () => {
    const param = state.settings
    if (param.frameSize != null && param.frameSize !== '' && param.frameSize !== 'default') {
      updateFrameSize(param.frameSize.split('x'));
    }
    if (browserDetails.browser === 'safari') {
      console.log("Safari don't support VP9")
    }
  }
  initFormAndSettings();
  init(onPublishPeerConnected, onPublishPeerConnectionFailed, onPublishPeerConnectionStopped, errorHandler, onSoundMeter);
})
