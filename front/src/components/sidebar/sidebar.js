import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './sidebar.css';

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <ul>
        <li className={`menu-item ${location.pathname === '/calendario' ? 'active' : ''}`}>
          <Link to="/calendario">Calendário</Link>
        </li>
        <li className={`menu-item ${location.pathname === '/caixa' ? 'active' : ''}`}>
          <Link to="/caixa">Caixa</Link>
        </li>
        <li className={`menu-item ${location.pathname === '/acesso' ? 'active' : ''}`}>
          <Link to="/acesso">Acesso</Link>
        </li>
        <li className={`menu-item ${location.pathname === '/configuracoes' ? 'active' : ''}`}>
          <Link to="/configuracoes">Configurações</Link>
        </li>
        <li className={`menu-item ${location.pathname === '/agendafuncionario' ? 'active' : ''}`}>
          <Link to="/agendafuncionario">Agenda do Funcionaário</Link>
        </li>
        <li className={`menu-item ${location.pathname === '/analytics' ? 'active' : ''}`}>
          <Link to="/analytics">Analytics</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

