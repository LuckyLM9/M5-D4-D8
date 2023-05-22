import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";


function AddComment({ asin, createComment }) {
  
  const formInitial = {
    comment: "",
    rate: "",
    elementId: asin,
  };
  
  const [form, setForm] = useState(formInitial);
  
  function handleFormChange(event) {
  
    setForm((prev) =>
  
    ({ ...prev, [event.target.name]: event.target.value }));
  
  }
  
  async function handleSubmit(event) {
    
    event.preventDefault();
    
    try {
      
      await createComment(form);
      setForm(formInitial);
      
    } catch (error) { }
  }
  function isFormValid() {
    const { comment, rate } = form;
    return comment.length > 0 && rate.length > 0 ? true : false;
  }
  const radioEls = [];
  for (let i = 1; i <= 5; i++) {
    radioEls.push(
      <Form.Check
        className="mx-2"
        type="radio"
        name="rate"
        value={`${i}`}
        key={i}
        label={i}
        onChange={handleFormChange}
        checked={`${i}` === form.rate}
      ></Form.Check>
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h3>Invia il tuo commento</h3>
      <Form.Group className="mb-2">
        <Form.Control
          type="text"
          placeholder="Tuo Commento"
          name="comment"
          onChange={handleFormChange}
          value={form.comment} />
      </Form.Group>
      <Form.Group className="d-flex px-3 py-1 border rounded mb-2">
        <Form.Label className="my-0">Valutazione</Form.Label>
        {radioEls}
      </Form.Group>
      <div className="d-flex justify-content-center">
        <Button disabled={!isFormValid()} type="submit">Invia</Button>
      </div>
    </Form>
  );
}

export default AddComment;
