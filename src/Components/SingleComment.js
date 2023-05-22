import React from 'react'
import { Button, Card } from 'react-bootstrap'
import StarRate from './StarRate'

function SingleComment({ comment, token, setComments, setRefresher, setIsDelete }) {

    async function handleDelete() {

        try {

            const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + comment._id, {
                method: "DELETE",
                headers: {
                    "Authorization": "Bearer " + token,
                    "Content-Type": "application/json"
                }
            })

            if (response.ok) {

                setIsDelete(true)
                setRefresher(true)
            }

        } catch (error) {

            console.error(error)
        }
    }

    return (

        <Card className='mb-2'>
            <Card.Body>
                <Card.Text as='div'><p>Commento: {comment.comment}</p>

                    <div className='d-flex justify-content-between'>
                        <span>Autore: {comment.author}</span>
                        <StarRate rate={parseInt(comment.rate)} />
                    </div>

                </Card.Text>
                <Button variant='outline-danger' size='sm' onClick={handleDelete}>Cancella Commento</Button>
            </Card.Body>
        </Card>
    )
}

export default SingleComment