"use client"

import estilo from './estilo.module.css'

import { chakraPetch } from '../../pages/fonts'

import { useState, useEffect } from 'react';

export default function animacao() {
    const squares = Array.from({ length: 32 }, (_, index) => index);
    const [activeSquares, setActiveSquares] = useState(new Set());

    useEffect(() => {
        // Função para gerar 6 números aleatórios únicos entre 0 e 31
        const getRandomSquares = () => {
            const newActiveSquares = new Set();
            while (newActiveSquares.size < 20) {
                newActiveSquares.add(Math.floor(Math.random() * 32));
            }
            return newActiveSquares;
        };

        // Atualiza os quadrados ativos a cada 2 segundos
        const interval = setInterval(() => {
            setActiveSquares(getRandomSquares());
        }, 3000); // 2000ms = 2 segundos de delay

       // Limpa o intervalo quando o componente é desmontado
       return () => clearInterval(interval);
    }, []);

   return (
           <div className={`${estilo.gridcontainer} ${chakraPetch.className}`}>
               {squares.map((index) => (
                   <div
                       id={index}
                       key={index}
                       className={`${estilo.gridsquare} ${activeSquares.has(index) ? estilo.a : ''}`}
                   />
               ))}
           </div>
   );
}