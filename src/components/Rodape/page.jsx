import estilo from './estilo.module.css';

import { chakraPetch, poppins } from '../../fonts';

import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function Rodape() {
    return (
        <div className={`${estilo.Rodape} ${poppins.className}`}>
            <div className={estilo.Conteudo}>

                <div className={estilo.Texto}>
                    <h1 className={chakraPetch.className}>Entre em Contato Conosco</h1>
                    <p>Descubra como a Solutec pode transformar o seu negócio. Agende uma conversa conosco!</p>
                </div>

                <div className={estilo.Cards}>

                    <div className={estilo.Card}>
                        <h2 className={chakraPetch.className}>Entre em Contato pelo Whatsapp</h2>
                        <p><FaWhatsapp /> (67) 99230-6928</p>
                    </div>


                    <div className={estilo.Card}>
                        <h2 className={chakraPetch.className}>Siga nossas redes sociais</h2>
                        <a href='https://www.facebook.com/share/18QSX4fyJC/'><FaFacebookSquare /> solucoestecnicasemtecnologia</a>
                        <a href='https://www.instagram.com/solutec_solucoesemtecnologia?igsh=ZXptdGNiYTU3azQz'><FaInstagram /> solutecsolucoesemtecnologia</a>
                    </div>


                    <div className={estilo.Card}>
                        <h2 className={chakraPetch.className}>Entre em Contato pelo Email</h2>
                        <p className={estilo.email}><MdOutlineEmail /> solutecsolucoesemtecnologia@gmail.com</p>
                    </div>


                </div>

            </div >
        </div>
    )
}