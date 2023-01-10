import React from "react";
import { Navigate } from "react-router-dom";

const RedirectTo = ({ url }: { url: string }) => {
  return <Navigate to={url} />;
};

export default RedirectTo;
