import React, { useState, useRef } from "react";
import {
  MapPin,
  Phone,
  Clock,
  Sparkles,
  ArrowUpRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
} from "lucide-react";

// Image Imports
import cake1 from "/images/cake-1.jpg";
import cake2 from "/images/cake-2.jpg";
import logoImg from "/images/logo.jpg";
import matchaGoldImg from "/images/matcha-gold.jpg";
import blackSesameImg from "/images/black-sesame.jpg";
import basqueFloralImg from "/images/basque-floral.jpg";
import teaSetImg from "/images/tea-set.jpg";

// Video Imports
import heroVideo from "/videos/vido-1.mp4";
import showcaseVideo from "/videos/vido-2.mp4";

export default function App() {
  const [activeTab, setActiveTab] = useState("specials");
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const menuData = {
    specials: [
      {
        name: "Matcha Lemon Basque",
        price: "Summer Special",
        desc: "Matcha basque cheesecake with whipped cream & lemon zest",
        image: cake1,
      },
      {
        name: "Guava Marble Mousse",
        price: "Summer Special",
        desc: "Layered guava filling mousse cake with graham crust",
        image: cake2,
      },
      {
        name: "Tea Tasting Flight",
        price: "$33.00",
        desc: "Three individual teas brewed table-side with traditional tea snacks",
        image: teaSetImg,
      },
    ],
    teas: [
      {
        name: "Traditional Tea Set Service",
        price: "$28.00",
        desc: "Full table-side loose leaf tea setup served with traditional teaware",
        image: teaSetImg,
      },
      {
        name: "Milky Oolong",
        price: "Taiwan",
        desc: "Naturally creamy, silky smooth floral profile",
      },
      {
        name: "Tie Guan Yin",
        price: "Fujian",
        desc: "Classic iron goddess roasted oolong tea",
      },
      {
        name: "Lychee Black Tea",
        price: "Guangdong",
        desc: "Sweet, fruit-infused aromatic black tea",
      },
    ],
    cakes: [
      {
        name: "Matcha Gold Leaf Mousse",
        price: "$10.50",
        desc: "Layered matcha cake topped with edible gold leaf",
        image: matchaGoldImg,
      },
      {
        name: "Hojicha / Black Sesame Cake",
        price: "$10.00",
        desc: "Nutty black sesame mousse on a crunchy base",
        image: blackSesameImg,
      },
      {
        name: "Floral Basque Cheesecake",
        price: "$9.50",
        desc: "Rich baked basque slice garnished with fresh edible floral petals",
        image: basqueFloralImg,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#f7f4ee] text-[#1e251f] font-sans">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f7f4ee]/90 backdrop-blur-md border-b border-[#e2dcd0] px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src={logoImg}
            alt="Duo Cafe Logo"
            className="w-10 h-10 rounded-full object-cover border border-[#2d5234]"
          />
          <span className="text-xl font-serif font-semibold tracking-wider text-[#2d5234]">
            DUO CAFE
          </span>
        </div>

        <div className="flex gap-6 text-sm font-medium text-[#4a584c]">
          <a
            href="#specials"
            className="hover:text-[#2d5234] transition-colors"
          >
            Specials
          </a>
          <a
            href="#video-showcase"
            className="hover:text-[#2d5234] transition-colors"
          >
            Experience
          </a>
          <a href="#menu" className="hover:text-[#2d5234] transition-colors">
            Menu
          </a>
          <a href="#visit" className="hover:text-[#2d5234] transition-colors">
            Visit Us
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden pt-16">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 filter brightness-[0.70]"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30 z-10" />

        <div className="relative z-20 text-center text-[#f7f4ee] px-6 max-w-3xl">
          <span className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold tracking-widest uppercase mb-4 inline-block">
            East Village • NYC
          </span>

          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 drop-shadow-md">
            Tea Flights & Seasonal Cakes
          </h1>

          <p className="text-lg md:text-xl font-light text-slate-100 mb-8 max-w-xl mx-auto leading-relaxed">
            The coziest tea house in NYC. Experience table-side brewed tea
            flights, hand-crafted matcha basques, and seasonal mousse desserts.
          </p>

          <a
            href="#visit"
            className="inline-flex items-center gap-2 bg-[#2d5234] hover:bg-[#1f3a24] text-[#f7f4ee] px-8 py-3.5 rounded-full font-medium transition-all shadow-lg hover:scale-105"
          >
            Visit Duo Cafe <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Summer Specials Section */}
      <section id="specials" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-[#2d5234] font-semibold">
            Seasonal Menu
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-[#1e251f] mt-1">
            Summer Specials
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#efe9dd] border border-[#e2dcd0] rounded-3xl p-8 flex flex-col md:flex-row items-center gap-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-full md:w-1/2 aspect-square rounded-2xl overflow-hidden bg-white/50">
              <img
                src={cake1}
                alt="Matcha Lemon Basque"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#2d5234] bg-[#2d5234]/10 px-3 py-1 rounded-full">
                Summer Special
              </span>
              <h3 className="text-2xl font-serif font-semibold mt-3 text-[#1e251f]">
                Matcha Lemon Basque
              </h3>
              <p className="text-xs text-[#6a786c] mb-3">抹茶柠檬巴斯克</p>
              <p className="text-sm text-[#4a584c] leading-relaxed">
                Rich matcha basque cheesecake topped with light whipped cream
                and fresh lemon zest.
              </p>
            </div>
          </div>

          <div className="bg-[#efe9dd] border border-[#e2dcd0] rounded-3xl p-8 flex flex-col md:flex-row items-center gap-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-full md:w-1/2 aspect-square rounded-2xl overflow-hidden bg-white/50">
              <img
                src={cake2}
                alt="Guava Marble Mousse"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#2d5234] bg-[#2d5234]/10 px-3 py-1 rounded-full">
                Summer Special
              </span>
              <h3 className="text-2xl font-serif font-semibold mt-3 text-[#1e251f]">
                Guava Marble Mousse
              </h3>
              <p className="text-xs text-[#6a786c] mb-3">番石榴慕斯</p>
              <p className="text-sm text-[#4a584c] leading-relaxed">
                Layered guava filling mousse cake with a delicate marble pattern
                and graham crust base.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Video Showcase */}
      <section
        id="video-showcase"
        className="py-20 px-6 max-w-5xl mx-auto border-t border-[#e2dcd0]"
      >
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#2d5234]">
            Atmosphere & Ritual
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-[#1e251f] mt-1">
            A Glimpse Inside
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative rounded-3xl overflow-hidden border border-[#e2dcd0] bg-black shadow-lg group">
            <video
              ref={videoRef}
              src={showcaseVideo}
              playsInline
              loop
              muted={isMuted}
              className="w-full aspect-[9/16] object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-between">
              <div className="flex justify-end">
                <button
                  onClick={toggleMute}
                  className="p-2.5 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md text-white transition-all"
                  aria-label="Toggle Mute"
                >
                  {isMuted ? (
                    <VolumeX className="w-5 h-5" />
                  ) : (
                    <Volume2 className="w-5 h-5" />
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-serif font-semibold text-white">
                    Tea Brewing Process
                  </h3>
                  <p className="text-xs text-slate-300">
                    Freshly prepared table-side
                  </p>
                </div>

                <button
                  onClick={togglePlay}
                  className="p-4 rounded-full bg-[#2d5234] hover:bg-[#1f3a24] text-[#f7f4ee] shadow-lg transition-all hover:scale-110"
                  aria-label="Play or Pause"
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6" />
                  ) : (
                    <Play className="w-6 h-6 ml-0.5" />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="p-6">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#2d5234] bg-[#2d5234]/10 px-3 py-1 rounded-full">
              Handcrafted Experience
            </span>
            <h3 className="text-3xl font-serif font-semibold text-[#1e251f] mt-4 mb-4">
              Crafted with Precision & Elegance
            </h3>
            <p className="text-[#5a685c] leading-relaxed mb-6">
              Watch our baristas prepare signature tea tasting flights and pour
              handcrafted matcha. Every detail is curated to provide a peaceful
              retreat in the heart of East Village.
            </p>
            <ul className="space-y-3 text-sm text-[#3d4a3e]">
              <li className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#2d5234]" /> Table-side loose
                leaf tea brewing
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#2d5234]" /> Freshly baked
                seasonal basque cheesecakes
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Menu Section with Image Cards */}
      <section
        id="menu"
        className="py-20 px-6 bg-[#efe9dd] border-y border-[#e2dcd0]"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-[#1e251f]">
              Full Menu
            </h2>
            <p className="text-[#5a685c] mt-2">
              Loose leaf teas & artisanal desserts
            </p>

            <div className="flex justify-center gap-3 mt-8">
              {["specials", "teas", "cakes"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium capitalize transition-all ${
                    activeTab === tab
                      ? "bg-[#2d5234] text-[#f7f4ee] shadow-sm"
                      : "bg-[#f7f4ee] text-[#4a584c] border border-[#e2dcd0] hover:border-[#2d5234]"
                  }`}
                >
                  {tab === "specials" ? "Highlights" : tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {menuData[activeTab].map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#f7f4ee] border border-[#e2dcd0] flex gap-4 items-center shadow-sm hover:shadow-md transition-shadow"
              >
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-xl object-cover border border-[#e2dcd0]"
                  />
                )}
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-serif font-semibold text-[#1e251f] text-lg">
                      {item.name}
                    </h3>
                    <span className="font-serif text-[#2d5234] font-semibold text-sm whitespace-nowrap ml-2">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-xs text-[#5a685c] mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Opening Hours */}
      <section id="visit" className="py-20 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-[#efe9dd] border border-[#e2dcd0]">
            <div className="flex items-center gap-3 text-[#2d5234] mb-6">
              <Clock className="w-6 h-6" />
              <h3 className="text-xl font-serif font-semibold text-[#1e251f]">
                Opening Hours
              </h3>
            </div>
            <ul className="space-y-4 text-sm text-[#3d4a3e]">
              <li className="flex justify-between border-b border-[#e2dcd0] pb-3">
                <span>Mon – Thu</span>
                <span className="font-semibold text-[#1e251f]">
                  12:00 PM – 10:00 PM
                </span>
              </li>
              <li className="flex justify-between border-b border-[#e2dcd0] pb-3">
                <span>Fri – Sat</span>
                <span className="font-semibold text-[#1e251f]">
                  12:00 PM – 10:30 PM
                </span>
              </li>
              <li className="flex justify-between pb-1">
                <span>Sunday</span>
                <span className="font-semibold text-[#1e251f]">
                  12:00 PM – 10:00 PM
                </span>
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-3xl bg-[#efe9dd] border border-[#e2dcd0]">
            <div className="flex items-center gap-3 text-[#2d5234] mb-6">
              <MapPin className="w-6 h-6" />
              <h3 className="text-xl font-serif font-semibold text-[#1e251f]">
                Location
              </h3>
            </div>
            <p className="text-[#3d4a3e] text-sm mb-4">
              223 E 5th St, New York, NY 10003 <br />
              <span className="text-[#6a786c] text-xs">
                East Village, Manhattan
              </span>
            </p>
            <p className="text-sm text-[#3d4a3e] flex items-center gap-2 mb-6">
              <Phone className="w-4 h-4 text-[#2d5234]" /> (646) 454-0603
            </p>

            <div className="w-full h-36 rounded-2xl overflow-hidden border border-[#e2dcd0]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.272!2d-73.9899242!3d40.7274267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259c3c3e261ed%3A0x99382c99f1111170!2sDuo%20Cafe!5e0!3m2!1sen!2sus!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#e2dcd0] py-8 text-center text-xs text-[#6a786c]">
        <p>&copy; 2026 Duo Cafe • Dessert & Tea House • East Village, NYC</p>
      </footer>
    </div>
  );
}