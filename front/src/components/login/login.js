import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../../image/background.png';
import logo from '../../image/logo.png'
import './login.css';

const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
      e.preventDefault();
      if (!usuario || !senha) {
          setErrorMessage('Por favor, preencha todos os campos!');
          return;
      }
      console.log(JSON.stringify({ usuario, senha }));

      try {
          const response = await fetch('http://localhost:8080/adm/login', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ usuario, senha }),
          });

          if (!response.ok) {
              throw new Error('Credenciais inválidas!');
          }

          const data = await response.json();
          localStorage.setItem('adm', JSON.stringify(data)); 
          navigate('/home'); 
      } catch (error) {
          setErrorMessage('Credenciais inválidas! Tente novamente.');
      }
  };

  return (
      <div className="login-page" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className="login-container">
              <form className="form-container" onSubmit={handleSubmit}>
                  <img src={logo} alt="Logo" style={{ maxWidth: '400px', marginBottom: '30px' }} />
                  {errorMessage && <div className="error-message">{errorMessage}</div>}
                  <div className="input-container">
                      <label htmlFor="usuario">Usuário</label>
                      <input
                          type="text"
                          id="usuario"
                          placeholder="Digite seu login"
                          value={usuario}
                          onChange={(e) => setUsuario(e.target.value)}
                      />
                  </div>

                  <div className="input-container">
                      <label htmlFor="senha">Senha</label>
                      <input
                          type="password"
                          id="senha"
                          placeholder="Digite sua senha"
                          value={senha}
                          onChange={(e) => setSenha(e.target.value)}
                      />
                  </div>

                  <div className="button-container">
                      <button type="submit" className="submit">Entrar</button>
                  </div>
              </form>
          </div>
      </div>
  );
};

export default Login;
