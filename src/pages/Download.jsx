import React from "react";
import { downloadList } from "../common";

const Download = () => {
  // Memastikan data selalu berupa array
  const dataSkd = Array.isArray(downloadList) ? downloadList : [];

  return (
    <div className="min-h-screen bg-[#effaff] px-4 py-10 md:px-8">
      {/* HEADER */}
      <div className="mx-auto mb-10 max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#087DA5] via-[#168FB6] to-[#36A9CE] px-6 py-10 shadow-xl shadow-[#087DA5]/20 md:px-10 md:py-12">
          {/* GRID PATTERN */}
          <div
            className="absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage: `
                linear-gradient(to right, white 1px, transparent 1px),
                linear-gradient(to bottom, white 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />

          {/* DECORATIVE */}
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 right-40 h-56 w-56 rounded-full bg-cyan-200/20 blur-3xl" />

          <div className="relative z-10">
            {/* LABEL */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-bold tracking-wider text-white backdrop-blur-sm">
              <span>📚</span>
              BANK SOAL UNTUK CPNS
            </div>

            {/* TITLE */}
            <h1 className="font-poppins text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-5xl">
              Download Soal SKD
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#D5F5FF] md:text-base">
              Persiapkan dirimu menghadapi seleksi CPNS dengan kumpulan soal SKD
              pilihan. Belajar lebih mudah, kapan saja dan di mana saja.
            </p>

            {/* INFORMATION */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/15 px-4 py-3 text-sm text-white backdrop-blur-sm">
                <span className="text-lg">📖</span>
                <span className="font-semibold">
                  {dataSkd.length} Koleksi Soal
                </span>
              </div>

              <div className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/15 px-4 py-3 text-sm text-white backdrop-blur-sm">
                <span className="text-lg">🎯</span>
                <span className="font-semibold">Persiapan CPNS</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CARD SECTION */}
      <div className="mx-auto max-w-7xl">
        {/* SECTION TITLE */}
        <div className="mb-7 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold text-[#075B7A] md:text-2xl">
              Koleksi Soal
            </h2>

            <p className="mt-1 text-sm text-[#54869A]">
              Pilih materi soal untuk mulai belajar.
            </p>
          </div>

          {dataSkd.length > 0 && (
            <span className="rounded-full border border-[#B8E7F3] bg-[#DDF6FC] px-4 py-2 text-xs font-bold text-[#087DA5]">
              {dataSkd.length} Materi Tersedia
            </span>
          )}
        </div>

        {/* CARD LIST */}
        {dataSkd.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {dataSkd.map((s, index) => (
              <div
                key={s.id ?? index}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[#C8EAF4] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#75CDE5] hover:shadow-xl hover:shadow-[#087DA5]/15"
              >
                {/* IMAGE */}
                <div className="relative h-52 overflow-hidden bg-gradient-to-br from-[#DDF6FC] to-[#B9EAF6]">
                  {s.image ? (
                    <img
                      src={s.image}
                      alt={s.title || "Soal SKD"}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white shadow-lg shadow-[#087DA5]/10 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                        <span className="text-4xl">📚</span>
                      </div>
                    </div>
                  )}

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#075B7A]/40 via-transparent to-transparent" />

                  {/* EDITION */}
                  {s.edition && (
                    <div className="absolute left-4 top-4">
                      <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/50 bg-white/90 px-3 py-1.5 text-xs font-bold text-[#087DA5] shadow-sm backdrop-blur-md">
                        <span>✦</span>
                        {s.edition}
                      </span>
                    </div>
                  )}
                </div>

                {/* CONTENT */}
                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-3 flex items-center gap-2 text-xs font-medium text-[#6B9BAB]">
                    <span className="h-2 w-2 rounded-full bg-[#25B6C9]" />
                    Materi Pembelajaran
                  </div>

                  {/* TITLE */}
                  <h3 className="mb-3 line-clamp-2 min-h-[3.5rem] text-lg font-bold leading-snug text-[#075B7A] transition-colors duration-300 group-hover:text-[#159EC2]">
                    {s.title || "Soal Seleksi Kompetensi Dasar"}
                  </h3>

                  <div className="mb-5 h-px w-full bg-[#DDF1F7]" />

                  {/* BUTTON */}
                  <div className="mt-auto">
                    {s.url ? (
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#087DA5] to-[#36A9CE] px-4 py-3.5 text-sm font-bold text-white shadow-md shadow-[#087DA5]/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-[#066B8F] hover:to-[#2299BE] hover:shadow-lg hover:shadow-[#087DA5]/30 active:translate-y-0"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="h-5 w-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 16.5V3.75m0 12.75 4.5-4.5m-4.5 4.5L7.5 12M3.75 16.5v2.25A2.25 2.25 0 0 0 6 21h12a2.25 2.25 0 0 0 2.25-2.25V16.5"
                          />
                        </svg>
                        Lihat Soal
                        <span className="ml-auto text-lg transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </a>
                    ) : (
                      <button
                        type="button"
                        disabled
                        className="flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-xl bg-[#E8F3F6] px-4 py-3.5 text-sm font-semibold text-[#8BAEBB]"
                      >
                        <span>🔒</span>
                        Soal Belum Tersedia
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* EMPTY STATE */
          <div className="rounded-3xl border border-dashed border-[#8DD5E8] bg-white px-6 py-20 text-center shadow-sm">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-[#E3F8FD] to-[#C6EDF7] shadow-inner">
              <span className="text-5xl">📚</span>
            </div>

            <h3 className="mt-6 text-xl font-bold text-[#075B7A]">
              Belum Ada Koleksi Soal
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-[#648B9A]">
              Saat ini belum ada materi soal SKD yang tersedia. Silakan kunjungi
              kembali halaman ini untuk melihat koleksi soal terbaru.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#E3F8FD] px-4 py-2 text-xs font-semibold text-[#087DA5]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#25B6C9]" />
              Menunggu materi baru
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Download;
