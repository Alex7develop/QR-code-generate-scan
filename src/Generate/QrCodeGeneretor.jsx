import { QRCodeSVG } from 'qrcode.react';
import { useState } from 'react';
import style from './qrCodeGenerator.module.css';
import { GENERATE_DATA } from '../constants';


const QrCodeGeneretor = () => {
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = () => {
    const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
    localStorage.setItem(
      GENERATE_DATA,
      JSON.stringify([...prevData, value])
    );
    setResult(value);
    setValue('');
  };

  const onChangeHandler = (event) => {
    setValue(event.target.value);
    setResult('');
  };

  return (
    <div className={style.container}>
      <input
        type="text"
        placeholder="Введите текст..."
        value={value}
        onChange={onChangeHandler}
        className={style.input}
      />
      <button type="button" onClick={handleSubmit} className={style.button}>
        Сгенерировать QR
      </button>
      {result !== '' && (
        <div className={style.qrWrapper}>
          <QRCodeSVG value={result} size={200} />
        </div>
      )}
    </div>
  );
};

export default QrCodeGeneretor;
