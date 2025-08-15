import { Phone, MapPin } from "lucide-react";

function Index() {
  return (
    <div className="min-h-screen bg-[#e6e2db] flex flex-col">
      <div className="flex flex-col items-center p-4 flex-grow">
        {/* Logo */}
        <div className="flex justify-center gap-2 sm:gap-4 mt-4 flex-wrap">
          <div className="h-12 w-auto md:h-16 md:w-auto flex items-center justify-center">
            <img src="/logos/LOGO.png" alt="Logo" className="max-h-full max-w-full object-contain" />
          </div>
        </div>

        {/* Title */}
        <div className="text-center mt-4">
          <h2 className="text-lg font-semibold">KKN REGULER 51</h2>
          <h3 className="text-sm font-medium">UNIVERSITAS MULAWARMAN</h3>
        </div>

        {/* Main Heading */}
        <h1 className="text-xl font-bold mt-6 mb-4">Dokumentasi KKN</h1>

        {/* Menu Buttons */}
        <div className="flex flex-col gap-3 w-full max-w-xs">
          <a href="/home" className="border border-black rounded-full py-2 px-4 text-sm hover:bg-gray-200 text-center">
            PROFIL DESA SANGKULIMAN
          </a>
          <a href="/galeri-dokumentasi" className="border border-black rounded-full py-2 px-4 text-sm hover:bg-gray-200 text-center">
            GALERI DOKUMENTASI
          </a>
          <a href="https://heyzine.com/flip-book/8a64ae432b.html" target="_blank" rel="noopener noreferrer" className="border border-black rounded-full py-2 px-4 text-sm hover:bg-gray-200 text-center">
            BULETIN DESA KITA
          </a>
        </div>

        {/* Contacts */}
        <div className="mt-8 text-center">
          <p className="text-sm font-bold">CONTACTS</p>
          <div className="flex flex-col items-center gap-2 mt-2">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 sm:h-4 sm:w-4 flex-shrink-0" />
              <span className="text-sm">+6281345593853 (JIHAN)</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 sm:h-4 sm:w-4 flex-shrink-0" />
              <span className="text-sm">+628135659982 (HERDI)</span>
            </div>
            <div className="flex flex-col items-center gap-2 mt-2">
              <p className="text-sm font-bold">LOKASI</p>
              <span className="text-sm text-center">{"Jl. Mulawarman II, Liang Ulu, Kec. Kota Bangun, Kabupaten Kutai Kartanegara, Kalimantan Timur 75561"}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer - Full Width White Background */}
      <div className="w-full bg-white py-2 text-center text-sm font-medium border-t border-gray-200 mt-8">
        " SUTAKA KESAH DESA " <br />
        KKN KUKAR 35 Desa Sangkuliman
      </div>
    </div>
  );
}

export default Index;
