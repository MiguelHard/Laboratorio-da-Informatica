import estilo from './estilo.module.css';
import { poppins } from '../../fonts'

import Desenvolvimento from './desenvolvimento/page';
import Manutencao from './manutencao/page';

export default function DM(){
    return(
        <div className={`${estilo.DM} ${poppins.className}`}>
            <Desenvolvimento />
            <Manutencao />
        </div>
    );
};