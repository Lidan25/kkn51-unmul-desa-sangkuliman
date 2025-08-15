import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, DollarSign, Star } from "lucide-react";
import { useState } from "react";

const Tourism = () => {
  const destinations = [
    {
      id: 1,
      name: "Tanjung Rappeh",
      description: "Tanjung Rappeh adalah daratan kecil yang terletak di tengah hamparan danau, wilayah Desa Sangkuliman. Tempat ini sering dijadikan persinggahan warga saat beperahu karena suasananya yang tenang dan dikelilingi pepohonan air yang rimbun. Saat air surut, daratannya akan muncul membentuk hamparan luas yang sering dimanfaatkan untuk beristirahat, memancing, atau menikmati pemandangan.",
      image: "/wisata/Tanjung-rappeh.jpg",
      rating: 4.8,
      category: "Wisata Alam",
    },
    {
      id: 2,
      name: "Luah Kijang",
      description: "Luah Kijang merupakan aliran sungai kecil di Desa Sangkuliman yang menyusuri hutan rimbun dimana dahulu kala menjadi habitat dari hewan kijang. Di beberapa titik tampak kayu-kayu dan pagar bambu yang digunakan sebagai alat penangkap ikan tradisional, mencerminkan cara hidup masyarakat yang masih erat dengan alam.",
      image: "/wisata/Luah-kijang.jpg",
      rating: 4.9,
      category: "Wisata Alam",
    },
    {
      id: 3,
      name: "Tanjung Hallat",
      description:"Tanjung Hallat adalah sebuah pulau yang berada di tengah danau semayang, sebuah tempat yang pas untuk menyaksikan sunset dan sunrise serta sebagai tempat camping dengan pepohonan besar dan rindang di sekelilingnya. Keindahan pulau akan semakin terlihat ketika perubahan musim kemarau yang menjadikannya rumput hijau",
      image:"/wisata/tanjung-hallat-baru.jpg",
      rating: 4.7,
      category: "Wisata Budaya"
    },
    {
      id: 4,
      name: "Green Home",
      description: "Green Home adalah tempat pembibitan sayuran dan tanaman langka yang dirawat dengan penuh ketekunan, hingga tumbuh menjadi lingkungan yang asri dan lestari.",
      image: "/wisata/green-home.jpg",
      rating: 4.6,
      category: "Agrowisata",
    },
    {
      id: 5,
      name: "Tanjung Palla",
      description:"Tanjung palla adalah percabangan sungai alami yang terletak di tengah Sungai Mahakam, masuk wilayah Desa Sangkuliman. Alirannya tenang dan jernih, sering dijadikan jalur berperahu oleh warga setempat. Lingkungannya yang masih asri menjadikan tanjung palla sebagai salah satu titik perairan yang khas dan penting bagi aktivitas sungai masyarakat Sangkuliman.",
      image: "/wisata/tanjung-palla.jpg",
      rating: 4.5,
      category: "Wisata Alam",
    },
    {
      id: 6,
      name: "Budidaya Madu Kelulut",
      description:"Tanjung palla adalah percabangan sungai alami yang terletak di tengah Sungai Mahakam, masuk wilayah Desa Sangkuliman. Alirannya tenang dan jernih, sering dijadikan jalur berperahu oleh warga setempat. Lingkungannya yang masih asri menjadikan tanjung palla sebagai salah satu titik perairan yang khas dan penting bagi aktivitas sungai masyarakat Sangkuliman.",
      image: "/wisata/Budidaya-Madu-Kelulut-Saguntur.jpg",
      rating: 4.4,
      category: "Agrowisata",
    },
    {
      id: 7,
      name: "Luah Caki",
      description:"Luah caki merupakan anak sungai tersembunyi di Desa Sangkuliman yang dikelilingi hutan lebat dan pohon-pohon besar nan kokoh, serta dipercaya sebagai lokasi persembunyian sakral masyarakat adat dari penjajah dengan kisah pusaka yang bisa berubah bentuk.",
      image: "/wisata/luah-caki.jpg",
      rating: 4.4,
      category: "Wisata Alam",
    },
    {
      id: 8,
      name: "Danau Saguntur",
      description:"Danau Saguntur merupakan danau yang luas dan kaya akan ikan. Di tengah danau berdiri sebuah pohon tua yang diyakini sebagai penjaga danau sejak ratusan tahun lalu, dan hingga kini masih tetap kokoh.",
      image: "/wisata/danau-saguntur.jpg",
      rating: 4.4,
      category: "Adventure",
    },
    {
      id: 9,
      name: "Gunung Tallo",
      description:"Gunung Tallo adalah pulau kecil seluas sekitar 3 hektar di tengah Danau Saguntur, Desa Sangkuliman. Dikenal dengan tiga gundukannya yang dipenuhi pepohonan rindang, tempat ini menyimpan nuansa mistis dan legenda lokal. Gunung Tallo menjadi destinasi wisata alam dan edukasi, cocok untuk eksplorasi ekologi, susur danau, serta mengenal flora dan fauna khas Kalimantan.",
      image: "/wisata/Gunung-tallo.jpg",
      rating: 4.4,
      category: "Adventure",
    },
    {
      id: 10,
      name: "Luah Ulaman",
      description:"Luah Ulaman adalah sebuah tempat bagi nelayan desa Sangkuliman mencari ikan di waktu air surut atau kemarau dimana ikan-ikan terkumpul di danau Semayang dan Saguntur menjadi alur ikan menuju luah ulaman. Pengunjung menikmati suasana pagi, tepatnya di Luah Ulaman (dekat Tanjung Rappeh dan Tanjung Palla), sambil menikmati Susur Danau dan Sungai di Desa Wisata Sangkuliman. Mereka diajak berkeliling desa berbentuk pulau, melihat Pesut Mahakam, Bekantan, Kera, serta aktivitas Sapi yang berenang dan mencari makan serta menawarkan pengalaman sekaligus edukasi alam yang menarik. ",
      image: "/wisata/Luah Ulaman.jpg",
      rating: 4.4,
      category: "Wisata Alam",
    },
    {
      id: 11,
      name: "Jembatan Kuning",
      description: "Jembatan kuning merupakan jembatan yang menghubungkan Desa Wisata Sangkuliman dan Desa Wisata Pela, serta pintu gerbang warga desa Sangkuliman dan Pela dalam beraktivitas di sungai.",
      image: "/wisata/jembatan-kuning.jpg",
      rating: 4.4,
      category: "Adventure",
    },
  ];

  const categories = ["Semua", "Wisata Alam", "Agrowisata", "Adventure"];

  const [selectedCategory, setSelectedCategory] = useState("Semua");

  // filter destinasi berdasarkan kategori
  const filteredDestinations = selectedCategory === "Semua" ? destinations : destinations.filter((d) => d.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-white to-[#0f192d]/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Destinasi Wisata</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Jelajahi keindahan alam dan kekayaan budaya desa kami melalui berbagai destinasi wisata menarik</p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-muted/30 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Badge
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "secondary"}
                className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((destination) => (
              <Card key={destination.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <div className="aspect-[4/3] bg-muted">
                    <img src={destination.image} alt={destination.name} className="w-full h-full object-cover" />
                  </div>
                  <Badge className="absolute top-3 left-3" variant="secondary">
                    {destination.category}
                  </Badge>
                  <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-medium">{destination.rating}</span>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl">{destination.name}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">{destination.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tourism;
