import React, { useState, useEffect } from "react";
import "./Login.css";

export const Login = () => {
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [logado, setLogado] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const nomeUsuario = event.target.elements.nome.value;
    const senha = event.target.elements.senha.value;

    if (nomeUsuario !== "" && senha !== "") {
      setNomeUsuario(nomeUsuario);
      setSenha(senha);
      setLogado(true);
    } else {
      alert("Senha e/ou usuário errado.");
    }
  };

  useEffect(() => {
    if (logado) {
      window.open("https://soulcode.com/", "_blank");
    }
  }, [logado]);
  return (
    <>
      <div className="LoginWrapper">
        {logado ? (
          <div>
            {" "}
            <hr />
            <p>Olá {nomeUsuario}, tudo bem?</p>
          </div>
        ) : (
          <p>
            {" "}
            <hr /> <div>Usuário não logado </div>
          </p>
        )}
        {!logado && (
          <form onSubmit={handleSubmit}>
            <div className="FormWrapper">
              <label>Nome:</label>
              <input type="text" name="nome" /> <br />
              <label>Senha: </label>
              <input type="password" name="senha" />
              <button type="submit">Logar</button>
            </div>
          </form>
        )}
      </div>
    </>
  );
};
