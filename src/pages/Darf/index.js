import React, { useState, useEffect } from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from "@material-ui/core/styles";
import DarfItem from '../../components/DarfItem';
import api from '../../services/api';

import './styles.css';

const useStyles = makeStyles({
  container: {
    maxHeight: 700
  }
});

export default function Darf() {
  const [darfs, setDarfs] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    async function loadDarfs() {
      const response = await api.get('/darfs');

      setDarfs(response.data);
    }

    loadDarfs();
  }, []);

  return (
    <div className="register-container">
      <div className="content" id="id-content">
        <TableContainer component={Paper} className={classes.container}>
          <Table aria-label="collapsible table" className="darf-table" stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell rowSpan={2} />
                <TableCell rowSpan={2} align="center"><strong>Mês Ref.</strong></TableCell>
                <TableCell rowSpan={2} align="center"><strong>Mês<br />Pagamento</strong></TableCell>
                <TableCell align="center"><strong>Opções</strong></TableCell>
                <TableCell colSpan={3} align="center"><strong>Normal</strong></TableCell>
                <TableCell colSpan={3} align="center"><strong>Daytrade</strong></TableCell>
                <TableCell colSpan={3} align="center"><strong>FIIs</strong></TableCell>
                <TableCell rowSpan={2} align="center"><strong>IR Pago</strong></TableCell>
                <TableCell rowSpan={2} align="center"><strong>IR Saldo</strong></TableCell>
                <TableCell rowSpan={2} align="center"><strong>Total Devido</strong></TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" style={{ top: 58 }}><strong>Lucro</strong></TableCell>
                <TableCell align="center" style={{ top: 58 }}><strong>Lucro</strong></TableCell>
                <TableCell align="center" style={{ top: 58 }}><strong>Saldo</strong></TableCell>
                <TableCell align="center" style={{ top: 58 }}><strong>IR</strong></TableCell>
                <TableCell align="center" style={{ top: 58 }}><strong>Lucro</strong></TableCell>
                <TableCell align="center" style={{ top: 58 }}><strong>Saldo</strong></TableCell>
                <TableCell align="center" style={{ top: 58 }}><strong>IR</strong></TableCell>
                <TableCell align="center" style={{ top: 58 }}><strong>Lucro</strong></TableCell>
                <TableCell align="center" style={{ top: 58 }}><strong>Saldo</strong></TableCell>
                <TableCell align="center" style={{ top: 58 }}><strong>IR</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {darfs.map(darf => (
                <DarfItem key={darf.mesRef} darf={darf} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}