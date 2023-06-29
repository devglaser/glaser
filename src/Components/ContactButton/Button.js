import Link from "next/link";
import button from './button.module.css'
const ContactButton = () => {
    return (
        <Link href='https://wa.me/552799678371' target="_blank" id={button.buttonLink}>
            Entrar em Contato
            <svg width={285} height={65}>
                <defs>
                    <linearGradient id="myGradient">
                        <stop offset="0%" stopColor="#17EEEF"/>
                        <stop offset="100%" stopColor="#7cfc00"/>
                    </linearGradient>
                </defs>
                
                <rect x={10} y={5} width={265} height={45} rx={5} ry={5}/>
            </svg>
        </Link>
    );
}

export default ContactButton;