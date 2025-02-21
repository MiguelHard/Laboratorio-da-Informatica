import estilo from './estilo.module.css'

import { chakraPetch } from '../../../fonts'


export default function ES() {
    return (
        <div className={estilo.ES}>

            <div className={estilo.Conteudo}>

                <div className={estilo.Texto}>
                    <h1 className={chakraPetch.className}>Por que Escolher a Solutec?</h1>
                    <p>Experiência, qualidade e compromisso com o cliente. Somos a parceira ideal para sua empresa.</p>
                </div>


                <div className={estilo.Cards}>

                    <div className={estilo.Card}>
                        <div className={estilo.Numeracao}>1</div>
                        <h2 className={chakraPetch.className}>Experiência</h2>
                        <p>Anos de atuação no mercado de TI.</p>
                    </div>



                    <div className={estilo.imagem}>
                    </div>



                    <div className={estilo.Card}>

                        <div className={estilo.Card2}>
                            <div className={estilo.Numeracao}>2</div>
                            <h2 className={chakraPetch.className}>Qualidade</h2>
                            <p>Soluções inovadoras e eficientes.</p>
                        </div>


                        <div className={estilo.Card2}>
                            <div className={estilo.Numeracao}>3</div>
                            <h2 className={chakraPetch.className}>Compromisso</h2>
                            <p>Parceria duradoura com nossos clientes.</p>
                        </div>

                    </div>






                </div>





            </div>
        </div>
    )
}