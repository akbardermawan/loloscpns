import React from "react";
import {
  BookOpen,
  Target,
  GraduationCap,
  CheckCircle2,
  Brain,
  Trophy,
  Users,
  ArrowRight,
  Lightbulb,
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Latihan Soal Lengkap",
    description:
      "Berbagai latihan soal CPNS yang mencakup TWK, TIU, dan TKP untuk membantu meningkatkan kemampuan.",
  },
  {
    icon: Brain,
    title: "Pembahasan Mendalam",
    description:
      "Setiap soal dilengkapi pembahasan agar pengguna tidak hanya mengetahui jawaban, tetapi juga memahami proses penyelesaiannya.",
  },
  {
    icon: Target,
    title: "Belajar Lebih Terarah",
    description:
      "Membantu pengguna mengenali kemampuan dan meningkatkan pemahaman melalui latihan secara konsisten.",
  },
  {
    icon: Trophy,
    title: "Persiapan Lebih Optimal",
    description:
      "Membangun kepercayaan diri dan kesiapan menghadapi seleksi CPNS melalui proses belajar yang terstruktur.",
  },
];

const About = () => {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* About Section */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Siapa Kami?
          </span>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
            Mengenal Lebih Dekat Platform Kami
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600">
            Website ini merupakan platform penyedia latihan soal untuk membantu
            calon peserta seleksi Calon Pegawai Negeri Sipil (CPNS) dalam
            mempersiapkan diri menghadapi tahapan seleksi. Kami menyediakan
            berbagai soal latihan yang dirancang untuk mengasah kemampuan,
            meningkatkan pemahaman, serta membiasakan pengguna dalam mengerjakan
            soal-soal seleksi CPNS.
          </p>

          <p className="mt-4 text-base leading-8 text-slate-600">
            Kami percaya bahwa persiapan yang baik dimulai dari kemauan untuk
            terus belajar dan berlatih. Oleh karena itu, platform ini
            dikembangkan sebagai sarana belajar yang praktis dan dapat diakses
            kapan saja.
          </p>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 md:px-10">
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100 md:p-10">
            <div className="mb-6 inline-flex rounded-2xl bg-blue-100 p-4 text-blue-600">
              <Lightbulb size={30} />
            </div>

            <h3 className="text-2xl font-bold text-slate-900">Visi Kami</h3>

            <p className="mt-4 leading-8 text-slate-600">
              Menjadi platform belajar yang dapat membantu masyarakat memperoleh
              akses latihan soal CPNS secara mudah dan mendukung persiapan
              seleksi yang lebih berkualitas.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100 md:p-10">
            <div className="mb-6 inline-flex rounded-2xl bg-cyan-100 p-4 text-cyan-600">
              <Target size={30} />
            </div>

            <h3 className="text-2xl font-bold text-slate-900">Misi Kami</h3>

            <ul className="mt-4 space-y-4">
              {[
                "Menyediakan berbagai latihan soal CPNS.",
                "Memberikan pembahasan yang mudah dipahami.",
                "Mendorong kebiasaan belajar secara konsisten.",
                "Membantu meningkatkan kemampuan dan kepercayaan diri peserta.",
              ].map((item, index) => (
                <li key={index} className="flex gap-3 text-slate-600">
                  <CheckCircle2
                    size={21}
                    className="mt-1 shrink-0 text-blue-600"
                  />
                  <span className="leading-7">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Keunggulan Platform
          </span>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
            Apa yang Bisa Anda Dapatkan?
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Kami menyediakan berbagai fasilitas belajar untuk mendukung
            perjalanan persiapan seleksi CPNS Anda.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="mb-6 inline-flex rounded-xl bg-blue-50 p-4 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={28} />
                </div>

                <h3 className="text-lg font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Closing Section */}
      <section className="px-6 pb-20 md:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 to-cyan-600 px-8 py-14 text-center md:px-16 md:py-20">
          <Users className="mx-auto mb-5 text-white" size={42} />

          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Setiap Langkah Belajar Membawa Anda Lebih Dekat pada Tujuan.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-blue-50">
            Jangan menunggu sampai hari seleksi tiba. Mulailah mempersiapkan
            diri dari sekarang dengan berlatih dan meningkatkan kemampuan setiap
            hari.
          </p>

          <a
            href="/"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-semibold text-blue-700 transition hover:bg-blue-50"
          >
            Mulai Latihan Soal
            <ArrowRight size={19} />
          </a>
        </div>
      </section>
    </main>
  );
};

export default About;
