import React, { useState, useEffect } from 'react';
import PosicaoItem from '../../components/PosicaoItem'
import api from '../../services/api'

import './styles.css';

export default function Posicao() {
  const [acoes, setAcoes] = useState([]);

  useEffect(() => {
    async function loadAcoes() {
      const response = await api.get('/stocks');

      setAcoes(response.data);
    }

    loadAcoes();
  }, []);

  return (
    <div className="register-container">
      <div className="content">
        <table className="posicao-table">
          <thead>
            <tr>
              <td><strong>Papel</strong></td>
              <td><strong>Quantidade</strong></td>
              <td><strong>Média Paga</strong></td>
              <td><strong>Cotação</strong></td>
              <td><strong>Lucro (Pago x Atual)</strong></td>
              <td><strong>Preço Ano</strong></td>
              <td><strong>Lucro (Ano x Atual)</strong></td>
            </tr>
          </thead>
          
          <tbody>
            {acoes.map(acao => (
              <PosicaoItem key={acao.nome} acao={acao} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}