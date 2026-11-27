import { title } from "framer-motion/client";

const NAVBAR = [
  { id: 1, name: "HOME", url: "/" },
  {
    id: 2,
    name: "ABOUT",
    url: "/about",
  },
  {
    id: 3,
    name: "HIGHLIGHTS",
    url: "/highlights",
    children: [
      { id: 1, name: "Hot Soal", url: "/highlights/hot" },
      { id: 2, name: "Tips & Trick", url: "/highlights/tips&trick" },
    ],
  },
  { id: 4, name: "DOWNLOAD", url: "/download" },
  { id: 5, name: "CONTACT ME", url: "/contact" },
];
const topQuestions = [
  {
    id: 1,
    title: "SKD (Seleksi Kompetensi Dasar)",
    image: "/img/skd.webp",
    url: "/skd",
  },
  {
    id: 2,
    title: "SKB Penyuluh Pertanian",
    image: "/img/skb-penyuluhPertanian.jpg",
    url: "/skb-penyuluh-pertanian",
  },
];
const listQuestions = [
  // SKD
  {
    id: 1,
    title: "SKD (Seleksi Kompetensi Dasar)",
    image: "/img/skd.webp",
    url: "/skd",
  },

  // SKB Kesehatan
  {
    id: 2,
    title: "SKB Dokter",
    image: "/img/skb-dokter.jpg",
    url: "/skb-dokter",
  },
  {
    id: 3,
    title: "SKB Dokter Gigi",
    image: "/img/skb-dokterGigi.jpg",
    url: "/skb-dokter-gigi",
  },
  // {
  //   id: 4,
  //   title: "SKB Perawat",
  //   image: "/",
  //   url: "/skb/perawat",
  // },
  // {
  //   id: 5,
  //   title: "SKB Bidan",
  //   image: "/",
  //   url: "/skb/bidan",
  // },
  // {
  //   id: 6,
  //   title: "SKB Apoteker",
  //   image: "/",
  //   url: "/skb/apoteker",
  // },
  // {
  //   id: 7,
  //   title: "SKB Ahli Gizi",
  //   image: "/",
  //   url: "/skb/ahli-gizi",
  // },
  // {
  //   id: 8,
  //   title: "SKB Sanitarian",
  //   image: "/",
  //   url: "/skb/sanitarian",
  // },

  // {
  //   id: 9,
  //   title: "SKB Guru SD",
  //   image: "/",
  //   url: "/skb/guru-sd",
  // },
  // {
  //   id: 10,
  //   title: "SKB Guru Matematika",
  //   image: "/",
  //   url: "/skb/guru-matematika",
  // },
  // {
  //   id: 11,
  //   title: "SKB Guru Bahasa Indonesia",
  //   image: "/",
  //   url: "/skb/guru-bahasa-indonesia",
  // },
  {
    id: 12,
    title: "SKB Guru Bahasa Inggris",
    image: "/img/skb-guruBahasaInggris.jpg",
    url: "/skb-guru-bahasa-inggris",
  },
  // {
  //   id: 13,
  //   title: "SKB Guru IPA",
  //   image: "/",
  //   url: "/skb/guru-ipa",
  // },
  // {
  //   id: 14,
  //   title: "SKB Guru IPS",
  //   image: "/",
  //   url: "/skb/guru-ips",
  // },

  // SKB Pertanian dan Peternakan
  {
    id: 15,
    title: "SKB Penyuluh Pertanian",
    image: "/img/skb-penyuluhPertanian.jpg",
    url: "/skb-penyuluh-pertanian",
  },
  {
    id: 16,
    title: "SKB Pengawas Benih Tanaman",
    image: "/img/skb-benihTanaman.jpg",
    url: "/skb-pengawas-benih-tanaman",
  },
  {
    id: 17,
    title: "SKB Pengendali Organisme Pengganggu Tumbuhan",
    image: "/img/skb-POPT.jpg",
    url: "/skb-pengendali-opt",
  },
  // {
  //   id: 18,
  //   title: "SKB Peternakan",
  //   image: "/",
  //   url: "/skb/peternakan",
  // },
  // {
  //   id: 19,
  //   title: "SKB Dokter Hewan",
  //   image: "/",
  //   url: "/skb/dokter-hewan",
  // },

  // {
  //   id: 20,
  //   title: "SKB Pranata Komputer",
  //   image: "/",
  //   url: "/skb/pranata-komputer",
  // },
  {
    id: 21,
    title: "SKB Analis Sistem Informasi",
    image: "/img/skb-analisisSistemInformasi.jpg",
    url: "/skb-analis-sistem-informasi",
  },
  {
    id: 22,
    title: "SKB Programmer",
    image: "/",
    url: "/skb-programmer",
  },
  // {
  //   id: 23,
  //   title: "SKB Teknik Sipil",
  //   image: "/",
  //   url: "/skb/teknik-sipil",
  // },
  // {
  //   id: 24,
  //   title: "SKB Teknik Informatika",
  //   image: "/",
  //   url: "/skb/teknik-informatika",
  // },

  // {
  //   id: 25,
  //   title: "SKB Analis Kebijakan",
  //   image: "/",
  //   url: "/skb/analis-kebijakan",
  // },
  // {
  //   id: 26,
  //   title: "SKB Analis Kepegawaian",
  //   image: "/",
  //   url: "/skb/analis-kepegawaian",
  // },
  // {
  //   id: 27,
  //   title: "SKB Arsiparis",
  //   image: "/",
  //   url: "/skb/arsiparis",
  // },
  // {
  //   id: 28,
  //   title: "SKB Auditor",
  //   image: "/",
  //   url: "/skb/auditor",
  // },
  // {
  //   id: 29,
  //   title: "SKB Analis Keuangan",
  //   image: "/",
  //   url: "/skb/analis-keuangan",
  // },
  // {
  //   id: 30,
  //   title: "SKB Pengelola Pengadaan Barang dan Jasa",
  //   image: "/",
  //   url: "/skb/pengelola-pengadaan",
  // },

  // {
  //   id: 31,
  //   title: "SKB Analis Hukum",
  //   image: "/",
  //   url: "/skb/analis-hukum",
  // },
  // {
  //   id: 32,
  //   title: "SKB Perancang Peraturan Perundang-undangan",
  //   image: "/",
  //   url: "/skb/perancang-peraturan",
  // },

  // {
  //   id: 33,
  //   title: "SKB Pekerja Sosial",
  //   image: "/",
  //   url: "/skb/pekerja-sosial",
  // },
  // {
  //   id: 34,
  //   title: "SKB Penyuluh Sosial",
  //   image: "/",
  //   url: "/skb/penyuluh-sosial",
  // },
  // {
  //   id: 35,
  //   title: "SKB Psikolog Klinis",
  //   image: "/",
  //   url: "/skb/psikolog-klinis",
  // },
];

