import { Outlet } from "react-router-dom";
import Navbar from "./components/nav/Navbar";

function App() {
  return (
    <main className="">
      {/* 🔥 SEO LANDING (VISIBLE UNTUK GOOGLE, HIDDEN UNTUK USER) */}
      <section className="sr-only">
        <h1>Soal Cpns</h1>

        <p>kumpulan soal cpns</p>

        <h2>Calon Pegawai Negeri Sipil</h2>
      </section>
      <Navbar />
      <Outlet />
    </main>
  );
}

export default App;
