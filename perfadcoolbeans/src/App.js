import { Outlet, Link } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <h1>Test Shop Website</h1>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <Link to="/home">Home</Link> |{' '}
        <Link to="/purchase">Purchase</Link> |{' '}
        <Link to="/signup">Sign Up</Link> |{' '}
      </nav>
      <Outlet />
    </div>
  );
}
