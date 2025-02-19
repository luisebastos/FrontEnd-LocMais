import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './sidebar.css';
import back from '../../image/voltar.png';  
import exit from '../../image/sair.png';
import home from '../../image/home.png'; 

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="sidebar">
      <ul>
        <li className={`menu-item ${location.pathname === '/calendario' ? 'active' : ''}`}>
          <button onClick={() => handleNavigation('/calendario')}>Calendário</button>
        </li>
        <li className={`menu-item ${location.pathname === '/caixa' ? 'active' : ''}`}>
          <button onClick={() => handleNavigation('/caixa')}>Caixa</button>
        </li>
        <li className={`menu-item ${location.pathname === '/acesso' ? 'active' : ''}`}>
          <button onClick={() => handleNavigation('/acesso')}>Acesso</button>
        </li>
        <li className={`menu-item ${location.pathname === '/configuracoes' ? 'active' : ''}`}>
          <button onClick={() => handleNavigation('/configuracoes')}>Configurações</button>
        </li>
        <li className={`menu-item ${location.pathname === '/agenda' ? 'active' : ''}`}>
          <button onClick={() => handleNavigation('/agenda')}>Agenda dos Funcionários</button>
        </li>
        <li className={`menu-item ${location.pathname === '/analytics' ? 'active' : ''}`}>
          <button onClick={() => handleNavigation('/analytics')}>Analytics</button>
        </li>
        <div className="special-container"> {/* container para voltar e sair ja q vao ficar longe dos outros */}
        <li className={`menu-item ${location.pathname === '/' ? 'active' : ''}`}>
            <button onClick={() => handleNavigation('/home')} className="icon-button">
              <img src={home} alt="home" className="icon" /> Home
            </button>
          </li>
          <li className={`menu-item ${location.pathname === '/voltar' ? 'active' : ''}`}>
            <button onClick={() => navigate(-1)} className="icon-button">
              <img src={back} alt="back" className="icon" /> Voltar
            </button>
          </li>
          <li className={`menu-item ${location.pathname === '/' ? 'active' : ''}`}>
            <button onClick={() => handleNavigation('/')} className="icon-button">
              <img src={exit} alt="exit" className="icon" /> Sair
            </button>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
