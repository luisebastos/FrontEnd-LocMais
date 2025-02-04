// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Sidebar from '../sidebar/sidebar';
// import Topbar from '../topbar/topbar';
// import './usuarios.css'; 
// import usuariosData from '../../data_teste/usuarios.json'; 

// const allColumns = [
//   { key: "id", label: "ID" },
//   { key: "nome", label: "Nome" },
//   { key: "dataCadastro", label: "Data de Cadastro" },
//   { key: "cpf", label: "CPF" },
//   { key: "dataNascimento", label: "Data de Nascimento" },
//   { key: "login", label: "Login" },
//   { key: "email", label: "Email" },
//   { key: "celular", label: "Celular" },
//   { key: "status", label: "Status" },
//   { key: "role", label: "Papel" }
// ];

// const Usuarios = () => {
//   const [usuarios, setUsuarios] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedColumns, setSelectedColumns] = useState(["id", "nome", "dataCadastro", "cpf"]);

//   useEffect(() => {
//     setUsuarios(usuariosData);
//   }, []);

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleColumnChange = (e) => {
//     const value = e.target.value;
//     setSelectedColumns(prev =>
//       prev.includes(value) ? prev.filter(col => col !== value) : [...prev, value]
//     );
//   };

//   const filteredUsuarios = usuarios.filter(usuario => {
//     const idMatch = usuario.id.toString().includes(searchTerm.toLowerCase());
//     const nomeMatch = usuario.nome.toLowerCase().includes(searchTerm.toLowerCase());
//     const cpfMatch = usuario.cpf.replace(/\D/g, "").includes(searchTerm.replace(/\D/g, ""));

//     return idMatch || nomeMatch || cpfMatch;
//   });

//   return (
//     <div className="usuarios-page">
//       <Topbar />
//       <div className="main-content">
//         <Sidebar />
//         <div className="content-container">
//           <div className="usuarios-content">
//             <h2 className="usuarios-message">Usuários</h2>

//             {/* Barra de pesquisa */}
//             <input
//               type="text"
//               placeholder="Buscar por ID, Nome ou CPF..."
//               value={searchTerm}
//               onChange={handleSearch}
//               className="search-bar"
//             />

//             {/* Select para escolher colunas */}
//             <div className="column-selector">
//               <label>Selecionar colunas:</label>
//               {allColumns.map(column => (
//                 <div key={column.key} className="checkbox-container">
//                   <input
//                     type="checkbox"
//                     value={column.key}
//                     checked={selectedColumns.includes(column.key)}
//                     onChange={handleColumnChange}
//                   />
//                   <span>{column.label}</span>
//                 </div>
//               ))}
//             </div>

//             <table>
//               <thead>
//                 <tr>
//                   {selectedColumns.map(colKey => (
//                     <th key={colKey}>{allColumns.find(col => col.key === colKey).label}</th>
//                   ))}
//                   <th>Ações</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredUsuarios.map(usuario => (
//                   <tr key={usuario.id}>
//                     {selectedColumns.map(colKey => (
//                       <td key={colKey}>{usuario[colKey]}</td>
//                     ))}
//                     <td><Link to={`/usuario/${usuario.id}`}>Ver Mais</Link></td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>

//             <button className="btn-cadastrar">
//               <Link to="/usuarios/cadastro" className="link-cadastrar">Cadastrar</Link>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Usuarios;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../sidebar/sidebar';
import Topbar from '../topbar/topbar';
import './usuarios.css'; 
import usuariosData from '../../data_teste/usuarios.json'; 

const allColumns = [
  { key: "id", label: "ID" },
  { key: "nome", label: "Nome" },
  { key: "dataCadastro", label: "Data de Cadastro" },
  { key: "cpf", label: "CPF" },
  { key: "dataNascimento", label: "Data de Nascimento" },
  { key: "login", label: "Login" },
  { key: "email", label: "Email" },
  { key: "celular", label: "Celular" },
  { key: "status", label: "Status" },
  { key: "role", label: "Papel" }
];

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedColumns, setSelectedColumns] = useState(["id", "nome", "dataCadastro", "cpf"]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    setUsuarios(usuariosData);
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleColumnChange = (e) => {
    const value = e.target.value;
    setSelectedColumns(prev =>
      prev.includes(value) ? prev.filter(col => col !== value) : [...prev, value]
    );
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const filteredUsuarios = usuarios.filter(usuario => {
    const idMatch = usuario.id.toString().includes(searchTerm.toLowerCase());
    const nomeMatch = usuario.nome.toLowerCase().includes(searchTerm.toLowerCase());
    const cpfMatch = usuario.cpf.replace(/\D/g, "").includes(searchTerm.replace(/\D/g, ""));
    return idMatch || nomeMatch || cpfMatch;
  });

  return (
    <div className="usuarios-page">
      <Topbar />
      <div className="main-content">
        <Sidebar />
        <div className="content-container">
          <div className="usuarios-content">
            <h2 className="usuarios-message">Usuários</h2>

            {/* Barra de pesquisa */}
            <input
              type="text"
              placeholder="Buscar por ID, Nome ou CPF..."
              value={searchTerm}
              onChange={handleSearch}
              className="search-bar"
            />

            {/* Botão para abrir o dropdown */}
            <div className="dropdown">
              <button className="dropdown-button" onClick={toggleDropdown}>
                Gerenciar Colunas ⬇
              </button>
              {isDropdownOpen && (
                <div className="dropdown-menu">
                  {allColumns.map(column => (
                    <label key={column.key} className="dropdown-item">
                      <input
                        type="checkbox"
                        value={column.key}
                        checked={selectedColumns.includes(column.key)}
                        onChange={handleColumnChange}
                      />
                      {column.label}
                    </label>
                  ))}
                </div>
              )}
            </div>

            <table>
              <thead>
                <tr>
                  {selectedColumns.map(colKey => (
                    <th key={colKey}>{allColumns.find(col => col.key === colKey).label}</th>
                  ))}
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsuarios.map(usuario => (
                  <tr key={usuario.id}>
                    {selectedColumns.map(colKey => (
                      <td key={colKey}>{usuario[colKey]}</td>
                    ))}
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
