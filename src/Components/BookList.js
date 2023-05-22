import { Row, Col, Container } from "react-bootstrap";
import { useContext, useState } from "react";
import { CommentArea } from "./CommentAreaNoModal";
import SingleCard from "./SingleCard";


  function BookList({ query, books }) {

  const [selected, setSelected] = useState(null);
  
  const cards = books.filter((book) => 
  book.title.toLowerCase().includes(query.toLowerCase()))
  .map((book) => (
  <Col key={book.asin}>
  <SingleCard
          book={book}
          selected={selected === book}
          setSelected={setSelected}
  ></SingleCard>
      </Col>));
  
  const newLocal = 1;
  
  return (
    <div className={newFunction()}>
      <Row
      xs={1}
      >
      <Col>
      <Row xs={2} md={5} lg={3} className="g-3">
      {cards}
      </Row>
      </Col>
      <Col>
      {selected && (
      <CommentArea book={selected} />
)}
    </Col>
      </Row>
    </div>
  );

    function newFunction() {
      return "mt-5";
    }
}

export default BookList;
