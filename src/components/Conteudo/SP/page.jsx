import estilo from './estilo.module.css'

import imagem from '../../../../public/tecnologia.jpg'

import Image from 'next/image'

import { chakraPetch } from '../../../fonts'

export default function SP() {
    return (
        <div className={estilo.SP}>
            <Image src={imagem} className={estilo.img} alt='imagem da area de manutenção' />

            <div className={estilo.Sobre}>

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