import React from "react";

const ErrorPage = (props) => {
  return (
    <div role="alert">
      <p>An error occurred:</p>
      <pre>{props.error.message}</pre>
    </div>
  )
}

export default ErrorPage;
