import React, { useState, useEffect } from 'react';
import { Loader } from "react-full-page-loader-overlay";
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
  const [loading, setLoading] = useState([]);
  const [operacoes, setOperacoes] = useState([]);

  useEffect(() => {
    async function loadOperacoes() {
      const response = await api.get('/operations');

      setOperacoes(response.data);
    }

    loadOperacoes();
    setLoading(false);
  }, []);
  
  async function handleDeleteOperacao(data) {
    //const responseDelete = await api.delete('/operations/' + data.id);
    await api.delete('/operations/' + data.id);
    const response = await api.get('/operations');
    setOperacoes(response.data);
  }

  async function handleAddOperacao(data) {
    setLoading(true);
    const response = await api.post('/operations', data);
    
    const ir = Number(data.ir);
    const preco = Number(data.preco);
    const quantidade = Number(data.quantidade);
    const subtotal = Number(data.subtotal);
    const corretagem = Number(data.corretagem);
    const total = Number(data.total);
    const tipo = Number(data.tipo);

    const operacao = {
      id: response.data.id,
      tipo,
      data: data.data,
      papel: data.papel,
      preco,
      quantidade,
      subtotal,
      corretagem,
      ir,
      total,
    };

    setOperacoes([...operacoes, operacao]);
    setLoading(false);
  }

  return (
    <div className="register-container">
      <Loader show={loading} design={3} centerBorder={"#7d40e7"} leftBorder={"#7d40e7"} rightBorder={"#7d40e7"} />
      <div className='add-form'>
        <OperacaoForm onSubmit={handleAddOperacao} loading={loading} />
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