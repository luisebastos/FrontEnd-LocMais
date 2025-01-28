import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Sidebar from '../sidebar/sidebar';
import Topbar from '../topbar/topbar';
import './usuario_id.css'; 
import usuariosData from '../../data_teste/usuarios.json';

const Usuario_id = () => {
  const { id } = useParams(); // Captura o ID do URL
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const usuarioEncontrado = usuariosData.find(user => user.id === id);
    setUsuario(usuarioEncontrado);
  }, [id]);

  return (
    <div className="usuarioid-page">
      <Topbar />
      <div className="main-content">
        <Sidebar />
        <div className="content-container">
          <div className="usuarioid-content">
            {usuario ? (
              <>
                <h2 className="usuarioid-message">Usuário: {usuario.nome}</h2>
                <table className="usuario-details-table">
                  <tbody>
                    {Object.entries(usuario).map(([key, value]) => (
                      key !== 'id' && <tr key={key}>
                        <th>{key.charAt(0).toUpperCase() + key.slice(1)}</th>
                        <td>{value.toString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <Link to={`/usuarios/editar/${usuario.id}`} className="edit-button">Editar</Link>
              </>
            ) : (
              <p>Usuário não encontrado</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usuario_id;

