import React, { useState, useEffect } from 'react';
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
        <table className="darf-table">
          <thead>
            <tr>
              <td rowSpan='2' ><strong>Mês Ref.</strong></td>
              <td rowSpan='2' ><strong>Mês<br />Pagamento</strong></td>
              <td colSpan='5' ><strong>Normal</strong></td>
              <td colSpan='5' ><strong>Daytrade</strong></td>
              <td colSpan='5' ><strong>FIIs</strong></td>
              <td rowSpan='2' ><strong>Total Devido</strong></td>
            </tr>
            <tr>
              <td ><strong>Lucro</strong></td>
              <td ><strong>Saldo</strong></td>
              <td ><strong>IR Pago</strong></td>
              <td ><strong>IR Saldo</strong></td>
              <td ><strong>Subtotal</strong></td>
              <td ><strong>Lucro</strong></td>
              <td ><strong>Saldo</strong></td>
              <td ><strong>IR Pago</strong></td>
              <td ><strong>IR Saldo</strong></td>
              <td ><strong>Subtotal</strong></td>
              <td ><strong>Lucro</strong></td>
              <td ><strong>Saldo</strong></td>
              <td ><strong>IR Pago</strong></td>
              <td ><strong>IR Saldo</strong></td>
              <td ><strong>Subtotal</strong></td>
            </tr>
          </thead>
          
          <tbody>
            {darfs.map(darf => (
              <DarfItem key={darf.mesRef} darf={darf} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}