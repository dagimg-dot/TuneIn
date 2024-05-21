import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tracks from "./pages/tracks/Tracks";
import Default from "./layout/Default";
import Browse from "./pages/home/Browse";
import Playlists from "./pages/playlist/Playlists";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Default />}>
          <Route path="/" element={<Browse />} />
          <Route path="/tracks" element={<Tracks />} />
          <Route path="/playlists" element={<Playlists />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
