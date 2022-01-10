import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";
import { useParams } from "react-router";
import { useEffect, useCallback } from "react";
import useHttp from "../../hooks/use-http";
import { getAllComments } from "../../lib/api";
import { stat } from "fs";
import LoadingSpinner from "../UI/LoadingSpinner";
import CommentsList from "../comments/CommentsList";

const Comments = () => {
  const params = useParams();
  const { quoteId } = params;
  const [isAddingComment, setIsAddingComment] = useState(false);
  const { sendRequest, status, data: loadedComments } = useHttp(getAllComments);

  //load comments and pick which quote id
  useEffect(() => {
    //fetch comment
    sendRequest(quoteId);
  }, [quoteId, sendRequest]);

  //show form
  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };
  let comments;
  if (status === "pending") {
    comments = (
      <div className="centered">
        <LoadingSpinner />{" "}
      </div>
    );
  }
  if (status === "completed" && loadedComments && loadedComments.length > 0) {
    comments = <CommentsList comments={loadedComments} />;
  }
  if (
    status === "completed" &&
    (!loadedComments || loadedComments.length === 0)
  ) {
    comments = <p className="centered">No comments were added yet</p>;
  }

  const addedCommentHandler = useCallback(() => {
    sendRequest(quoteId);
  }, [quoteId, sendRequest]);
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <a className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </a>
      )}
      {isAddingComment && (
        <NewCommentForm
          onAddedComment={addedCommentHandler}
          quoteId={quoteId}
        />
      )}
      {comments}
    </section>
  );
};

export default Comments;
