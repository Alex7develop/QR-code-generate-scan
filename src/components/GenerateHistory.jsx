import { QRCodeSVG } from 'qrcode.react';
import { GENERATE_DATA } from '../constants';
import style from './GenerateHistory.module.css';

const GenerateHistory = () => {
  const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

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

export default GenerateHistory;
