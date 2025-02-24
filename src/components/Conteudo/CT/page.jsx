import estilo from './estilo.module.css'

import { chakraPetch } from '../../../fonts'

import Animacao2 from '../../animacao2/page'

export default function CT() {

    const { ref, isVisible } = Animacao2(0.2);

    return (
        <div className={estilo.CT}>

            <div ref={ref} className={`card fade-in-element ${isVisible ? 'visible' : ''} ${estilo.Conteudo}`}>

                <div className={estilo.Texto}>
                    <h1 className={chakraPetch.className}>Consultoria em TI: Estratégia e Inovação</h1>
                    <p>Ajudamos sua empresa a usar a tecnologia de forma estratégica. Maximize seus resultados com soluções inovadoras.</p>
                </div>

                <div className={estilo.Cards}>

                    <div className={estilo.Card}>
                        <h2 className={chakraPetch.className}>Planejamento Estratégico</h2>
                        <p>Definimos um plano de TI alinhado com seus objetivos.</p>
                    </div>


                    <div className={estilo.Card}>
                        <h2 className={chakraPetch.className}>Análise de Riscos</h2>
                        <p>Identificamos e mitigamos os riscos de segurança.</p>
                    </div>


                    <div className={estilo.Card}>
                        <h2 className={chakraPetch.className}>Inovação Tecnológica</h2>
                        <p>Implementamos soluções que impulsionam o seu negócio.</p>
                    </div>


                </div>

            </div >

        </div >
    )
}