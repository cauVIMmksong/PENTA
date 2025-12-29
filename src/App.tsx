import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import FailPage from './pages/FailPage';
import HomePage from './pages/HomePage';
import JoinPage from './pages/JoinPage';
import MatchingPage from './pages/MatchingPage';
import ProfilePage from './pages/ProfilePage';
import ResultPage from './pages/ResultPage';
import RoomCreatePage from './pages/RoomCreatePage';
import RoomsPage from './pages/RoomsPage';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/matching" element={<MatchingPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/fail" element={<FailPage />} />
        <Route path="/rooms" element={<RoomsPage />} />
        <Route path="/rooms/create" element={<RoomCreatePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
