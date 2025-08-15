import React, { useState } from "react";

const GaleriDokumentasi = () => {
  const totalPhotos = 89; // jumlah total foto
  const photosPerPage = 12; // jumlah foto per halaman
  const totalPages = Math.ceil(totalPhotos / photosPerPage);

  const allPhotos = Array.from({ length: totalPhotos }, (_, i) => ({
    id: i + 1,
    src: `/dokumentasi/${i + 1}.jpg`,
  }));

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastPhoto = currentPage * photosPerPage;
  const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
  const currentPhotos = allPhotos.slice(indexOfFirstPhoto, indexOfLastPhoto);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section className="py-12 bg-gradient-to-b from-amber-50 via-white to-lime-50 min-h-screen">
      {/* Tombol Back */}
      <a href="/" className="absolute top-4 left-4 px-4 py-2 bg-gray-800 text-white text-sm rounded-lg shadow hover:bg-gray-700 transition">
        ← Kembali
      </a>

      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-8 text-gray-800">Galeri Dokumentasi KKN</h2>

        {/* Grid Foto */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {currentPhotos.map((photo) => (
            <div key={photo.id} className="aspect-[4/3] rounded-xl overflow-hidden shadow-md hover:scale-105 transform transition duration-300 bg-gray-100">
              <img src={photo.src} alt={`Foto ${photo.id}`} className="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8 flex-wrap gap-2">
          <button onClick={() => handlePageChange(currentPage - 1)} className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300" disabled={currentPage === 1}>
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button key={i} onClick={() => handlePageChange(i + 1)} className={`px-3 py-1 rounded ${currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"}`}>
              {i + 1}
            </button>
          ))}
          <button onClick={() => handlePageChange(currentPage + 1)} className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300" disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default GaleriDokumentasi;
