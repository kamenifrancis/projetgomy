import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card' 

const MovieCards = ({Movie ,  commentaire,}) => {
  console.log('Movie',Movie)
  return (
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {Movie.image} />
      <Card.Body>
        <Card.Title>{Movie.titre}</Card.Title> 
        <Card.Text>{Movie.personnage}</Card.Text>
        <Card.Text>
         {Movie.description}
        </Card.Text> 
        <Card.Title>{Movie.date}</Card.Title>
        <Card.Title>{Movie.rate}</Card.Title> 
        <video width="320" height="240" controls>
       <source src={Movie.video} type='video/mp4' />
    </video> 
    <input placeholder='ajouter un commentaire'value={commentaire} onChange = {(e)=> (e.target.value)} />
    <button >commenter</button>   
      </Card.Body>
    </Card>
    </div> 
    
  )
}

export default MovieCards