const downloadList = [
  // SKD
  {
    id: 1,
    title: "SKD (Seleksi Kompetensi Dasar)",
    image: "/img/skd.webp",
    url: "/download/skd",
  },
  {
    id: 15,
    title: "SKB Penyuluh Pertanian",
    image: "/img/skb-penyuluhPertanian.jpg",
    url: "/download/skb-penyuluh-pertanian",
  },
];

const skdList = [
  {
    id: 1,
    title: "SKD 1",
    edition: "2026",
    url: "/skd/skd1",
    image: "/img/skd.webp",
  },
  {
    id: 2,
    title: "SKD 2",
    edition: "2026",
    url: "/skd/skd2",
    image: "/img/skd.webp",
  },
  {
    id: 3,
    title: "SKD 3",
    edition: "2026",
    url: "/skd/skd3",
    image: "/img/skd.webp",
  },
  {
    id: 4,
    title: "SKD VIP 1 + Pembahasan",
    edition: "2026",
    url: "/skd/skdvip1",
    image: "",
  },
];

const downloadSkdList = [
  {
    id: 1,
    title: "SKD 1",
    edition: "2026",
    url: "/download-skd/skd1",
    image: "/img/skd.webp",
  },
  {
    id: 2,
    title: "SKD 2",
    edition: "2026",
    url: "/download-skd/skd2",
    image: "/img/skd.webp",
  },
];

