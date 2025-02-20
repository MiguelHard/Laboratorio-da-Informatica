import estilo from './estilo.module.css';

import { chakraPetch, poppins } from '../../fonts';

import { MdOutlineSecurity } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { HiOutlineDatabase } from "react-icons/hi";

export default function BD() {
    return (
        <div className={`${estilo.BD} ${poppins.className}`}>
            <div className={estilo.Conteudo}>

                <div className={estilo.Texto}>
                    <h1 className={chakraPetch.className}>Banco de Dados: Gerenciamento e Otimização</h1>
                    <p>Projetamos, implementamos e otimizamos seus bancos de dados. Garantimos a segurança e a integridade dos seus dados.</p>
                </div>

                <div className={estilo.Cards}>

                    <div className={estilo.Card}>
                        <MdOutlineSecurity className={estilo.img} />
                        <div>
                            <h2 className={chakraPetch.className}>Segurança</h2>
                            <p>Proteção contra acessos não autorizados e perda de dados.</p>
                        </div>
                    </div>


                    <div className={estilo.Card}>
                        <CgWebsite className={estilo.img} />
                        <div>
                            <h2 className={chakraPetch.className}>Performance</h2>
                            <p>Otimização para garantir o acesso rápido aos dados.</p>
                        </div>
                    </div>



                    <div className={estilo.Card}>
                        <HiOutlineDatabase className={estilo.img} />
                        <div>
                            <h2 className={chakraPetch.className}>Integridade</h2>
                            <p>Garantia da consistência e validade dos dados.</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}