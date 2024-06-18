import React from "react";

function ErrorComponent({ error }) {
  return (
    <div className="error"
    >
      <h3>{error.message}</h3>
    </div>
  );
}

export default ErrorComponent;