const skbPenyuluhPertanianList = [
  {
    id: 1,
    title: "SKB 1",
    edition: "2026",
    url: "skb-penyuluh-pertanian/skb1",
    image: "/img/skb-penyuluhPertanian.jpg",
  },
  {
    id: 2,
    title: "SKB 2",
    edition: "2026",
    url: "skb-penyuluh-pertanian/skb2",
    image: "/img/skb-penyuluhPertanian.jpg",
  },
  {
    id: 3,
    title: "SKB 3",
    edition: "2026",
    url: "skb-penyuluh-pertanian/skb3",
    image: "/img/skb-penyuluhPertanian.jpg",
  },
  {
    id: 4,
    title: "SKB Penyuluh Pertanian VIP 1 + Pembahasan",
    edition: "2026",
    url: "skb-penyuluh-pertanian/skbvip1",
    image: "",
  },
];
const skbPengawasBenihTanamanList = [
  {
    id: 1,
    title: "SKB 1",
    edition: "2026",
    url: "skb-pengawas-benih-tanaman/skb1",
    image: "/img/skb-benihTanaman.jpg",
  },
  {
    id: 2,
    title: "SKB 2",
    edition: "2026",
    url: "skb-pengawas-benih-tanaman/skb2",
    image: "/img/skb-benihTanaman.jpg",
  },
  {
    id: 3,
    title: "SKB Pengawas Benih Tanaman VIP 1 + Pembahasan",
    edition: "2026",
    url: "skb-pengawas-benih-tanaman/skbvip1",
    image: "",
  },
];

const skbGuruBahasaInggrisList = [
  {
    id: 1,
    title: "SKB 1",
    edition: "2026",
    url: "/skb-guru-bahasa-inggris/skb1",
    image: "/img/skb-guruBahasaInggris.jpg",
  },
  {
    id: 2,
    title: "SKB 2",
    edition: "2026",
    url: "/skb-guru-bahasa-inggris/skb2",
    image: "/img/skb-guruBahasaInggris.jpg",
  },
  {
    id: 3,
    title: "SKB Guru Bahasa Inggris VIP 1 + Pembahasan",
    edition: "2026",
    url: "/skb-guru-bahasa-inggrisn/skbvip1",
    image: "",
  },
];

const skbDokterList = [
  {
    id: 1,
    title: "SKB 1",
    edition: "2026",
    url: "/skb-dokter/skb1",
    image: "/img/skb-dokter.jpg",
  },
  {
    id: 2,
    title: "SKB 2",
    edition: "2026",
    url: "/skb-dokter/skb2",
    image: "/img/skb-dokter.jpg",
  },
  {
    id: 3,
    title: "SKB Dokter VIP 1 + Pembahasan",
    edition: "2026",
    url: "/skb-dokter/skbvip1",
    image: "",
  },
];

const skbDokterGigiList = [
  {
    id: 1,
    title: "SKB 1",
    edition: "2026",
    url: "/skb-dokter-gigi/skb1",
    image: "/img/skb-dokterGigi.jpg",
  },
  {
    id: 2,
    title: "SKB 2",
    edition: "2026",
    url: "/skb-dokter-gigi/skb2",
    image: "/img/skb-dokterGigi.jpg",
  },
  {
    id: 3,
    title: "SKB Dokter Gigi VIP 1 + Pembahasan",
    edition: "2026",
    url: "/skb-dokter-gigi/skbvip1",
    image: "",
  },
];

export {
  NAVBAR,
  topQuestions,
  listQuestions,
  downloadList,
  skdList,
  skbPenyuluhPertanianList,
  skbPengawasBenihTanamanList,
  skbGuruBahasaInggrisList,
  skbDokterList,
  skbDokterGigiList,
  downloadSkdList,
};
