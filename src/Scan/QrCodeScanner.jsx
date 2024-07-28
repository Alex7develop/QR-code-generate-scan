import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react';
import style from './qrCodeScanner.module.css';
import { SCAN_DATA } from '../constants';

const QrCodeScanner = () => {
  const [value, setValue] = useState(null);

  const scanHandler = (result) => {
    setValue(result[0].rawValue);

    const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
    localStorage.setItem(
      SCAN_DATA,
      JSON.stringify([...prevData, result[0].rawValue])
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
      {value && <p className={style.result}>{value}</p>}
    </div>
  );
};

export default QrCodeScanner;
