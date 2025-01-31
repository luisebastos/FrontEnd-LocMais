import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../sidebar/sidebar';
import Topbar from '../topbar/topbar';
import './usuarios.css'; 
import usuariosData from '../../data_teste/usuarios.json'; 

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    setUsuarios(usuariosData);
  }, []);

  return (
    <div className="usuarios-page">
      <Topbar />
      <div className="main-content">
        <Sidebar />
        <div className="content-container">
          <div className="usuarios-content">
            <h2 className="usuarios-message">Usuários</h2>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nome</th>
                  <th>Data de Cadastro</th>
                  <th>CPF</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {usuarios.map(usuario => (
                  <tr key={usuario.id}>
                    <td>{usuario.id}</td>
                    <td>{usuario.nome}</td>
                    <td>{usuario.dataCadastro}</td>
                    <td>{usuario.cpf}</td>
                    <td><Link to={`/usuario/${usuario.id}`}>Ver Mais</Link></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="btn-cadastrar">
            <Link to="/usuarios/cadastro" className="link-cadastrar">Cadastrar</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usuarios;

// teste teste //