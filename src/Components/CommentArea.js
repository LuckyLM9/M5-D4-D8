import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { MoonLoader } from "react-spinners";
import MyPagination from "./MyPagination";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import useFetch from "../hooks/useFetch";

export const CommentArea = ({ book, setIsCommentModalOpen, token }) => {
  const baseUrl = "https://striveschool-api.herokuapp.com/api/comments/"
  const headers =   {
                      Authorization: "Bearer " + token,
                      "Content-Type": "application/json",
                    }
  const [showModal, setShowModal] = useState(true);
  const [comments, setComments, loading] = useFetch(baseUrl + book, headers);
  const [currentComments, setCurrentComments] = useState([]);
  const itemsPerPage = 3; 
  let lastPage= Math.ceil(comments.length/itemsPerPage);
  const [activePage, setActivePage] = useState(lastPage);
  async function createComment(form) {
    try {
      const response = await fetch(
        baseUrl,
        {
          method: "POST",
          headers: headers,
          body: JSON.stringify(form),
        }
      );
      if (response.ok) {
        const data = await response.json();
        setComments((prev) => [...prev, data]);
        setActivePage(currentComments.length === itemsPerPage ? lastPage + 1 : lastPage);

      } else {
        throw Error();
      }
    } catch (error) {
      throw Error;
    }
  }
  useEffect(() => {
    setCurrentComments(
      comments.slice((activePage - 1) * itemsPerPage, activePage * itemsPerPage)
    );
  }, [activePage, comments]);
  return (
    <Modal
      show={showModal}
      onHide={() => setShowModal(false)}
      onExited={() => setIsCommentModalOpen(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      scrollable
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {`Comments for ${book.title}`}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {loading && (
          <div className="d-flex justify-content-center">
            <MoonLoader animation="border" variant="info" />
          </div>
        )}
        {!loading && (
          <CommentList
            comments={currentComments}
            token={token}
            setComments={setComments}
            totalCommentsNum = {comments.length}
            setActivePage={setActivePage}
            lastPage={lastPage}
          />
        )}
        {!loading && comments.length > itemsPerPage && currentComments.length > 0 && (
          <MyPagination
            setActivePage={setActivePage}
            activePage={activePage}
            items={Math.ceil(comments.length / itemsPerPage)}
          />
        )}
        {!loading && (
          <AddComment
            asin={book.asin}
            createComment={createComment}
            setComments={setComments}
            setActivePage={setActivePage}
            lastPage={lastPage}
            
          />
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-primary" onClick={() => setShowModal(false)}>
          Chiudi
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
