import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RepoDetailPage from './pages/RepoDetailPage';

const App = () => {
    return (
        <BrowserRouter basename={import.meta.env.VITE_BASE_PATH}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/repo/:name" element={<RepoDetailPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
