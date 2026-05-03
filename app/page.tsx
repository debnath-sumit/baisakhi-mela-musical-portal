"use client";

import React, { useMemo, useState } from "react";
import headerImage from "./Ruhee.jpg";

function getYouTubeId(url: string): string {
  const patterns = [
    /[?&]v=([^&]+)/,
    /youtu\.be\/([^?&/]+)/,
    /youtube\.com\/embed\/([^?&/]+)/,
    /youtube\.com\/shorts\/([^?&/]+)/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return url;
}

const getEmbedUrl = (url: string) => `https://www.youtube.com/embed/${getYouTubeId(url)}`;
const getThumbnail = (url: string) => `https://img.youtube.com/vi/${getYouTubeId(url)}/hqdefault.jpg`;

const videos = [
  {
    id: 1,
    title: "Opening Musical Performance",
    performer: "Baisakhi Mela Team",
    category: "Opening",
    description: "A joyful opening performance to start the Baisakhi Mela musical evening.",
    youtubeUrl: "https://youtu.be/PP1yE-M27cs",
  },
  {
    id: 2,
    title: "Anondo Dhara Bohiche Bhubone (Rabindra Sangeet)",
    performer: "Farhana Tuli, Purnendu Chakraborty",
    category: "Rabindra Sangeet",
    description: "A soulful Rabindra Sangeet rendition from the Baisakhi Mela musical evening.",
    youtubeUrl: "https://youtu.be/LxXiroOFfQc",
  },
  {
    id: 3,
    title: "আমার বন্ধু চিকন কালিয়া দেইখো আসিয়া",
    performer: "Mou, Nuva",
    category: "Vocal",
    description: "A vibrant folk performance from the Baisakhi Mela musical evening.",
    youtubeUrl: "https://youtu.be/oRVNmmUNwP8",
  },
  {
    id: 4,
    title: "নদীর কূল নাই কিনার নাইরে",
    performer: "",
    category: "Vocal",
    description: "A Bengali folk performance from the Baisakhi Mela musical evening.",
    youtubeUrl: "https://youtu.be/hlfXIHvAc1o",
  },
  {
    id: 5,
    title: "কানার হাট বাজার (Part 1)",
    performer: "Srijan Chakraborty",
    category: "Vocal",
    description: "First part of কানার হাট বাজার, captured live at the Baisakhi Mela.",
    youtubeUrl: "https://youtu.be/w5ImjdMc6kQ",
  },
  {
    id: 6,
    title: "কানার হাট বাজার (Part 2)",
    performer: "Srijan Chakraborty",
    category: "Vocal",
    description: "Continuation of কানার হাট বাজার from the Baisakhi Mela musical evening.",
    youtubeUrl: "https://youtu.be/0Gur3hPpn2M",
  },
  {
    id: 7,
    title: "ঘর লরবর করে",
    performer: "Sudipta",
    category: "Vocal",
    description: "A spirited vocal performance from the Baisakhi Mela musical evening.",
    youtubeUrl: "https://youtu.be/89muvbN4yC4",
  },
  {
    id: 8,
    title: "Hakuna Matata & Pagol Mon | Kids Live Performance",
    performer: "Riyon, Rai, Ishani, Ayana",
    category: "Fusion",
    description: "A lively kids' fusion performance from the Baisakhi Mela musical evening.",
    youtubeUrl: "https://youtu.be/RZDUDODTzlE",
  },
  {
    id: 9,
    title: "Kala Kala Kala | Bengali Song",
    performer: "Ishita, Rai",
    category: "Vocal",
    description: "A delightful Bengali song performance from the Baisakhi Mela musical evening.",
    youtubeUrl: "https://youtu.be/guDinaeCT4Q",
  },
  {
    id: 10,
    title: "Ke Bole Ami Bhalo Nai | Bengali Performance",
    performer: "Aritra",
    category: "Vocal",
    description: "A heartfelt Bengali performance from the Baisakhi Mela musical evening.",
    youtubeUrl: "https://youtu.be/StBzewDpzJw",
  },
  {
    id: 11,
    title: "Cafe",
    performer: "Local Artist",
    category: "Vocal",
    description: "A live performance of Cafe from the Baisakhi Mela musical evening.",
    youtubeUrl: "https://youtu.be/KqboIipPQGs",
  },
  {
    id: 12,
    title: "Bagichay Bulbuli Tui",
    performer: "Sudipta, Srijan",
    category: "Vocal",
    description: "A duet performance of Bagichay Bulbuli Tui from the Baisakhi Mela musical evening.",
    youtubeUrl: "https://youtu.be/Yl_BmN71P8M",
  },
];

export default function BaisakhiMelaMusicalPortal() {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = ["All", ...Array.from(new Set(videos.map((video) => video.category)))];

  const filteredVideos = useMemo(() => {
    return videos.filter((video) => {
      const searchText = `${video.title} ${video.performer}`.toLowerCase();
      const matchesQuery = searchText.includes(query.toLowerCase());
      const matchesCategory = category === "All" || video.category === category;
      return matchesQuery && matchesCategory;
    });
  }, [query, category]);

  const openVideo = (video: (typeof videos)[number]) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="bg-gradient-to-br from-red-700 via-red-500 to-white px-6 py-16 text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1.2fr_1fr]">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium">
              🎵 Baisakhi Mela Musical Program
            </div>
            <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
              Celebrate music, memories, and community performances.
            </h1>
            <p className="mt-5 text-lg text-white/90">
              Watch all musical program videos from the Baisakhi Mela-2026 in one portal.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold">
              <div className="rounded-2xl bg-white/20 px-4 py-3">📅 Baisakhi Mela 2026</div>
              <div className="rounded-2xl bg-white/20 px-4 py-3">👥 Community Musical Evening</div>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-white/40 via-red-300/30 to-transparent blur-2xl" />
              <div className="absolute -bottom-4 -right-4 hidden h-24 w-24 rounded-full bg-yellow-300/80 blur-2xl md:block" />
              <img
                src={headerImage.src}
                alt="Baisakhi Mela celebration"
                className="relative aspect-[3/4] w-full max-w-md rounded-[2rem] object-cover shadow-2xl ring-1 ring-white/40 transition duration-500 hover:rotate-0 md:rotate-2 md:hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">
        <section>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-red-600">All Performances</p>
              <h2 className="mt-1 text-3xl font-extrabold">Video Gallery</h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search performer or song"
                className="w-full rounded-2xl border border-red-100 bg-white px-4 py-3 shadow-sm outline-none focus:border-red-500 sm:w-64"
              />
              <select
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                className="rounded-2xl border border-red-100 bg-white px-4 py-3 shadow-sm outline-none focus:border-red-500"
              >
                {categories.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredVideos.map((video) => (
              <article
                key={video.id}
                className="group overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
              >
                <button onClick={() => openVideo(video)} className="relative block w-full text-left">
                  <img src={getThumbnail(video.youtubeUrl)} alt={video.title} className="aspect-video w-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition group-hover:bg-black/45">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-3xl text-red-600 shadow-xl">
                      ▶
                    </span>
                  </div>
                </button>
                <div className="p-5">
                  <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-700">{video.category}</span>
                  <h3 className="mt-4 text-xl font-bold">{video.title}</h3>
                  {video.performer && (
                    <p className="mt-1 text-sm font-medium text-slate-600">{video.performer}</p>
                  )}
                  <p className="mt-3 text-sm text-slate-500">{video.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-3xl bg-gradient-to-br from-red-50 via-white to-red-50 p-8 shadow-inner ring-1 ring-red-100 md:p-12">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-wide text-red-600">Behind the Music</p>
            <h2 className="mt-1 text-3xl font-extrabold">Meet the Team</h2>
          </div>

          <div className="mx-auto mt-8 max-w-2xl rounded-3xl bg-white p-6 text-center shadow-md ring-1 ring-red-100">
            <p className="text-2xl">🎬</p>
            <p className="mt-2 text-xs font-bold uppercase tracking-wider text-red-600">Directed by</p>
            <p className="mt-1 text-xl font-bold">Abesh Bhattacharjee &amp; Purnendu Chakraborty</p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: "🥁", role: "Drums", names: "Subhronil" },
              { icon: "🎸", role: "Guitar", names: "Jerry & Riyon" },
              { icon: "🎻", role: "Violin", names: "Nikhil" },
              { icon: "🪘", role: "Tabla", names: "Suhas" },
              { icon: "🎶", role: "Percussion", names: "Abesh" },
              { icon: "🎹", role: "Keyboard", names: "Srijan & Purnendu" },
            ].map((member) => (
              <div
                key={member.role}
                className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-red-100 transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-2xl">
                    {member.icon}
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-red-600">{member.role}</p>
                    <p className="mt-0.5 font-semibold text-slate-900">{member.names}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-10 bg-red-700 px-6 py-8 text-center text-white">
        <p className="font-semibold">Organised by GSBA</p>
        <p className="mt-2 text-sm text-white/80">Created by Sumit Debnath</p>
      </footer>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b p-4">
              <div>
                <h3 className="font-bold">{selectedVideo.title}</h3>
                {selectedVideo.performer && (
                  <p className="text-sm text-slate-500">{selectedVideo.performer}</p>
                )}
              </div>
              <button onClick={() => setIsModalOpen(false)} className="rounded-full bg-slate-100 px-3 py-2 text-xl hover:bg-slate-200">
                ×
              </button>
            </div>
            <div className="aspect-video bg-black">
              <iframe
                className="h-full w-full"
                src={getEmbedUrl(selectedVideo.youtubeUrl)}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
