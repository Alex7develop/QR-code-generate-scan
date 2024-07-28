import { QRCodeSVG } from 'qrcode.react';
import { SCAN_DATA } from '../constants';
import style from './ScanHistory.module.css';

const ScanHistory = () => {
  const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

  return (
    <div className={style.container}>
      {data.map((text, index) => (
        <div className={style.block} key={`${text}-${index}`}>
          <p className={style.text}>{text}</p>
          <QRCodeSVG value={text} size={100} />
        </div>
      ))}
    </div>
  );
};

export default ScanHistory;
