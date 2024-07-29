import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react';
import style from './qrCodeScanner.module.css';
import { SCAN_DATA } from '../constants';

const QrCodeScanner = () => {
  const [value, setValue] = useState(null);
  const [isLink, setIsLink] = useState(false);

  const scanHandler = (result) => {
    const scannedValue = result[0].rawValue;
    setValue(scannedValue);

    // Проверка, является ли значение ссылкой
    const urlPattern = /^(https?:\/\/[^\s$.?#].[^\s]*)$/;
    setIsLink(urlPattern.test(scannedValue));

    const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
    localStorage.setItem(
      SCAN_DATA,
      JSON.stringify([...prevData, scannedValue])
    );
  };

  return (
    <div className={style.container}>
      <div className={style.scannerContainer}>
        <Scanner
          onScan={scanHandler}
          components={{ finder: false }}
          styles={{
            container: { width: '100%' },
          }}
        />
      </div>
      {value && (
        isLink ? (
          <a href={value} target="_blank" rel="noopener noreferrer" className={style.linkButton}>
            Перейти по ссылке
          </a>
        ) : (
          <p className={style.result}>{value}</p>
        )
      )}
    </div>
  );
};

export default QrCodeScanner;
