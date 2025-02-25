import { handleDecrypt, handleEncrypt } from "../../utils/helper";

export default function Home() {
    const originalText = "Hello, World!";
const encryptedText = handleEncrypt(originalText);
console.log("Encrypted:", encryptedText);

const decryptedText = handleDecrypt(encryptedText);
console.log("Decrypted:", decryptedText);

    return (

        <div >
        <h1 >Home</h1>
        <p >
            This is a home page. You can add your components here.
        </p>
        </div>
    );
    }