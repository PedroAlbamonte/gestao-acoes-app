import React, { useState, useEffect } from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import DarfItem from '../../components/DarfItem';
import api from '../../services/api';

import './styles.css';

export default function Darf() {
  const [darfs, setDarfs] = useState([]);

  useEffect(() => {
    async function loadDarfs() {
      const response = await api.get('/darfs');

      setDarfs(response.data);
    }

    loadDarfs();
  }, []);

  return (
    <div className="register-container">
      <div className="content">
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table" className="darf-table">
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
                <TableCell align="center"><strong>Lucro</strong></TableCell>
                <TableCell align="center"><strong>Lucro</strong></TableCell>
                <TableCell align="center"><strong>Saldo</strong></TableCell>
                <TableCell align="center"><strong>IR</strong></TableCell>
                <TableCell align="center"><strong>Lucro</strong></TableCell>
                <TableCell align="center"><strong>Saldo</strong></TableCell>
                <TableCell align="center"><strong>IR</strong></TableCell>
                <TableCell align="center"><strong>Lucro</strong></TableCell>
                <TableCell align="center"><strong>Saldo</strong></TableCell>
                <TableCell align="center"><strong>IR</strong></TableCell>
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