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
        .catch(() => setIsPlaying(false));
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

  // 🔥 ПЛАВНЫЙ АВТОСКРОЛЛ (РЕАЛЬНО РАБОТАЕТ)
  useEffect(() => {
    if (!hasEntered) return;

    let animationFrameId: number;

    let lastTime = 0;
    const speed = 0.3; // 🔥 скорость (0.2–0.5 идеально)

    const scroll = (time: number) => {
      if (!lastTime) lastTime = time;

      const delta = time - lastTime;

      if (delta > 16) {
        window.scrollBy(0, speed * delta);
        lastTime = time;
      }

      // стоп внизу
      if (
        window.innerHeight + window.scrollY <
        document.body.scrollHeight
      ) {
        animationFrameId = requestAnimationFrame(scroll);
      }
    };

    const timeout = setTimeout(() => {
      animationFrameId = requestAnimationFrame(scroll);
    }, 1000);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(timeout);
    };
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