import React from 'react';
import NumberFormat from 'react-number-format';

function OperacaoItem({ darf }) {
  return (
    <tr>
      <td ><strong>{darf.mesRef} </strong></td>
      <td ><strong>{darf.mesPagamento} </strong></td>
      
      <td className='alingRight valor'>
        <NumberFormat 
          value={darf.normal.lucro} 
          displayType={'text'} 
          decimalSeparator={','}
          thousandSeparator={'.'} 
          decimalScale={2}
          fixedDecimalScale={true}
          prefix={'R$'} />
      </td>
      <td className='alingRight valor'>
        <NumberFormat 
          value={darf.normal.saldo} 
          displayType={'text'} 
          decimalSeparator={','}
          thousandSeparator={'.'} 
          decimalScale={2}
          fixedDecimalScale={true}
          prefix={'R$'} />
      </td>
      <td className='alingRight valor'>
        <NumberFormat 
          value={darf.normal.irPago} 
          displayType={'text'} 
          decimalSeparator={','}
          thousandSeparator={'.'} 
          decimalScale={2}
          fixedDecimalScale={true}
          prefix={'R$'} />
      </td>
      <td className='alingRight valor'>
        <NumberFormat 
          value={darf.normal.irSaldo} 
          displayType={'text'} 
          decimalSeparator={','}
          thousandSeparator={'.'} 
          decimalScale={2}
          fixedDecimalScale={true}
          prefix={'R$'} />
      </td>
      <td className='alingRight valor'>
        <NumberFormat 
          value={darf.normal.valor} 
          displayType={'text'} 
          decimalSeparator={','}
          thousandSeparator={'.'} 
          decimalScale={2}
          fixedDecimalScale={true}
          prefix={'R$'} />
      </td>

      <td className='alingRight valor'>
        <NumberFormat 
          value={darf.daytrade.lucro} 
          displayType={'text'} 
          decimalSeparator={','}
          thousandSeparator={'.'} 
          decimalScale={2}
          fixedDecimalScale={true}
          prefix={'R$'} />
      </td>
      <td className='alingRight valor'>
        <NumberFormat 
          value={darf.daytrade.saldo} 
          displayType={'text'} 
          decimalSeparator={','}
          thousandSeparator={'.'} 
          decimalScale={2}
          fixedDecimalScale={true}
          prefix={'R$'} />
      </td>
      <td className='alingRight valor'>
        <NumberFormat 
          value={darf.daytrade.irPago} 
          displayType={'text'} 
          decimalSeparator={','}
          thousandSeparator={'.'} 
          decimalScale={2}
          fixedDecimalScale={true}
          prefix={'R$'} />
      </td>
      <td className='alingRight valor'>
        <NumberFormat 
          value={darf.daytrade.irSaldo} 
          displayType={'text'} 
          decimalSeparator={','}
          thousandSeparator={'.'} 
          decimalScale={2}
          fixedDecimalScale={true}
          prefix={'R$'} />
      </td>
      <td className='alingRight valor'>
        <NumberFormat 
          value={darf.daytrade.valor} 
          displayType={'text'} 
          decimalSeparator={','}
          thousandSeparator={'.'} 
          decimalScale={2}
          fixedDecimalScale={true}
          prefix={'R$'} />
      </td>
      
      <td className='alingRight valor'>
        <NumberFormat 
          value={darf.fii.lucro} 
          displayType={'text'} 
          decimalSeparator={','}
          thousandSeparator={'.'} 
          decimalScale={2}
          fixedDecimalScale={true}
          prefix={'R$'} />
      </td>
      <td className='alingRight valor'>
        <NumberFormat 
          value={darf.fii.saldo} 
          displayType={'text'} 
          decimalSeparator={','}
          thousandSeparator={'.'} 
          decimalScale={2}
          fixedDecimalScale={true}
          prefix={'R$'} />
      </td>
      <td className='alingRight valor'>
        <NumberFormat 
          value={darf.fii.irPago} 
          displayType={'text'} 
          decimalSeparator={','}
          thousandSeparator={'.'} 
          decimalScale={2}
          fixedDecimalScale={true}
          prefix={'R$'} />
      </td>
      <td className='alingRight valor'>
        <NumberFormat 
          value={darf.fii.irSaldo} 
          displayType={'text'} 
          decimalSeparator={','}
          thousandSeparator={'.'} 
          decimalScale={2}
          fixedDecimalScale={true}
          prefix={'R$'} />
      </td>
      <td className='alingRight valor'>
        <NumberFormat 
          value={darf.fii.valor} 
          displayType={'text'} 
          decimalSeparator={','}
          thousandSeparator={'.'} 
          decimalScale={2}
          fixedDecimalScale={true}
          prefix={'R$'} />
      </td>

      <td className='alingRight valor'>
        <NumberFormat 
          value={darf.valorDevido} 
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

export default OperacaoItem;
