import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login/login';
import Home from './components/home/home'
import Calendario from './components/calendario/calendario'
import Acesso from './components/acesso/acesso'
import Clientes from './components/clientes/clientes';
import Configuracoes from './components/configuracoes/configuracoes';
import Contratos from './components/contratos/contratos';
import Estoque from './components/estoque/estoque';
import Fornecedores from './components/fornecedores/fornecedores';
import GProdutos from './components/gprodutos/gprodutos';
import Caixa from './components/caixa/caixa';
import Agenda from './components/agenda/agenda';
import Produtos from './components/produtos/produtos';
import Aluguel from './components/aluguel/aluguel';
import Analytics from './components/analytics/analytics';
import Usuarios from './components/usuarios/usuarios';
import Orcamentos from './components/orcamentos/orcamentos';
import Usuario_id from './components/usuarios/usuario_id'; 

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="home" element={<Home />} />
      <Route path="calendario" element={<Calendario />} />
      <Route path="acesso" element={<Acesso />} />
      <Route path="clientes" element={<Clientes />} />
      <Route path="configuracoes" element={<Configuracoes />} />
      <Route path="contratos" element={<Contratos />} />
      <Route path="estoque" element={<Estoque />} />
      <Route path="fornecedores" element={<Fornecedores />} />
      <Route path="gprodutos" element={<GProdutos />} />
      <Route path="caixa" element={<Caixa />} />
      <Route path="agenda" element={<Agenda />} />
      <Route path="produtos" element={<Produtos />} />
      <Route path="aluguel" element={<Aluguel />} />
      <Route path="analytics" element={<Analytics />} />
      <Route path="usuarios" element={<Usuarios />} />
      <Route path="orcamentos" element={<Orcamentos />} />
      <Route path="usuario/:id" element={<Usuario_id />} />
    </Routes>
  );
};

export default App;




