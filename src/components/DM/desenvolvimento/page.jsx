import estilo from './estilo.module.css';

import imagem from '../../../../public/desenvolvimento.PNG'
import Image from 'next/image';

import { chakraPetch } from '../../../fonts'

import Animacao2 from '../../animacao2/page'


export default function Desenvolvimento() {

    const { ref, isVisible } = Animacao2(0.2);


    return (
        <div className={estilo.Desenvolvimento}>
            
            <Image src={imagem} ref={ref} className={`card fade-in-element ${isVisible ? 'visible' : ''} ${estilo.img}`} alt='imagem da area de desnvolvimento'/>


            <div ref={ref} className={`card fade-in-element ${isVisible ? 'visible' : ''} ${estilo.Sobre}`}>

                <div className={estilo.Texto}>
                    <h1 className={chakraPetch.className}>Desenvolvimento de Sites e Aplicações</h1>
                    <p>Criamos soluções digitais sob medida para sua empresa. Sites, aplicações web e mobile alinhados com seus objetivos de negócio.</p>
                </div>

                <div src={imagem}  ref={ref} className={`card fade-in-element ${isVisible ? 'visible' : ''} ${estilo.Qualidades}`} >

                    <div className={estilo.Card}>
                        <div className={estilo.Formato}>1</div>
                        <div className={estilo.CardTexto}>
                            <h2>Análise</h2>
                            <p>Entendemos suas necessidades e definimos os requisitos.</p>
                        </div>
                    </div>

                    <div className={estilo.Card}>
                        <div className={estilo.Formato}>2</div>
                        <div className={estilo.CardTexto}>
                            <h2>Design</h2>
                            <p>Criamos interfaces intuitivas e atraentes.</p>
                        </div>
                    </div>

                    <div className={estilo.Card}>
                        <div className={estilo.Formato}>3</div>
                        <div className={estilo.CardTexto}>
                            <h2>Desenvolvimento</h2>
                            <p>Implementamos a solução com as tecnologias mais adequadas.</p>
                        </div>
                    </div>

                    <div className={estilo.Card}>
                        <div className={estilo.Formato}>4</div>
                        <div className={estilo.CardTexto}>
                            <h2>Implantação</h2>
                            <p>Colocamos sua solução no ar e garantimos o seu funcionamento.</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};