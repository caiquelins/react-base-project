import React from "react";
import { useSelector } from "react-redux";
import { FaHome, FaSignInAlt, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import * as S from "./styled";

export default function Header() {
  const botaoClicado = useSelector((state) => state.example.botaoClicado);
  return (
    <S.Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/login">
        <FaUserAlt size={24} />
      </Link>
      <Link to="/logout">
        <FaSignInAlt size={24} />
      </Link>
      {botaoClicado ? "Clicado" : "Não clicado"}
    </S.Nav>
  );
}
