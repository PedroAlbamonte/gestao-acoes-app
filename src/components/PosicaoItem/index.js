import React from 'react';
import NumberFormat from 'react-number-format';

function PosicaoItem({ acao }) {
  return (
    <tr>
      <td><strong>{acao.nome} </strong></td>
      <td>
        <NumberFormat 
          value={acao.quantidade}
          displayType={'text'} 
          decimalSeparator={','}
          thousandSeparator={'.'} 
          decimalScale={0}
          fixedDecimalScale={true}
          prefix={''} />
      </td>
      <td>
        <NumberFormat 
          value={acao.preco} 
          displayType={'text'} 
          decimalSeparator={','}
          thousandSeparator={'.'} 
          decimalScale={2}
          fixedDecimalScale={true}
          prefix={'R$'} />
      </td>
      <td>
        <NumberFormat 
          value={acao.cotacao} 
          displayType={'text'} 
          decimalSeparator={','}
          thousandSeparator={'.'} 
          decimalScale={2}
          fixedDecimalScale={true}
          prefix={'R$'} />
      </td>
      <td>
        <NumberFormat 
          value={(acao.cotacao * acao.quantidade) - (acao.quantidade*acao.preco) } 
          displayType={'text'} 
          decimalSeparator={','}
          thousandSeparator={'.'} 
          decimalScale={2}
          fixedDecimalScale={true}
          prefix={'R$'} />
      </td>
      <td>
        <NumberFormat 
          value={acao.precoAno} 
          displayType={'text'} 
          decimalSeparator={','}
          thousandSeparator={'.'} 
          decimalScale={2}
          fixedDecimalScale={true}
          prefix={'R$'} />
      </td>
      <td>
        <NumberFormat 
          value={(acao.cotacao * acao.quantidade) - (acao.quantidade*acao.precoAno) } 
          displayType={'text'} 
          decimalSeparator={','}
          thousandSeparator={'.'} 
          decimalScale={2}
          fixedDecimalScale={true}
          prefix={'R$'} />
      </td>
    </tr>
  );
}

export default PosicaoItem;
