import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Collapse } from "../Grid";
import List from "../List";
import BurgerBtn from "../BurgerBtn";
import { boot, font, data } from "./style";

export default function Navbar({ toggleNav, navState }) {
  return (
    <nav className={boot.nav}>
      <Collapse classes={boot.collapse} id={'navbar-target'}>
        <Container classes={"p-4"}>
          <Row classes={boot.row1}>
            <Col size={"md-2"}>
              <List />
            </Col>
            <Col size={"md-6"} classes={boot.col2}>
              <div className={boot.flex}>
                <span className={boot.span} />
                <p className={"new-line"}>
                  <em>
                    {data.navTxt}
                    <i className={font.github} />
                    <a href={data.github}
                      target="_blank"
                      rel="noreferrer noopener">
                      GitHub Profile.
                    </a> {"\n"}
                    <i className={font.linkedin} />
                    <a href={data.linkedin}
                      target="_blank"
                      rel="noreferrer noopener">
                      Linkedin Profile.
                    </a>
                  </em>
                </p>
              </div>
            </Col>
            <Col size={"md-4"} classes={boot.col2}>
              <div className="new-line">
                <h3>Hiring?</h3>
                <h5>Help is on the way...</h5>
                <a href={`mailto:${data.email}`}>{data.email}</a>
                <a href="tel:2672402298">{data.phone}</a>
              </div>
            </Col>
          </Row>
        </Container>
      </Collapse>
      <Container>
        <Link to="/" className={"navbar-brand"}>
          Page Tyler
        </Link>
        <BurgerBtn toggleNav={toggleNav} navState={navState} />
      </Container>
    </nav>
  );
}
