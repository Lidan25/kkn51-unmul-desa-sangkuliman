import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Users, Leaf, Mountain, Youtube} from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"

const VillageProfile = () => {
  
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-white to-[#0f192d]/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Profil Desa Sangkuliman</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Mengenal lebih dekat sejarah, geografis, dan potensi desa kami</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col mb-16">
            {/* Geografis */}
            <Card data-aos="fade-down-left">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-gray-900" />
                  Letak Geografis
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Provinsi:</span>
                    <span className="text-muted-foreground">Kalimantan Timur</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Kabupaten:</span>
                    <span className="text-muted-foreground">Kutai Kartanegara</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Kecamatan:</span>
                    <span className="text-muted-foreground">Kota Bangun</span>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="mt-6">
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3989.7827172781012!2d116.552966!3d-0.24205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMMKwMTQnMzEuNCJTIDExNsKwMzMnMTAuNyJF!5e0!3m2!1sen!2sid!4v1755185435217!5m2!1sen!2sid"
                      className="w-full h-full"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Potensi Desa */}
          <div data-aos="flip-up" className="w-full max-w-5xl mx-auto p-4">
            <div className="aspect-video">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Potensi Desa</h2>
              <div className="w-full h-26 md:w-full md:h-full rounded-lg shadow-lg bg-gray-800 flex items-center justify-center relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600"></div>
                </div>

                {/* Video placeholder icon */}
                <div className="text-center z-10">
                  <div className="mb-4 flex justify-center">
                    <Youtube className="w-32 h-32 text-white mx-auto" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">COMING SOON</h3>
                  <p className="text-gray-300 text-sm md:text-base">Video tentang potensi desa akan segera hadir</p>
                </div>

                {/* Future video element (hidden for now) */}
                <video src="/video.mp4" controls className="w-full h-full rounded-lg hidden" style={{ display: "none" }}>
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VillageProfile;