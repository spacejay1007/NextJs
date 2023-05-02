"use client";

import { useEffect } from "react";

type T_Error = {
  error: Error;
  reset: () => void;
};

const ErrorPage = ({ error, reset }: T_Error) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div>
      <h2>Somthing Went Wrong!</h2>
      <button
        onClick={() => {
          reset();
        }}
      >
        Try Again
      </button>
    </div>
  );
};

export default ErrorPage;
