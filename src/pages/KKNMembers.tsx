import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, GraduationCap, Mail, Phone } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";

const KKNMembers = () => {
  const groups = [
    {
      id: 1,
      name: "Ketua",
      focus: "Memimpin, mengkoordinasi dan mengambil keputusan untuk mencapai tujuan KKN",
      members: [
        {
          name: "Muhammad Alfrendi",
          university: "Universitas Mulawarman",
          major: "Akuakultur",
          email: "muhammadalfrendi66@gmail.com",
          photo: "/anggota/rendi.JPG",
        },
      ],
    },
    {
      id: 2,
      name: "Sekretaris",
      focus: "Mengelola administrasi serta membuat notulen rapat dan menyusun laporan kegiatan",
      members: [
        {
          name: "Nabilla Chairunnisa",
          university: "Universitas Mulawarman",
          major: "Psikologi",
          email: "nabilla.chairunnisa7@gmail.com ",
          photo: "/anggota/nabiwow.JPG",
        },
        {
          name: "Debby Amelyastuty Ami",
          university: "Universitas Mulawarman",
          major: "Ilmu Pemerintahan",
          email: "debbyamelyastuty@gmail.com ",
          photo: "/anggota/debby.JPG",
        },
      ],
    },
    {
      id: 3,
      name: "Bendahara",
      focus: "Mengelola keuangan kelompok, membuat anggaran dan membuat laporan keuangan",
      members: [
        {
          name: "Silviana Nur Kholifah",
          university: "Universitas Mulawarman",
          major: "Agribisnis",
          email: "silviananur63@gmail.com",
          photo: "/anggota/silvi.JPG",
        },
      ],
    },
    {
      id: 4,
      name: "Divisi Humas",
      focus: "Menjalin komuikasi dan menjadi jembatan antara kelompok dengan masyarakat, serta mempromosikan program KKN",
      members: [
        {
          name: "Muhammad Herdiansyah",
          university: "Universitas Mulawarman",
          major: "Agroteknologi",
          email: "mh08139982@gmail.com",
          photo: "/anggota/herdi.jpeg",
        },
        {
          name: "Zihan Ramadina",
          university: "Universitas Mulawarman",
          major: "Ekonomi Pembangunan",
          email: " zihanramadina8@gmail.com ",
          photo: "/anggota/jihan.JPG",
        },
      ],
    },
    {
      id: 5,
      name: "Divisi PDD",
      focus: "Mendokumentasi segala kegiatan serta memvisualisasikan laporan hasil program kerja",
      members: [
        {
          name: "Muhammad Armadani",
          university: "Universitas Mulawarman",
          major: "Pengelolaan Sumberdaya Perikanan",
          email: "muharmadani16@gmail.com",
          photo: "/anggota/dani.JPG",
        },
        {
          name: "Yasmin Friendnanda ",
          university: "Universitas Mulawarman",
          major: "Sastra Indonesia",
          email: "mineefriend@gmail.com ",
          photo: "/anggota/Yasmin.JPG",
        },
      ],
    },
    {
      id: 6,
      name: "Divisi Perlengkapan",
      focus: "Mengelola inventaris alat dan logistik yang dibutuhkan untuk kegiatan KKN",
      members: [
        {
          name: "Reani Septia Nanda ",
          university: "Universitas Mulawarman",
          major: "Sastra Indonesia",
          email: "reaniseptia@gmail.com",
          photo: "/anggota/reani.JPG",
        },
        {
          name: "Widya Putri ",
          university: "Universitas Mulawarman",
          major: "Hukum",
          email: "putriwidyaputri4@gmail.com",
          photo: "/anggota/widya.JPG",
        },
      ],
    },
  ];

  const coordinators = [
    {
      name: "Prof. Ir. Haviluddin, S.Kom., M.Kom., Ph.D",
      role: "Dosen Pendamping Lapangan",
      university: "Universitas Mulawarman",
      department: "",
      phone: "NIP. 197305281999031001",
      email: "",
      photo: "/anggota/prof.jpg",
    },
    {
      name: "Bapak Jamli",
      role: "Pembimbing Lapangan",
      university: "",
      department: "",
      phone: "",
      email: "",
      photo: "/anggota/jamli.jpg",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 800, once: false})
  })

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-600 via-white to-[#0f192d]/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Anggota KKN</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Tim KKN yang terdiri dari mahasiswa-mahasiswi dari Universitas Mulawarman</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">10</div>
              <div className="text-sm text-muted-foreground">Total Anggota</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">6</div>
              <div className="text-sm text-muted-foreground">Divisi</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">38</div>
              <div className="text-sm text-muted-foreground">Hari Program</div>
            </div>
          </div>
        </div>
      </section>

      {/* Coordinators Section */}
      <section className="py-16">
        <div data-aos="zoom-in" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Koordinator Program</h2>
            <p className="text-lg text-muted-foreground">Pendamping dan Pembimbing yang mendampingi pelaksanaan program KKN</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {coordinators.map((coordinator, index) => (
              <Card key={index} className="text-center h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4 overflow-hidden">
                    <img src={coordinator.photo} alt={coordinator.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-1">{coordinator.name}</h3>
                  <Badge variant="secondary" className="mb-3 mx-auto w-fit">
                    {coordinator.role}
                  </Badge>
                  <div className="space-y-1 text-sm text-muted-foreground flex-grow">
                    {coordinator.university ? <div className="flex items-center justify-center gap-2">
                      <GraduationCap className="h-4 w-4" />
                      <span>{coordinator.university}</span>
                    </div> : ""}
                    {coordinator.department && <p className="text-xs">{coordinator.department}</p>}
                    <div className="flex items-center justify-center gap-2">
                      <span>{coordinator.phone}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <span>{coordinator.email}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Groups Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Divisi Kami</h2>
            <p className="text-lg text-muted-foreground">Tim yang terbagi berdasarkan fokus bidang dan keahlian masing-masing</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {groups.map((group) => (
              <div key={group.id} data-aos="zoom-in" className="mb-12 w-full">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900">{group.name}</h3>
                  <p className="text-muted-foreground">{group.focus}</p>
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                  {group.members.map((member, index) => (
                    <Card key={index} className="text-center flex-1 min-w-[200px] max-w-[300px]">
                      <CardContent className="p-6">
                        <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4 overflow-hidden">
                          <img src={member.photo} alt={member.name} className="w-full h-full object-cover object-top scale-100" />
                        </div>
                        <h4 className="font-semibold text-lg text-foreground mb-1">{member.name}</h4>
                        <Badge variant="secondary" className="mb-3">
                          {member.major}
                        </Badge>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <div className="flex items-center justify-center gap-2">
                            <GraduationCap className="h-4 w-4" />
                            <span>{member.university}</span>
                          </div>
                          <div className="flex items-center justify-center gap-2"></div>
                          <div className="flex items-center justify-center gap-2">
                            <Mail className="h-4 w-4" />
                            <span className="break-all">{member.email}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
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

export default KKNMembers;