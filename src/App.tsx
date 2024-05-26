import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tracks from "./pages/tracks/Tracks";
import Default from "./layout/Default";
import Browse from "./pages/home/Browse";
import Playlists from "./pages/playlist/Playlists";
import { Toaster } from "react-hot-toast";
import Favorites from "./pages/favorites/Favorites";
import SinglePlaylist from "./pages/playlist/SinglePlaylist";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Default />}>
            <Route path="/" element={<Browse />} />
            <Route path="/tracks" element={<Tracks />} />
            <Route path="/playlists" element={<Playlists />} />
            <Route path="/playlists/:id" element={<SinglePlaylist />} />
            <Route path="/favorites" element={<Favorites />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#212121",
            color: "white",
          },
        }}
      />
    </div>
  );
}
export default App;
