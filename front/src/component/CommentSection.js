import React, { useState } from "react";
import './coment.css'
function CommentSection( {  handleDeleteReply,handleSubmitReply,handleNewReplyChange}) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  

  return (
    <div className="cmn">
      {/* afficher les commentaires existants */}
      {comments.map((comment) => (
        <div key={comment.id}>
          <p>{comment.text}</p>
          <button className="btt" onClick={() => handleDeleteComment(comment.id)}>
            Supprimer
          </button>
          <button onClick={() => handleLikeComment(comment.id)}>
            {comment.likes} Likes
          </button>
          <button className="rpdr" onClick={() => handleReplyComment(comment.id)}>
            Répondre
          </button>
          {/* afficher les réponses aux commentaires existants */}
          {comment.replies &&
            comment.replies.map((reply) => (
              <div key={reply.id}>
                <p>{reply.text}</p>
                <button className="btt" onClick={() => handleDeleteReply(reply.id)}>
                  Supprimer
                </button>
              </div>
            ))}
          {/* formulaire pour ajouter une réponse */}
          {comment.showReplyForm && (
            <form onSubmit={(event) => handleSubmitReply(event, comment.id)}>
              <textarea
                value={comment.newReply}
                onChange={(event) => handleNewReplyChange(event, comment.id)}
              />
              <button type="submit">Répondre</button>
            </form>
          )}
        </div>
      ))}

      {/* formulaire pour ajouter un nouveau commentaire */}
      <form onSubmit={handleSubmit}>
        <textarea value={newComment} onChange={handleChange} />
        <button className="ajout" type="submit">Ajouter un commentaire</button>
      </form>
    </div>
  );

  function handleChange(event) {
    setNewComment(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Ajouter le nouveau commentaire à la liste des commentaires existants
    const comment = { id: comments.length + 1, text: newComment, likes: 0 };
    setComments([...comments, comment]);
    // Réinitialiser le champ de saisie du commentaire
    setNewComment("");
  }

  function handleDeleteComment(id) {
    // Supprimer le commentaire avec l'ID donné de la liste des commentaires existants
    const updatedComments = comments.filter((comment) => comment.id !== id);
    setComments(updatedComments);
  }

  function handleLikeComment(id) {
    // Trouver le commentaire avec l'ID donné et incrémenter son nombre de likes
    const updatedComments = comments.map((comment) => {
      if (comment.id === id) {
        return { ...comment, likes: comment.likes + 1 };
      } else {
        return comment;
      }
    });
    setComments(updatedComments);
  }

  function handleReplyComment(id) {
    // Afficher le formulaire de réponse pour le commentaire avec l'ID donné
    const updatedComments = comments.map((comment) => {
      if (comment.id === id) {
        return { ...comment, showReplyForm: true };
      } else {
    
    }
    }
    )   
    }
    }
export default CommentSection
   



