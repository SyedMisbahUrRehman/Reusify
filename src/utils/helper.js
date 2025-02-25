import CryptoJS from "crypto-js";


   const passphrase = process.env.REACT_APP_PASS_PHRASE;
  export  const handleEncrypt = (text) => {
    return CryptoJS.AES.encrypt(text, passphrase).toString();
  };
  export const handleDecrypt = (ciphertext) => {
    const bytes = CryptoJS.AES.decrypt(ciphertext, passphrase);
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
  };

export const mergeClass = (...classes) => {
    return classes.filter(Boolean).join(' ');
  };
  