import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/home/Home';
import History from './pages/history/History';
import PageNotFound from './pages/pageNotFound/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} /> {/* Add this line */}
        <Route path="/history" element={<History />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
