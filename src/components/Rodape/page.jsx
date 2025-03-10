import estilo from './estilo.module.css';

import { chakraPetch, poppins } from '../../fonts';

import { FaWhatsapp } from "react-icons/fa";


export default function Rodape() {
    return (
        <div className={`${estilo.Rodape} ${poppins.className}`}>
            <div className={estilo.Conteudo}>

                <div className={estilo.Texto}>
                    <h1 className={chakraPetch.className}>Entre em Contato Conosco</h1>
                    <p>Descubra como o Laboratório da Informática pode transformar o seu negócio. Agende uma conversa conosco!</p>
                </div>

                <div className={estilo.Texto}>
                    <p>Entre em contato pelo WhatsApp</p>
                    <p><FaWhatsapp/> (67) 99230-6928</p>
                </div>


            </div >
        </div>
    )
}