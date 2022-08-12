import { useCallback, useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import { getAllComments } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";

import classes from "./Comments.module.css";
import CommentsList from "./CommentsList";
import NewCommentForm from "./NewCommentForm";

const Comments = () => {
  const params = useParams();
  const {
    sendRequest,
    status,
    data: loadedComments,
  } = useHttp(getAllComments);

  const { id } = params;
  useEffect(() => {
    sendRequest(id);
  }, [sendRequest, id]);

  const [isAddingComment, setIsAddingComment] =
    useState(false);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const addedCommentHandler = useCallback(() => {
    sendRequest(id);
  }, [sendRequest, id]);

  let comments;
  if (status === "pending")
    comments = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );

  if (
    status === "completed" &&
    (loadedComments || loadedComments.length > 0)
  )
    comments = <CommentsList comments={loadedComments} />;

  if (
    status === "completed" &&
    (!loadedComments || loadedComments.length < 1)
  )
    comments = (
      <p className="centered">
        No Comments were added yet!
      </p>
    );

  return (
    <>
      <section className={classes.comments}>
        <h2>User Comments</h2>
        {!isAddingComment && (
          <button
            className="btn"
            onClick={startAddCommentHandler}
          >
            Add a Comment
          </button>
        )}
        {isAddingComment && (
          <NewCommentForm
            quoteId={params.id}
            onAddedComment={addedCommentHandler}
          />
        )}
        {comments}
      </section>

      <Outlet />
    </>
  );
};

export default Comments;
