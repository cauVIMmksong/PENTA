import { Link, Outlet, useLocation } from 'react-router-dom';
import './MainLayout.css';

const navItems = [
  { label: '홈', path: '/' },
  { label: '점심방', path: '/rooms' },
  { label: '프로필', path: '/profile' },
];

function MainLayout() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="layout">
      <header className="app-bar">
        <div className="logo">LunchMate</div>
        <div className="profile">LM</div>
      </header>

      <main className="content">
        <Outlet />
      </main>

      <nav className="bottom-nav">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-item ${isActive(item.path) ? 'active' : ''}`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default MainLayout;
