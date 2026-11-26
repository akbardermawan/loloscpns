import React, { useEffect } from "react";

import { listQuestions, topQuestions } from "../common";

const AD_SCRIPT_ID = "native-banner-script";
const Home = () => {
  useEffect(() => {
    // Hindari memasang script yang sama berulang kali
    if (document.getElementById(AD_SCRIPT_ID)) return;

    const script = document.createElement("script");
    script.id = AD_SCRIPT_ID;
    script.async = true;
    script.dataset.cfasync = "false";
    script.src = "https://bauval.org/21/3e6a8b566d88898a7b592eb0a7c4242a";

    document.body.appendChild(script);
  }, []);
  return (
    <div className="min-h-screen bg-sky-50 text-slate-900">
      {/* ================= HERO ================= */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#08658f] via-[#1689b5] to-[#269fca]">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-sky-200/20 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-300/20 blur-3xl" />
        </div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 -z-10 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            {/* Brand */}
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl shadow-lg shadow-blue-950/20">
                <img src="/img/logo.png" alt="" />
              </div>
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-100">
                  Bank soal untuk CPNS
                </p>
                <h1 className="text-xl font-bold text-white sm:text-2xl">
                  Lulus PNS
                </h1>
              </div>
            </div>

            {/* Heading */}
            <h2 className="max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Orang hebat bukan mereka yang tidak pernah gagal,
              <span className="block bg-gradient-to-r from-cyan-200 via-sky-100 to-white bg-clip-text text-transparent">
                tapi mereka yang mencoba lagi.
              </span>
            </h2>

            {/* Quote */}
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-blue-100 sm:text-2xl">
              Langkah besar selalu dimulai oleh{" "}
              <span className="font-semibold text-white">langkah kecil</span>
            </p>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-7 text-sky-100 sm:text-lg">
              Semoga lulus tes CPNS dan tercapai cita-citanya.
            </p>

            {/* CTA */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-[#0879a8] shadow-xl shadow-blue-950/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-50">
                Tips and Trick
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>

              <a href="/download">
                <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 bg-white/10 px-6 py-3.5 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white/20">
                  Download Soal <span>↗</span>
                </button>
              </a>
            </div>

            {/* Small stats */}
            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-5 border-t border-white/20 pt-7">
              <div>
                <p className="text-2xl font-bold text-white">1K+</p>
                <p className="text-sm text-sky-100">Koleksi Soal</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">500+</p>
                <p className="text-sm text-sky-100">Penulis</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">24/7</p>
                <p className="text-sm text-sky-100">Akses Digital</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TOP BOOK ================= */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-sky-600">
              Pilihan pembaca
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-800">
              Top Soals
            </h2>
            <p className="mt-2 text-slate-500">
              Soal yang sedang banyak dibaca saat ini.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {topQuestions.slice(0, 3).map((q) => (
            <div
              key={q.id}
              className="group flex overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-sky-100 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-100"
            >
              <img
                src={q.image}
                alt={q.title}
                className="h-56 w-40 object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="flex flex-1 flex-col justify-center p-6">
                <span className="w-fit rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
                  {q.category}
                </span>

                <h3 className="mt-3 text-xl font-bold text-slate-800">
                  {q.title}
                </h3>

                <p className="mt-1 text-sm text-slate-500">{q.author}</p>

                <a href={q.url}>
                  <button className="mt-5 w-fit text-sm font-semibold text-sky-600 transition hover:text-blue-700">
                    Lihat Buku →
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= LIST BOOK ================= */}
      <section className="bg-white" id="koleksibuku">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-sky-600">
              Koleksi Soal
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-800">
              Semua Soal-soal lengkap
            </h2>

            <p className="mt-2 text-slate-500">
              Kerjakan latihan soal supaya lolos tes CPNS
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {listQuestions.map((q) => (
              <div
                key={q.id}
                className="group overflow-hidden rounded-2xl bg-sky-50/70 ring-1 ring-sky-100 transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-sky-100"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={q.image}
                    alt={q.title}
                    className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <h3 className="truncate text-lg font-bold text-slate-800">
                    {q.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">{q.author}</p>

                  <a href={q.url}>
                    <button className="mt-5 w-full rounded-xl bg-gradient-to-r from-[#0879a8] to-[#219bc5] px-4 py-3 text-sm font-semibold text-white shadow-md shadow-sky-200 transition hover:-translate-y-0.5 hover:from-[#06648e] hover:to-[#1689b5]">
                      Lihat Soal
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Tempat Native Banner */}
      <section className="w-full flex justify-center mt-4">
        <div className="w-full max-w-5xl  overflow-hidden">
          <p className="text-gray-400 text-xs px-2 py-1">Iklan</p>

          <div
            id="container-3e6a8b566d88898a7b592eb0a7c4242a"
            style={{
              width: "100%",
              minHeight: "100px",
              overflow: "hidden",
            }}
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
