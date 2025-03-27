import estilo from './estilo.module.css'

import imagem from '../../../../public/banners/digital3.jpg'

import Image from 'next/image'

import { chakraPetch } from '../../../fonts'

import Animacao2 from '../../animacao2/page'

export default function SP() {
        
    const { ref, isVisible } = Animacao2(0.2);

    return (
        <div className={estilo.SP}>
            <Image src={imagem} ref={ref} className={`card fade-in-element ${isVisible ? 'visible' : ''} ${estilo.img}`} alt='imagem da area de manutenção' />

            <div ref={ref} className={`card fade-in-element ${isVisible ? 'visible' : ''} ${estilo.Sobre}`}>

                <div className={estilo.Texto}>
                    <h1 className={chakraPetch.className}>Soluções Personalizadas para sua Empresa</h1>
                    <p>Entendemos as necessidades específicas de cada cliente. Desenvolvemos soluções sob medida para atender suas demandas.</p>
                </div>

                <div className={estilo.Cards}>

                    <div className={estilo.Card}>
                        <div className={estilo.Numeracao}>1</div>
                        <div className={estilo.Conteudo}>
                            <h2 className={chakraPetch.className}>Análise Detalhada</h2>
                            <p>Mapeamos seus processos e identificamos oportunidades de melhoria.</p>
                        </div>
                    </div>

                    <div className={estilo.Card}>
                        <div className={estilo.Numeracao}>2</div>
                        <div className={estilo.Conteudo}>
                            <h2 className={chakraPetch.className}>Design Exclusivo</h2>
                            <p>Criamos soluções que se integram perfeitamente ao seu negócio.</p>
                        </div>
                    </div>

                    <div className={estilo.Card}>
                        <div className={estilo.Numeracao}>3</div>
                        <div className={estilo.Conteudo}>
                            <h2 className={chakraPetch.className}>Implementação Eficiente</h2>
                            <p>Garantimos a entrega da solução no prazo e com qualidade.</p>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}