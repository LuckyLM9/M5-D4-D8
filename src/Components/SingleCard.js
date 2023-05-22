import { Card, Button } from "react-bootstrap";
import MyBadge from "./MyBadge";
import { useState } from "react";
import { CommentArea } from "./CommentArea";
import { Link } from "react-router-dom";


function SingleCard({ book, selected, setSelected }) {

  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);

  return (
    <>
      <Card
        className={`h-100 pt-2 ${selected && "border border-danger"}`}
        onClick={() => setSelected(book)}
      >
        <Card.Img
          src={book.img}
          className="object-fit-contain"
          style={{ height: "350px" }} />
        <Card.Body>
          <Card.Title>{book.title}
          </Card.Title>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-center">
          <Link to={"/books/" + book.asin}><Button variant="outline-success" color="green">Dettagli</Button></Link>
        </Card.Footer>
      </Card>
    </>
  );
}

export default SingleCard;
