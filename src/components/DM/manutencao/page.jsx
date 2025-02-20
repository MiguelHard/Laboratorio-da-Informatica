import estilo from './estilo.module.css';

import imagem from '../../../../public/manutencao4.jpg'
import Image from 'next/image';

import { chakraPetch } from '../../../fonts'

export default function Manutencao() {
    return (
        <div className={estilo.Manutencao}>
            <Image src={imagem} className={estilo.img} alt='imagem da area de manutenção' />

            <div className={estilo.Sobre}>

                <div className={estilo.Texto}>
                    <h1 className={chakraPetch.className}>Manutenção e Suporte em Informática</h1>
                    <p>Garantimos o bom funcionamento dos seus equipamentos e sistemas. Suporte técnico especializado para resolver seus problemas.</p>
                </div>

                <div className={estilo.Cards}>

                    <div className={estilo.Card}>
                        <h2 className={chakraPetch.className}>Suporte Remoto</h2>
                        <p>Assistência rápida e eficiente, sem sair do seu escritório.</p>
                    </div>

                    <div className={estilo.Card}>
                        <h2 className={chakraPetch.className}>Suporte Presencial</h2>
                        <p>Técnicos qualificados para atender suas necessidades no local.</p>
                    </div>

                    <div className={estilo.Card}>
                        <h2 className={chakraPetch.className}>Manutenção Preventiva</h2>
                        <p>Evite problemas com manutenções periódicas.</p>
                    </div>

                </div>

            </div>

        </div>
    );
};