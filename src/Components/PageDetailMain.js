import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { CommentArea } from "../Components/CommentAreaNoModal"
import { Link } from "react-router-dom";

function PageDetailMain({ book }) {

  return (

    <div className={newFunction()}>
      <h2>{book.title}</h2>
      <Row xs={2}>
        <Col>
          <img src={book.img} className="img-fluid mb-2" />
          <div className="d-flex justify-content-center">
            <Link to={"/"}>
              <Button>Torna alla home</Button>
            </Link>
          </div>
        </Col>
        <Col>

          {<CommentArea book={book} />}

        </Col>
      </Row>
    </div>
  );

  function newFunction() {
    return "py-2";
  }
}

export default PageDetailMain;
