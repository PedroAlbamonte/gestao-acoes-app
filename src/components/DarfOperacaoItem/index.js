import React from 'react';
import NumberFormat from 'react-number-format';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

function DarfOperacaoItem({ operacao }) {

  return (
    <React.Fragment>
      <TableRow>
        <TableCell>{operacao.data}</TableCell>
        <TableCell>{operacao.papel}</TableCell>
        <TableCell>{operacao.tipo}</TableCell>
        <TableCell className='alingRight valor'>
          <NumberFormat 
            value={operacao.quantidade} 
            displayType={'text'} 
            decimalSeparator={','}
            thousandSeparator={'.'} 
            decimalScale={0}
            fixedDecimalScale={true} />
        </TableCell>
        <TableCell className='alingRight valor'>
          <NumberFormat 
            value={operacao.valorCompra} 
            displayType={'text'} 
            decimalSeparator={','}
            thousandSeparator={'.'} 
            decimalScale={4}
            fixedDecimalScale={true}
            prefix={'R$'} />
        </TableCell>
        <TableCell className='alingRight valor'>
          <NumberFormat 
            value={operacao.valorVenda} 
            displayType={'text'} 
            decimalSeparator={','}
            thousandSeparator={'.'} 
            decimalScale={4}
            fixedDecimalScale={true}
            prefix={'R$'} />
        </TableCell>
        <TableCell className='alingRight valor'>
          <NumberFormat 
            value={operacao.lucro} 
            displayType={'text'} 
            decimalSeparator={','}
            thousandSeparator={'.'} 
            decimalScale={2}
            fixedDecimalScale={true}
            prefix={'R$'} />
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default DarfOperacaoItem;