import React from 'react';
import NumberFormat from 'react-number-format';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

function OperacaoIr({ operacaoIr }) {

  return (
    <React.Fragment>
      <TableRow>
        <TableCell>{operacaoIr.data}</TableCell>
        <TableCell>{operacaoIr.papel}</TableCell>
        <TableCell className='alingRight valor'>
          <NumberFormat 
            value={operacaoIr.ir} 
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

export default OperacaoIr;