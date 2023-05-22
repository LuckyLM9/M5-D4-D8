import React, { useContext, useEffect, useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";


function SearchBar({ query, setQuery }) {

  return (
    <Row xs={1}>
      <Col>
        <Form>
          <Row>
            <Col xs={10}>
              <Form.Group>
                <Form.Control
                  type="search"
                  placeholder="Cerca il tuo libro"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)} />
              </Form.Group>
            </Col>

          </Row>
        </Form>
      </Col>
    </Row>
  );
}

export default SearchBar;
