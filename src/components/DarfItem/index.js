import React from 'react';
import NumberFormat from 'react-number-format';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import OperacaoIr from '../OperacaoIr';
import DarfOperacaoItem from '../DarfOperacaoItem';

function DarfItem({ darf }) {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell scope="row"><strong>{darf.mesRef} </strong></TableCell>
      
        <TableCell ><strong>{darf.mesPagamento} </strong></TableCell>
        

        <TableCell className={`alingRight valor ${darf.opcoes.lucro < 0 ? "negativo" : ""}`}>
          <NumberFormat 
            value={darf.opcoes.lucro} 
            displayType={'text'} 
            decimalSeparator={','}
            thousandSeparator={'.'} 
            decimalScale={2}
            fixedDecimalScale={true}
            prefix={'R$'} />
        </TableCell>

        <TableCell className={`alingRight valor ${darf.normal.lucro < 0 ? "negativo" : ""}`}>
          <NumberFormat 
            value={darf.normal.lucro} 
            displayType={'text'} 
            decimalSeparator={','}
            thousandSeparator={'.'} 
            decimalScale={2}
            fixedDecimalScale={true}
            prefix={'R$'} />
        </TableCell>
        <TableCell className={`alingRight valor ${darf.normal.saldo < 0 ? "negativo" : ""}`}>
          <NumberFormat 
            value={darf.normal.saldo} 
            displayType={'text'} 
            decimalSeparator={','}
            thousandSeparator={'.'} 
            decimalScale={2}
            fixedDecimalScale={true}
            prefix={'R$'} />
        </TableCell>
        <TableCell className={`alingRight valor ${darf.normal.valor < 0 ? "negativo" : ""}`}>
          <NumberFormat 
            value={darf.normal.valor} 
            displayType={'text'} 
            decimalSeparator={','}
            thousandSeparator={'.'} 
            decimalScale={2}
            fixedDecimalScale={true}
            prefix={'R$'} />
        </TableCell>

        <TableCell className={`alingRight valor ${darf.daytrade.lucro < 0 ? "negativo" : ""}`}>
          <NumberFormat 
            value={darf.daytrade.lucro} 
            displayType={'text'} 
            decimalSeparator={','}
            thousandSeparator={'.'} 
            decimalScale={2}
            fixedDecimalScale={true}
            prefix={'R$'} />
        </TableCell>
        <TableCell className={`alingRight valor ${darf.daytrade.saldo < 0 ? "negativo" : ""}`}>
          <NumberFormat 
            value={darf.daytrade.saldo} 
            displayType={'text'} 
            decimalSeparator={','}
            thousandSeparator={'.'} 
            decimalScale={2}
            fixedDecimalScale={true}
            prefix={'R$'} />
        </TableCell>
        <TableCell className={`alingRight valor ${darf.daytrade.valor < 0 ? "negativo" : ""}`}>
          <NumberFormat 
            value={darf.daytrade.valor} 
            displayType={'text'} 
            decimalSeparator={','}
            thousandSeparator={'.'} 
            decimalScale={2}
            fixedDecimalScale={true}
            prefix={'R$'} />
        </TableCell>
        
        <TableCell className={`alingRight valor ${darf.fii.lucro < 0 ? "negativo" : ""}`}>
          <NumberFormat 
            value={darf.fii.lucro} 
            displayType={'text'} 
            decimalSeparator={','}
            thousandSeparator={'.'} 
            decimalScale={2}
            fixedDecimalScale={true}
            prefix={'R$'} />
        </TableCell>
        <TableCell className={`alingRight valor ${darf.fii.saldo < 0 ? "negativo" : ""}`}>
          <NumberFormat 
            value={darf.fii.saldo} 
            displayType={'text'} 
            decimalSeparator={','}
            thousandSeparator={'.'} 
            decimalScale={2}
            fixedDecimalScale={true}
            prefix={'R$'} />
        </TableCell>
        <TableCell className={`alingRight valor ${darf.fii.valor < 0 ? "negativo" : ""}`}>
          <NumberFormat 
            value={darf.fii.valor} 
            displayType={'text'} 
            decimalSeparator={','}
            thousandSeparator={'.'} 
            decimalScale={2}
            fixedDecimalScale={true}
            prefix={'R$'} />
        </TableCell>

        <TableCell className={`alingRight valor ${darf.ir.pago < 0 ? "negativo" : ""}`}>
          <NumberFormat 
            value={darf.ir.pago} 
            displayType={'text'} 
            decimalSeparator={','}
            thousandSeparator={'.'} 
            decimalScale={2}
            fixedDecimalScale={true}
            prefix={'R$'} />
        </TableCell>
        <TableCell className={`alingRight valor ${darf.ir.saldo < 0 ? "negativo" : ""}`}>
          <NumberFormat 
            value={darf.ir.saldo} 
            displayType={'text'} 
            decimalSeparator={','}
            thousandSeparator={'.'} 
            decimalScale={2}
            fixedDecimalScale={true}
            prefix={'R$'} />
        </TableCell>
        <TableCell className={`alingRight valor ${darf.valorDevido < 0 ? "negativo" : ""}`}>
          <NumberFormat 
            value={darf.valorDevido} 
            displayType={'text'} 
            decimalSeparator={','}
            thousandSeparator={'.'} 
            decimalScale={2}
            fixedDecimalScale={true}
            prefix={'R$'} />
        </TableCell>
    
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0, verticalAlign: 'top' }} colSpan={20}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h4" gutterBottom component="div" align="left">
                Operações
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableBody>
                  <TableRow>
                    <TableCell style={{ verticalAlign: 'top' }}>
                      <Typography variant="h6" gutterBottom component="div">
                        Normal
                      </Typography>
                      <Table size="small" aria-label="purchases" className="darf-operacao-table">
                      <TableHead>
                          <TableRow>
                            <TableCell>Data</TableCell>
                            <TableCell>Papel</TableCell>
                            <TableCell>Operação</TableCell>
                            <TableCell>Quantidade</TableCell>
                            <TableCell>Valor Compra</TableCell>
                            <TableCell>Valor Venda</TableCell>
                            <TableCell>Lucro</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {darf.normal.operacoes.map(operacao => (
                            <DarfOperacaoItem key={operacao.data+operacao.papel} operacao={operacao} />
                          ))}
                        </TableBody>
                      </Table>
                    </TableCell>

                    <TableCell style={{ verticalAlign: 'top' }}>
                      <Typography variant="h6" gutterBottom component="div">
                        Opções
                      </Typography>
                      <Table size="small" aria-label="purchases" className="darf-operacao-table">
                      <TableHead>
                          <TableRow>
                            <TableCell>Data</TableCell>
                            <TableCell>Papel</TableCell>
                            <TableCell>Operação</TableCell>
                            <TableCell>Quantidade</TableCell>
                            <TableCell>Valor Compra</TableCell>
                            <TableCell>Valor Venda</TableCell>
                            <TableCell>Lucro</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {darf.opcoes.operacoes.map(operacao => (
                            <DarfOperacaoItem key={operacao.data+operacao.papel} operacao={operacao} />
                          ))}
                        </TableBody>
                      </Table>
                    </TableCell>

                    <TableCell style={{ verticalAlign: 'top' }}>
                      <Typography variant="h6" gutterBottom component="div">
                        Daytrade
                      </Typography>
                      <Table size="small" aria-label="purchases" className="darf-operacao-table">
                      <TableHead>
                          <TableRow>
                            <TableCell>Data</TableCell>
                            <TableCell>Papel</TableCell>
                            <TableCell>Operação</TableCell>
                            <TableCell>Quantidade</TableCell>
                            <TableCell>Valor Compra</TableCell>
                            <TableCell>Valor Venda</TableCell>
                            <TableCell>Lucro</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {darf.daytrade.operacoes.map(operacao => (
                            <DarfOperacaoItem key={operacao.data+operacao.papel} operacao={operacao} />
                          ))}
                        </TableBody>
                      </Table>
                    </TableCell>

                    <TableCell style={{ verticalAlign: 'top' }}>
                      <Typography variant="h6" gutterBottom component="div">
                        FIIs
                      </Typography>
                      <Table size="small" aria-label="purchases" className="darf-operacao-table">
                        <TableHead>
                          <TableRow>
                            <TableCell>Data</TableCell>
                            <TableCell>Papel</TableCell>
                            <TableCell>Operação</TableCell>
                            <TableCell>Quantidade</TableCell>
                            <TableCell>Valor Compra</TableCell>
                            <TableCell>Valor Venda</TableCell>
                            <TableCell>Lucro</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {darf.fii.operacoes.map(operacao => (
                            <DarfOperacaoItem key={operacao.data+operacao.papel} operacao={operacao} />
                          ))}
                        </TableBody>
                      </Table>
                    </TableCell>

                    <TableCell style={{ verticalAlign: 'top' }}>
                      <Typography variant="h6" gutterBottom component="div">
                        IR
                      </Typography>
                      <Table size="small" aria-label="purchases" className="darf-operacao-table">
                        <TableHead>
                          <TableRow>
                            <TableCell>Data</TableCell>
                            <TableCell>Papel</TableCell>
                            <TableCell>IR Pago</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {darf.ir.operacoes.map(operacaoIr => (
                            <OperacaoIr key={operacaoIr.data+operacaoIr.papel} operacaoIr={operacaoIr} />
                          ))}
                        </TableBody>
                      </Table>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default DarfItem;
