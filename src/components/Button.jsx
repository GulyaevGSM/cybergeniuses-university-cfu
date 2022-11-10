import React from "react";

const ocr = {
    link: 'https://gpayalta.com/OCR/'
}

const Button = ({ styles }) => (
  <button onClick={() => window.open(ocr.link)} type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    Перейти
  </button>
);

export default Button;
