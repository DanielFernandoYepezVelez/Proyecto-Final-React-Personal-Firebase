import { Route, Routes } from "react-router-dom";

// Components
import { Home } from '../Components/Home/Home';
import { History } from '../Components/History/History';
import { Members } from '../Components/Members/Members';
import { Music } from '../Components/Music/Music';
import { Albums } from '../Components/Albums/Albums';
import { Merchandise } from '../Components/Merchandise/Merchandise';
import { InformationProduct } from '../Components/InformationProduct/InformationProduct';

// Shared Components
import { Menu } from '../shared/Menu/Menu';
import { Footer } from '../shared/Footer/Footer';

export function Rutas() {
    return (
        <>
            <Menu />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/history" element={<History />} />
              <Route path="/members" element={<Members />} />
              <Route path="/music" element={<Music />} />
              <Route path="/albums" element={<Albums />} />
              <Route path="/merchandise" element={<Merchandise />} />
              <Route path="/store" element={<InformationProduct />} />
            </Routes>
            <Footer />
        </>
      );
}