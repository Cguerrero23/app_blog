import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Start from "./components/Start";
import Blog from "./components/Blog";
import Acercade from "./components/Acerca-de";
import Header from "./components/Header";
import styled from "styled-components";

const App = () => {
  return (
    <BrowserRouter>
      <ContenedorPrincipal>
        <Header/>
        <Main>
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="Blog" element={<Blog />} />
            <Route path="Acerca-de" element={<Acercade />} />
          </Routes>
        </Main>
      </ContenedorPrincipal>
    </BrowserRouter>
  );
};
const ContenedorPrincipal= styled.div`
padding: 48px;
width: 90%;
max-width: 700px;
`;

const Main=styled.main`
background:white;
border-radius:10px;
padding:48px;
box-shadow: 0px 0p 5px rgba(129,129,129,0.1);
`

export default App;
