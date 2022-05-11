import { createContext, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./App.css";
import bg from "./img/bg.png";
import data from "./data.js";
import Card from "./components/Card.js";
import { Route, Routes, useNavigate } from "react-router-dom";
import MainPage from "./components/MainPage";
import Detail from "./components/Detail";
import Cart from "./components/Cart.js";

export let Context1 = createContext();

function App() {
  let [shoes, setShoes] = useState(data);
  let [재고] = useState([10, 11, 12]);
  let ag = bg;
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">SheosShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#features"
              onClick={() => {
                navigate("/detail");
              }}
            >
              Detail
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <MainPage ag={ag} shoes={shoes} setShoes={setShoes} Card={Card} />
          }
        />
        <Route path="*" element={<div>404 ERROR</div>} />
        <Route
          path="/detail/:id"
          element={
            <Context1.Provider value={{ 재고, shoes }}>
              <Detail shoes={shoes} />
            </Context1.Provider>
          }
        />
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
}
export default App;
