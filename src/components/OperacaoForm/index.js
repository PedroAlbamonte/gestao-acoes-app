import React, { useState, useEffect } from 'react';

import './styles.css';

function OperacaoForm( {onSubmit} ) {
  const [tipo, setTipo] = useState('1');
  const [data, setData] = useState('');
  const [papel, setPapel] = useState('');
  const [preco, setPreco] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [subtotal, setSubtotal] = useState('');
  const [corretagem, setCorretagem] = useState('');
  const [ir, setIr] = useState('');
  const [total, setTotal] = useState('');

  useEffect(() => {
    async function calculaTotais() {
      setSubtotal((quantidade*preco).toFixed(2));
      // console.log((quantidade*preco).toFixed(2));
      if (tipo === "1"){
        setTotal((quantidade*preco+Number(corretagem)).toFixed(2));
      }else{
        setTotal((quantidade*preco-Number(corretagem)).toFixed(2));
      }
      // console.log("CT: " + quantidade + "|" + preco + "|" + subtotal + "|" + corretagem);
    }

    calculaTotais();
  }, [tipo, quantidade, preco, corretagem]);

  async function handleSubmit(e) {
    e.preventDefault();

    await onSubmit({
      tipo,
      data,
      papel,
      preco,
      quantidade,
      subtotal,
      corretagem,
      ir,
      total,
    });

    setTipo('1');
    setData('');
    setPapel('');
    setPreco('');
    setQuantidade('');
    setSubtotal('');
    setCorretagem('');
    setIr('');
    setTotal('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-block">
        <label htmlFor="tipo">Tipo</label>
        <select 
          name="tipo" 
          id="tipo" 
          required
          value={tipo}
          onChange={e => setTipo(e.target.value)}>
          <option value="1">Compra</option>
          <option value="2">Venda</option>
        </select>
      </div>

      <div className="input-block">
        <label htmlFor="data">Data</label>
        <input 
          name="data" 
          id="data" 
          required
          type="date"
          value={data}
          onChange={e => setData(e.target.value)}
        />
      </div>

      <div className="input-block upperCase">
        <label htmlFor="papel">Papel</label>
        <input 
          name="papel" 
          id="papel" 
          required
          value={papel}
          onChange={e => setPapel(e.target.value.toUpperCase())}
        />
      </div>

      <div className="input-block">
        <label htmlFor="preco">Preco</label>
        <input 
          name="preco" 
          id="preco" 
          required
          type="number"
          value={preco}
          onChange={e => setPreco(e.target.value)}
        />
      </div>

      <div className="input-block">
        <label htmlFor="quantidade">Quantidade</label>
        <input 
          name="quantidade" 
          id="quantidade" 
          required
          type="number"
          value={quantidade}
          onChange={e => setQuantidade(e.target.value)}
        />
      </div>

      <div className="input-block">
        <label htmlFor="subtotal">Subtotal</label>
        <input 
          name="subtotal" 
          id="subtotal" 
          disabled={true}
          required
          value={subtotal}
          onChange={e => setSubtotal(e.target.value)}
        />
      </div>

      <div className="input-block">
        <label htmlFor="corretagem">Corretagem</label>
        <input 
          name="corretagem" 
          id="corretagem" 
          required
          type="number"
          value={corretagem}
          onChange={e => setCorretagem(e.target.value)}
        />
      </div>

      <div className="input-block">
        <label htmlFor="ir">IR</label>
        <input 
          name="ir" 
          id="ir" 
          required
          type="number"
          value={ir}
          onChange={e => setIr(e.target.value)}
        />
      </div>

      <div className="input-block">
        <label htmlFor="total">Total</label>
        <input 
          name="total" 
          id="total" 
          required
          disabled={true}
          value={total}
          onChange={e => setTotal(e.target.value)}
        />
      </div>

      <button type="submit">Incluir</button>
    </form>
  );
}

export default OperacaoForm;
