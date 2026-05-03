import { useState, useRef, useEffect } from "react";
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
      audioRef.current.volume = 0.5;

      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.log("Autoplay blocked:", err);
          setIsPlaying(false);
        });
    }
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  // 🔥 АВТОСКРОЛЛ
  useEffect(() => {
    if (hasEntered) {
      setTimeout(() => {
        window.scrollTo({
          top: window.innerHeight,
          behavior: "smooth",
        });
      }, 1500);
    }
  }, [hasEntered]);

  return (
    <div className="font-sans antialiased text-[#2f5f73] bg-[#f9f7f6] relative min-h-screen">
      {!hasEntered && <IntroOverlay onEnter={handleEnter} />}

      {/* 🎵 Музыка */}
      <audio ref={audioRef} loop preload="auto">
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>

      {hasEntered && (
        <MusicPlayer isPlaying={isPlaying} onToggle={toggleMusic} />
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