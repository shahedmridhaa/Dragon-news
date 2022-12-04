import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../Page/Shared/Header/Header";
import Leftside from "../Page/Shared/Leftside/Leftside"
import Rightside from "../Page/Shared/Rightside/Rightside"
import Footer from "../Page/Shared/Footer/Footer"

const Main = () => {
  return (
    <div>
        <Header></Header>
      <Container>
        <Row>
          <Col lg="2" className="d-none d-lg-block">
          <Leftside></Leftside>
          </Col>
          <Col lg="7">
             <Outlet></Outlet>
          </Col>
          <Col lg="3" className="d-none d-lg-block">
              <Rightside></Rightside>
          </Col>
        </Row>
      </Container>
    <Footer></Footer>
    </div>
  );
};

export default Main;
