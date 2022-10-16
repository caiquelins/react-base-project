import React from "react";
import { useDispatch } from "react-redux";

import * as exampleActivity from "../../store/modules/example/actions";

import { Container } from "../../styles/GlobalStyles";
import * as S from "./styled";

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();
    dispatch(exampleActivity.clicaBotaoRequest());
  }
  return (
    <Container>
      <S.Title>
        teste
        <small>teste 2</small>
      </S.Title>
      <p>oiii</p>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
