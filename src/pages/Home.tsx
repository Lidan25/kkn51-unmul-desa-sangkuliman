import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { MapPin, Users, Camera, Briefcase, ArrowRight } from "lucide-react";
import {useState, useEffect, useRef} from "react";
import AOS from "aos";
import "aos/dist/aos.css"

const Home = () => {
  const stats = [
    { icon: Camera, label: "Wisata", value: "10+"},
    { icon: Users, label: "Anggota KKN", value: "10" },
    { icon: MapPin, label: "Lokasi", value: "Desa Sangkuliman" },
  ];

 const highlights = [
   {
     image: "/beranda/slider-1.jpg",
   },
   {
     image: "/beranda/slider-2.jpg",
   },
   {
     image: "/beranda/slider-3.jpg",
   },
   {
     image: "/beranda/slider-4.jpg",
   },
   {
     image: "/beranda/slider-5.jpg",
   },
   {
     image: "/beranda/slider-6.jpg",
   },
   {
     image: "/beranda/slider-7.jpg",
   },
   {
     image: "/beranda/slider-7.jpg",
   },
 ];

  const [offset, setOffset] = useState(0);
  const containerRef = useRef(null);
  const speed = 0.5; 
  const intervalDelay = 20; 
  
  useEffect(() => {
    AOS.init({ duration: 800, once: false});
  }, []);

  useEffect(() => {
    const containerWidth = containerRef.current?.scrollWidth || 0;
    const visibleWidth = containerRef.current?.offsetWidth || 0;
    const maxOffset = containerWidth - visibleWidth;

    const interval = setInterval(() => {
      setOffset((prev) => {
        if (prev >= maxOffset) return 0; 
        return prev + speed;
      });
    }, intervalDelay);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-white to-[#0f192d]/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up" className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  <span className="text-[#0f192d]">Ragam Cerita & Potensi Desa Sangkuliman</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  Di Desa Sangkuliman, setiap sudut menyimpan kisah unik dan potensi wisata alam yang memikat. Keindahan alam, kekayaan budaya lokal, keramahan warga, dan legenda yang hidup berpadu menjadi pengalaman tak terlupakan. Mari
                  jelajahi dan rasakan pesonanya
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-[#0f192d] hover:bg-[#1a2947] text-white">
                  <Link to="/profil-desa">
                    Tentang Desa
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#0f192d]/10">
                <img src="/beranda/home.jpg" alt="Pemandangan Desa Cantik" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#0f192d]/30 rounded-full blur-2xl"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#0f192d]/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div data-aos="fade-up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="animate-fadeIn text-center flex-shrink-0 w-full sm:w-[calc(33.333%-1.5rem)] lg:w-[calc(25%-1.5rem)] max-w-xs min-w-[150px]">
                  <CardContent className="p-6">
                    <Icon className="h-8 w-8 text-gray-900 mx-auto mb-3" />
                    <div className="text-2xl  font-bold text-foreground mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-10">
        <div data-aos="zoom-in-down" className="w-auto h-auto overflow-hidden md:max-w-3/4 mx-auto" ref={containerRef}>
          <div className="flex space-x-6" style={{ transform: `translateX(-${offset}px)`, transition: "transform 0.02s linear" }}>
            {highlights.map((item, idx) => (
              <div key={idx} className="min-w-[50%] md:min-w-[30%] bg-gray-100 rounded-lg shadow-md overflow-hidden">
                <div className="aspect-[4/3] bg-muted">
                  <img src={item.image} className="w-full h-full object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Home;