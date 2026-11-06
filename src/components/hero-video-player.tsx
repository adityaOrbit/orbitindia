"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { withBasePath } from "@/lib/utils";

type VideoItem = {
  id: string;
  title: string;
  category: string;
  duration: string;
  src: string;
  poster: string;
  description: string;
};

const DEMO_VIDEOS: VideoItem[] = [
  {
    id: "calorimeter",
    title: "Parr 6400 & 7400 Isoperibol Calorimeters",
    category: "Analytical Instruments",
    duration: "1:24",
    // Standard reliable royalty-free tech/lab clip
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    poster: "/images/products/calorimeter-hero.jpg",
    description: "Automated oxygen charging, vessel wash cycle, and precision heat calculation.",
  },
  {
    id: "reactors",
    title: "Parr Stirred High-Pressure Reactors",
    category: "Reactors & Pressure Vessels",
    duration: "2:05",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    poster: "/images/inner-banner.jpg",
    description: "High temperature and pressure catalytic synthesis under computer-controlled safety.",
  },
  {
    id: "tga",
    title: "TGA 3000 Thermogravimetric Analyser",
    category: "Thermal Analysis",
    duration: "1:48",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    poster: "/images/products/tga-3000.jpg",
    description: "Automated proximate analysis of coal, coke and solid fuels for up to 19 crucibles.",
  },
];

export function HeroVideoPlayer() {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const activeVideo = DEMO_VIDEOS[activeVideoIndex];

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // If browser restricts autoplay
          setIsPlaying(false);
        });
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleSelectVideo = (index: number) => {
    setActiveVideoIndex(index);
    setIsPlaying(true);
    setVideoError(false);
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-slate-900/90 shadow-2xl backdrop-blur-md">
      {/* Video Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950 sm:aspect-[16/9]">
        {/* Video element */}
        <video
          ref={videoRef}
          poster={withBasePath(activeVideo.poster)}
          playsInline
          muted={isMuted}
          loop
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onError={() => setVideoError(true)}
          className="h-full w-full object-cover transition duration-300"
        >
          <source src={activeVideo.src} type="video/mp4" />
        </video>

        {/* Fallback image overlay if video errors or hasn't started */}
        {videoError && (
          <Image
            src={withBasePath(activeVideo.poster)}
            alt={activeVideo.title}
            fill
            className="object-cover"
          />
        )}

        {/* Gradient dark vignette */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/40" />

        {/* Top Badges */}
        <div className="absolute left-3 top-3 right-3 flex items-center justify-between gap-2 z-10">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-md ring-1 ring-white/20">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Instrument Demo
          </span>
          <span className="rounded-full bg-black/50 px-2.5 py-0.5 text-[10px] font-semibold text-slate-300 backdrop-blur-sm">
            {activeVideo.category}
          </span>
        </div>

        {/* Play/Pause Center Button Overlay (when paused) */}
        {!isPlaying && (
          <button
            type="button"
            onClick={togglePlay}
            aria-label="Play video demo"
            className="group absolute inset-0 m-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#ff8d0a] text-white shadow-2xl transition hover:scale-110 hover:bg-[#ffa426] focus:outline-hidden z-20 cursor-pointer"
          >
            <Play className="h-7 w-7 translate-x-0.5 fill-current" />
          </button>
        )}

        {/* Bottom Video Controls Bar */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-3 rounded-xl bg-black/60 px-3.5 py-2 text-xs text-white backdrop-blur-md ring-1 ring-white/10 z-10">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={togglePlay}
              className="text-white hover:text-[#ff8d0a] transition"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 fill-current" />}
            </button>
            <button
              type="button"
              onClick={toggleMute}
              className="text-white hover:text-[#ff8d0a] transition"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </button>
            <span className="text-[11px] font-medium text-slate-300 truncate max-w-[180px] sm:max-w-xs">
              {activeVideo.title}
            </span>
          </div>

          <span className="font-mono text-[11px] text-[#ffb347] shrink-0">
            {activeVideo.duration}
          </span>
        </div>
      </div>

      {/* Video Playlist Selector */}
      <div className="border-t border-white/10 bg-slate-900/95 p-3 sm:p-4">
        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
          Select Product Video Demonstration:
        </p>
        <div className="mt-2 grid grid-cols-3 gap-2">
          {DEMO_VIDEOS.map((vid, idx) => {
            const isSelected = activeVideoIndex === idx;
            return (
              <button
                key={vid.id}
                type="button"
                onClick={() => handleSelectVideo(idx)}
                className={`flex flex-col text-left p-2 rounded-lg border text-xs transition cursor-pointer ${
                  isSelected
                    ? "border-[#ff8d0a] bg-white/10 text-white font-bold"
                    : "border-white/5 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span className="text-[10px] text-[#ffb347] font-semibold truncate">
                  {idx + 1}. {vid.id.toUpperCase()}
                </span>
                <span className="truncate text-[11px] mt-0.5">{vid.title.split(" ")[0]} {vid.title.split(" ")[1]}</span>
              </button>
            );
          })}
        </div>
        <p className="mt-2 text-[11px] text-slate-400 leading-snug">
          {activeVideo.description}
        </p>
      </div>
    </div>
  );
}
