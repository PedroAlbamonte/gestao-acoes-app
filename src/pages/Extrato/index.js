import React, { useState, useEffect } from 'react';
import OperacaoItem from '../../components/OperacaoItem'
import OperacaoForm from '../../components/OperacaoForm'
import api from '../../services/api'

import './styles.css';

//var login = JSON.parse(localStorage.getItem('@GestaoAcoes/Login'))
// console.log(login.accessToken);
// console.log(login.tokenId);
// console.log(login.profileObj.imageUrl);
// console.log(login.profileObj.name);

export default function Extrato() {
  const [operacoes, setOperacoes] = useState([]);

  useEffect(() => {
    async function loadOperacoes() {
      const response = await api.get('/operations');

      setOperacoes(response.data);
    }

    loadOperacoes();
  }, []);
  
  async function handleDeleteOperacao(data) {
    const responseDelete = await api.delete('/operations/' + data.id);
    const response = await api.get('/operations');
    setOperacoes(response.data);
  }

  async function handleAddOperacao(data) {
    const response = await api.post('/operations', data)
    
    const operacao = {
      id: response.data.id,
      tipo: data.tipo,
      data: data.data,
      papel: data.papel,
      preco: data.preco,
      quantidade: data.quantidade,
      subtotal: data.subtotal,
      corretagem: data.corretagem,
      ir: data.ir,
      total: data.total,
    };

    setOperacoes([...operacoes, operacao]);
  }

  return (
    <div className="register-container">
      <div className='add-form'>
        <OperacaoForm onSubmit={handleAddOperacao}/>
      </div>

      <div className='extrato'>
        <ul>
          <li className="operacao-item">
            <div className="item"><strong>Tipo</strong></div>
            <div className="item"><strong>Data</strong></div>
            <div className="item"><strong>Ação</strong></div>
            <div className="item"><strong>R$ Unit.</strong></div>
            <div className="item"><strong>Quantidade</strong></div>
            <div className="item"><strong>Subtotal</strong></div>
            <div className="item"><strong>Corretagem</strong></div>
            <div className="item"><strong>IR</strong></div>
            <div className="item"><strong>Total</strong></div>
            <div className="item"><strong>Ação</strong></div>
          </li>
          {operacoes.map(operacao => (
            <OperacaoItem key={operacao.id} operacao={operacao} onDelete={handleDeleteOperacao} />
          ))}
        </ul>
      </div>
    </div>
  );
}