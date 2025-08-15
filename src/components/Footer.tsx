import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-auto rounded-full flex items-center justify-center">
                <img src="/logos/kkn.png" alt="logo" />
              </div>
              <span className="font-bold text-sm">KKN 51 UNMUL KUKAR 35 Desa Sangkuliman</span>
            </div>
            <p className="text-sm text-muted-foreground">Desa wisata yang indah dengan kekayaan alam dan budaya lokal yang mempesona.</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Menu</h3>
            <div className="space-y-2">
              <Link to="/profil-desa" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Profil Desa
              </Link>
              <Link to="/Wisata" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Destinasi Wisata
              </Link>
              <Link to="/anggota-kkn" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Anggota KKN
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Kontak</h3>
            <div className="space-y-2">
              <div className="flex space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-10 w-10" />
                <span>{"Jl. Mulawarman II, Liang Ulu, Kec. Kota Bangun, Kabupaten Kutai Kartanegara, Kalimantan Timur 75561"}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>kknkelompokukar35@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Ikuti Kami</h3>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/kkn51_sangkuliman?igsh=MWJ2aTlveGI1Y3N6Mg==" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span>KKN 51 UNMUL KUKAR 35 Desa Sangkuliman</span>
              </a>
            </div>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/pokdarwisbmt?igsh=ZWxteHVyNTVrMmNt" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span>POKDARWIS BMT</span>
              </a>
            </div>
            <div className="flex space-x-4">
              <a href="https://www.tiktok.com/@pokdarwisbmt?_t=ZS-8ysJHkf9LIF&_r=1" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                <img src="/logos/tik-tok.png" className="h-5 w-5" />
                <span>POKDARWIS BMT</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">© 2025 KKN 51 UNMUL KUKAR 35 Desa Sangkuliman. Dikembangkan oleh KKN 51 UNMUL KUKAR 35 Desa Sangkuliman.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;