import React from "react";
import { skbDokterGigiList } from "../../common/index";

const SkbDokterGigi = () => {
  // Memastikan data selalu berupa array
  const dataSkb = Array.isArray(skbDokterGigiList) ? skbDokterGigiList : [];

  return (
    <div className="min-h-screen bg-sky-50/60">
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* HEADER */}
        <div className="mb-10">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-1 w-10 rounded-full bg-sky-500" />

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600">
              Persiapan CPNS
            </p>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-slate-800 sm:text-4xl">
            Seleksi Kompetensi Bidang
          </h1>

          <h2 className="mt-2 text-xl font-bold text-sky-600">Dokter</h2>

          <p className="mt-3 max-w-2xl text-base leading-7 text-slate-500">
            Pilih kumpulan soal Seleksi Kompetensi Bidang (SKB) Dokter Gigi
            untuk meningkatkan pemahaman materi, mengasah kemampuan, dan
            mempersiapkan diri menghadapi seleksi CPNS.
          </p>
        </div>

        {/* CARD LIST */}
        {dataSkb.length > 0 ? (
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {dataSkb.map((s, index) => (
              <div
                key={s.id ?? index}
                className="group relative overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-100/80"
              >
                {/* IMAGE */}
                <div className="relative overflow-hidden bg-sky-100">
                  {s.image ? (
                    <img
                      src={s.image}
                      alt={s.title || "Soal SKB Penyuluh Pertanian"}
                      loading="lazy"
                      className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="flex h-64 w-full items-center justify-center bg-gradient-to-br from-sky-100 to-cyan-50">
                      <span className="text-5xl">📚</span>
                    </div>
                  )}

                  {/* IMAGE OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#075985]/30 via-transparent to-transparent opacity-60" />
                </div>

                {/* CONTENT */}
                <div className="p-5">
                  {/* EDITION BADGE */}
                  {s.edition && (
                    <span className="inline-flex items-center rounded-full bg-sky-50 px-3 py-1 text-xs font-bold text-sky-700 ring-1 ring-sky-100">
                      {s.edition}
                    </span>
                  )}

                  {/* TITLE */}
                  <h3 className="mt-4 line-clamp-2 min-h-[3.5rem] text-lg font-bold leading-snug text-slate-800 transition-colors group-hover:text-sky-700">
                    {s.title || "Materi SKB Penyuluh Pertanian"}
                  </h3>

                  {/* BUTTON */}
                  {s.url ? (
                    <a
                      href={s.url}
                      className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0879a8] to-[#219bc5] px-4 py-3 text-sm font-semibold text-white shadow-md shadow-sky-200/70 transition-all duration-300 hover:-translate-y-0.5 hover:from-[#06648e] hover:to-[#1689b5] hover:shadow-lg"
                    >
                      Lihat Soal
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="mt-5 w-full cursor-not-allowed rounded-xl bg-slate-200 px-4 py-3 text-sm font-semibold text-slate-400"
                    >
                      Soal Belum Tersedia
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* EMPTY STATE */
          <div className="rounded-2xl border border-dashed border-sky-200 bg-white px-6 py-16 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sky-50 text-3xl">
              🌱
            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-800">
              Belum Ada Koleksi Soal
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Koleksi soal SKB Penyuluh Pertanian akan ditampilkan di sini.
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default SkbDokterGigi;
