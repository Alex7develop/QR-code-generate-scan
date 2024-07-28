import { Link } from 'react-router-dom';
import style from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={style.container}>
      <Link to="/generate">Генерировать QR код</Link>
      <Link to="/scan">Сканировать QR код</Link>
      <Link to="/generationistory">История генерирования QR код</Link>
      <Link to="/scanhistory">История сканирования QR код</Link>
    </nav>
  );
};

export default Navigation;
