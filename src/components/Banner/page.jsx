import estilo from './estilo.module.css';
import Image from 'next/image';

import { chakraPetch, poppins } from '../../fonts'

import Animacao from '../animacao/page';
import Logo from '../../../public/lab5.png'

export default function Banner() {
    return (
        <div className={estilo.containerPrincipal}>
            <div className={estilo.backgroundContainer}>
                <Animacao />
            </div>
            <div className={estilo.conteudo}>
                <h1 className={`${estilo.h1} ${chakraPetch.className}`}><Image src={Logo} className={estilo.img}/>Laboratório da Informática</h1>
                <p className={poppins.className}>Consultoria e assessoria especializada em desenvolvimento de sites e aplicações, manutenção e suporte em informática.</p>
            </div>
        </div>
    );
};

{/* <div className={estilo.containerPrincipal}>
<div className={estilo.backgroundContainer}>
    <Animacao />
</div>
<div className={estilo.conteudo}>
    <h1 className={`${estilo.h1} ${chakraPetch.className}`}>Solutec: Soluções em Tecnologia</h1>
    <p className={poppins.className}>Consultoria e assessoria especializada em desenvolvimento de sites e aplicações, manutenção e suporte em informática.</p>
</div>
</div> */}