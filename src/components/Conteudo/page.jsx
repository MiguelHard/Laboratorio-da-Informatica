import estilo from './estilo.module.css'

import CT from './CT/page'
import SP from './SP/page'
import ES from './ES/page'

import { poppins } from '../../fonts'


export default function Conteudo(){
    return(
        <div className={`${estilo.Conteudo} ${poppins.className}`}>
            <CT />
            <SP />
            <ES />
        </div>
    )
}