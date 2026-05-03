import { useState, useRef } from "react";
import { HeroSection } from "./components/HeroSection";
import { InvitationSection } from "./components/InvitationSection";
import { TimerSection } from "./components/TimerSection";
import { LocationSection } from "./components/LocationSection";
import { RsvpSection } from "./components/RsvpSection";
import { IntroOverlay } from "./components/IntroOverlay";
import { MusicPlayer } from "./components/MusicPlayer";

export default function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleEnter = () => {
    setHasEntered(true);
    if (audioRef.current) {
      try {
        audioRef.current.volume = 0.5; // 50% volume so it's not too loud
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => setIsPlaying(true))
            .catch((err) => {
              console.log(
                "Autoplay prevented or audio source invalid:",
                err,
              );
              setIsPlaying(false);
            });
        }
      } catch (err) {
        console.log("Audio play error:", err);
        setIsPlaying(false);
      }
    }
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      try {
        if (isPlaying) {
          audioRef.current.pause();
          setIsPlaying(false);
        } else {
          const playPromise = audioRef.current.play();
          if (playPromise !== undefined) {
            playPromise
              .then(() => setIsPlaying(true))
              .catch((err) => {
                console.log("Play prevented:", err);
                setIsPlaying(false);
              });
          }
        }
      } catch (err) {
        console.log("Audio toggle error:", err);
      }
    }
  };

  return (
    <div className="font-sans antialiased text-[#2f5f73] bg-[#f9f7f6] relative min-h-screen">
      {!hasEntered && <IntroOverlay onEnter={handleEnter} />}

      {/* 
        Музыка с Google Drive.
        ID файла: 1AspCtjXRPGDE5D65qdiG4Vnd7l1qCimk
        Если музыка не играет - убедитесь что доступ "Все, у кого есть ссылка"
      */}
      <audio
        ref={audioRef}
        src="https://drive.google.com/file/d/1AspCtjXRPGDE5D65qdiG4Vnd7l1qCimk/view?usp=sharing"
        loop
        preload="auto"
        onError={(e) => console.log("Audio failed to load")}
      />

      {hasEntered && (
        <MusicPlayer
          isPlaying={isPlaying}
          onToggle={toggleMusic}
        />
      )}

      <div
        className={`transition-opacity duration-1000 ${
          hasEntered
            ? "opacity-100"
            : "opacity-0 h-screen overflow-hidden"
        }`}
      >
        <HeroSection />
        <InvitationSection />
        <TimerSection />
        <LocationSection />
        <RsvpSection />
      </div>
    </div>
  );
}