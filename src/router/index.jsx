import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Skd from "../pages/skd/Skd";

import LoginSkd1 from "../pages/skd/skd1/LoginSkd1";
import RoomSkd1 from "../pages/skd/skd1/RoomSkd1";
import ResultSkd1 from "../pages/skd/skd1/ResultSkd1";

import SkbPenyuluhPertanian from "../pages/skb_penyuluh_pertanian/SkbPenyuluhPertanian";
import LoginSkd2 from "../pages/skd/skd2/LoginSkd2";
import RoomSkd2 from "../pages/skd/skd2/RoomSkd2";
import ResultSkd2 from "../pages/skd/skd2/ResultSkd2";
import LoginSkd3 from "../pages/skd/skd3/LoginSkd3";
import RoomSkd3 from "../pages/skd/skd3/RoomSkd3";
import ResultSkd3 from "../pages/skd/skd3/ResultSkd3";
import LoginSkdVip1 from "../pages/skd/skdvip1/LoginSkdVip1";
import RoomSkdVip1 from "../pages/skd/skdvip1/RoomSkdVip1";
import ResultSkdVip1 from "../pages/skd/skdvip1/ResultSkdVip1";
import LoginSkbPenyuluhPertanian1 from "../pages/skb_penyuluh_pertanian/skbpenyuluhpertanian1/LoginSkbPenyuluhPertanian1";
import RoomSkbPenyuluhPertanian1 from "../pages/skb_penyuluh_pertanian/skbpenyuluhpertanian1/RoomSkbPenyuluhPertanian1";
import ResultSkbPenyuluhPertanian1 from "../pages/skb_penyuluh_pertanian/skbpenyuluhpertanian1/ResultSkbPenyuluhPertanian1";
import LoginSkbPenyuluhPertanian2 from "../pages/skb_penyuluh_pertanian/skbpenyuluhpertanian2/LoginSkbPenyuluhPertanian2";
import RoomSkbPenyuluhPertanian2 from "../pages/skb_penyuluh_pertanian/skbpenyuluhpertanian2/RoomSkbPenyuluhPertanian2";
import ResultSkbPenyuluhPertanian2 from "../pages/skb_penyuluh_pertanian/skbpenyuluhpertanian2/ResultSkbPenyuluhPertanian2";
import SkbGuruBahasaInggris from "../pages/skb_guru_bahasa_inggris/SkbGuruBahasaInggris";
import SkbDokter from "../pages/skb_dokter/SkbDokter";
import SkbDokterGigi from "../pages/skb_dokter_gigi/SkbDokterGigi";
import SkbPengawasBenihTanaman from "../pages/skb_pengawas_benih_tanaman/SkbPengawasBenihTanaman";
import Contact from "../pages/Contact";
import Download from "../pages/Download";
import DownloadSkd from "../pages/download_soal/skd/DownloadSkd";
import LoginSkbPenyuluhPertanian3 from "../pages/skb_penyuluh_pertanian/skbpenyuluhpertanian3/LoginSkbPenyuluhPertanian3";
import RoomSkbPenyuluhPertanian3 from "../pages/skb_penyuluh_pertanian/skbpenyuluhpertanian3/RoomSkbPenyuluhPertanian3";
import ResultSkbPenyuluhPertanian3 from "../pages/skb_penyuluh_pertanian/skbpenyuluhpertanian3/ResultSkbPenyuluhPertanian3";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/download" element={<Download />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/skd" element={<Skd />} />
      <Route path="/skd/skd1" element={<LoginSkd1 />} />
      <Route path="/skd/roomskd1" element={<RoomSkd1 />} />
      <Route path="/skd/resultskd1" element={<ResultSkd1 />} />

      <Route path="/skd/skd2" element={<LoginSkd2 />} />
      <Route path="/skd/roomskd2" element={<RoomSkd2 />} />
      <Route path="/skd/resultskd2" element={<ResultSkd2 />} />

      <Route path="/skd/skd3" element={<LoginSkd3 />} />
      <Route path="/skd/roomskd3" element={<RoomSkd3 />} />
      <Route path="/skd/resultskd3" element={<ResultSkd3 />} />

      <Route path="/skd/skdvip1" element={<LoginSkdVip1 />} />
      <Route path="/skd/roomskdvip1" element={<RoomSkdVip1 />} />
      <Route path="/skd/resultskdvip1" element={<ResultSkdVip1 />} />

      <Route
        path="/skb-penyuluh-pertanian"
        element={<SkbPenyuluhPertanian />}
      />
      <Route
        path="/skb-penyuluh-pertanian/skb1"
        element={<LoginSkbPenyuluhPertanian1 />}
      />
      <Route
        path="/skd/roomskbpenyuluhpertanian1"
        element={<RoomSkbPenyuluhPertanian1 />}
      />
      <Route
        path="/skb-penyuluh-pertanian/resultskbpenyuluhpertanian1"
        element={<ResultSkbPenyuluhPertanian1 />}
      />

      <Route
        path="/skb-penyuluh-pertanian/skb2"
        element={<LoginSkbPenyuluhPertanian2 />}
      />
      <Route
        path="/skd/roomskbpenyuluhpertanian2"
        element={<RoomSkbPenyuluhPertanian2 />}
      />
      <Route
        path="/skb-penyuluh-pertanian/resultskbpenyuluhpertanian2"
        element={<ResultSkbPenyuluhPertanian2 />}
      />

      <Route
        path="/skb-penyuluh-pertanian/skb3"
        element={<LoginSkbPenyuluhPertanian3 />}
      />
      <Route
        path="/skd/roomskbpenyuluhpertanian3"
        element={<RoomSkbPenyuluhPertanian3 />}
      />
      <Route
        path="/skb-penyuluh-pertanian/resultskbpenyuluhpertanian3"
        element={<ResultSkbPenyuluhPertanian3 />}
      />

      <Route
        path="/skb-pengawas-benih-tanaman"
        element={<SkbPengawasBenihTanaman />}
      />

      <Route path="skb-dokter" element={<SkbDokter />} />

      <Route path="skb-dokter-gigi" element={<SkbDokterGigi />} />

      <Route
        path="/skb-guru-bahasa-inggris"
        element={<SkbGuruBahasaInggris />}
      />

      <Route path="/download/skd" element={<DownloadSkd />} />
    </Route>,
  ),
);

export default router;
