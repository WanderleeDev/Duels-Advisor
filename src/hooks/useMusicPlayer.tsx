import { useState } from "react";
import VolumePlayer from "../shared/types/volumePlayer.type";

function useAudioPlayer() {
  const [audioError, setAudioError] = useState<string | null>(null);
  const [isActiveAudio, setIsActiveAudio] = useState(false);
  const audioPlayer = new Audio();

  audioPlayer.loop = true;
  audioPlayer.autoplay = true;
  audioPlayer.volume = 0.1;

  function setAudio(url: string): void {
    audioPlayer.src = url;
  }

  function playMusic() {
    audioPlayer
      .play()
      .then(() => setIsActiveAudio(true))
      .catch((err) => {
        err instanceof Error
          ? setAudioError(err.message)
          : setAudioError("something wrong");

        setIsActiveAudio(false);
      });
  }

  function pauseMusic(): void {
    audioPlayer.pause();
    setIsActiveAudio(false);
  }

  function setVolume(volume: VolumePlayer): void {
    if (volume > 1 || volume < 0) return;

    audioPlayer.volume = volume;
  }

  function restartAudioPlayer(): void {
    audioPlayer.currentTime = 0;
    pauseMusic();
    setAudioError(null);
  }

  return {
    audioPlayer,
    setAudio,
    playMusic,
    pauseMusic,
    setVolume,
    restartAudioPlayer,
    audioError,
    isActiveAudio,
  };
}

export default useAudioPlayer;
