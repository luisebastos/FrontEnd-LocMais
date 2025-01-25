import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './topbar.css'; 
import usuarios from "../../image/usuarios.png";
import aluguel from "../../image/aluguel.png";
import clientes from "../../image/clientes.png";
import contratos from "../../image/contratos.png";
import orcamentos from "../../image/orcamentos.png";
import produtos from "../../image/produtos.png";
import gprodutos from "../../image/gproduto.png";
import estoque from "../../image/estoque.png";
import fornecedores from "../../image/fornecedores.png";

const Topbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="topbar">
      <ul>
        <li className={`topbar-menu-item ${location.pathname === '/usuarios' ? 'active' : ''}`}>
          <button onClick={() => handleNavigation('/usuarios')}>
            <img src={usuarios} alt="Usuários" className="topbar-icon" /> Usuários
          </button>
        </li>
        <li className={`topbar-menu-item ${location.pathname === '/aluguel' ? 'active' : ''}`}>
          <button onClick={() => handleNavigation('/aluguel')}>
            <img src={aluguel} alt="Aluguel" className="topbar-icon" /> Aluguel
          </button>
        </li>
        <li className={`topbar-menu-item ${location.pathname === '/clientes' ? 'active' : ''}`}>
          <button onClick={() => handleNavigation('/clientes')}>
            <img src={clientes} alt="Clientes" className="topbar-icon" /> Clientes
          </button>
        </li>
        <li className={`topbar-menu-item ${location.pathname === '/contratos' ? 'active' : ''}`}>
          <button onClick={() => handleNavigation('/contratos')}>
            <img src={contratos} alt="Contratos" className="topbar-icon" /> Contratos
          </button>
        </li>
        <li className={`topbar-menu-item ${location.pathname === '/orcamentos' ? 'active' : ''}`}>
          <button onClick={() => handleNavigation('/orcamentos')}>
            <img src={orcamentos} alt="Orçamentos" className="topbar-icon" /> Orçamentos
          </button>
        </li>
        <li className={`topbar-menu-item ${location.pathname === '/produtos' ? 'active' : ''}`}>
          <button onClick={() => handleNavigation('/produtos')}>
            <img src={produtos} alt="Produtos" className="topbar-icon" /> Produtos
          </button>
        </li>
        <li className={`topbar-menu-item ${location.pathname === '/gprodutos' ? 'active' : ''}`}>
          <button onClick={() => handleNavigation('/gprodutos')}>
            <img src={gprodutos} alt="Grupo de Produtos" className="topbar-icon" /> Grupo de Produtos
          </button>
        </li>
        <li className={`topbar-menu-item ${location.pathname === '/estoque' ? 'active' : ''}`}>
          <button onClick={() => handleNavigation('/estoque')}>
            <img src={estoque} alt="Estoque" className="topbar-icon" /> Estoque
          </button>
        </li>
        <li className={`topbar-menu-item ${location.pathname === '/fornecedores' ? 'active' : ''}`}>
          <button onClick={() => handleNavigation('/fornecedores')}>
            <img src={fornecedores} alt="Fornecedores" className="topbar-icon" /> Fornecedores
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Topbar;
