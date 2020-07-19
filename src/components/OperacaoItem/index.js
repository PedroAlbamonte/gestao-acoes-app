import React from 'react';
import NumberFormat from 'react-number-format';

import './styles.css';

function OperacaoItem({ operacao, onDelete }) {
  async function handleClick(e) {
    e.preventDefault();

    await onDelete(operacao);
  }

  return (
    <li className="operacao-item">
      <div className="item"><strong>{operacao.tipo} </strong></div>
      <div className="item">{operacao.data} </div>
      <div className="item"><strong>{operacao.papel}</strong></div>
      <div className="item">
        <NumberFormat 
          value={operacao.preco} 
          displayType={'text'} 
          decimalSeparator={','}
          thousandSeparator={'.'} 
          decimalScale={2}
          fixedDecimalScale={true}
          prefix={'R$'} />
      </div>
      <div className="item">
        <NumberFormat 
          value={operacao.quantidade}
          displayType={'text'} 
          decimalSeparator={','}
          thousandSeparator={'.'} 
          decimalScale={0}
          fixedDecimalScale={true}
          prefix={''} />
      </div>
      <div className="item">
        <NumberFormat 
          value={operacao.subtotal} 
          displayType={'text'} 
          decimalSeparator={','}
          thousandSeparator={'.'} 
          decimalScale={2}
          fixedDecimalScale={true}
          prefix={'R$'} />
      </div>
      <div className="item">
        <NumberFormat 
          value={operacao.corretagem} 
          displayType={'text'} 
          decimalSeparator={','}
          thousandSeparator={'.'} 
          decimalScale={2}
          fixedDecimalScale={true}
          prefix={'R$'} />
      </div>
      <div className="item">
        <NumberFormat 
          value={operacao.ir} 
          displayType={'text'} 
          decimalSeparator={','}
          thousandSeparator={'.'} 
          decimalScale={2}
          fixedDecimalScale={true}
          prefix={'R$'} />
      </div>
      <div className="item">
        <NumberFormat 
          value={operacao.total} 
          displayType={'text'} 
          decimalSeparator={','}
          thousandSeparator={'.'} 
          decimalScale={2}
          fixedDecimalScale={true}
          prefix={'R$'} />
      </div>
      <div className="item">
        <a href="#" onClick={ handleClick } >Delete</a>
      </div>
    </li>
  );
}

export default OperacaoItem;
