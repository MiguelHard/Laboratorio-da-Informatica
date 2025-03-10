import estilo from './estilo.module.css';
import Image from 'next/image';

import { chakraPetch, poppins } from '../../fonts'

import Animacao from '../animacao/page';
import { FaLaptopCode } from "react-icons/fa";

export default function Banner() {
    return (
        <div className={estilo.containerPrincipal}>
            <div className={estilo.backgroundContainer}>
                <Animacao />
            </div>
            <div className={estilo.conteudo}>
                <h1 className={`${estilo.h1} ${chakraPetch.className}`}><FaLaptopCode/>Laboratório da Informática</h1>
                <p className={poppins.className}>Consultoria e assessoria especializada em desenvolvimento de sites e aplicações, manutenção e suporte em informática.</p>
            </div>
        </div>
    );
};