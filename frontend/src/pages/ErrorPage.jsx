import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <>
    
      <main className="main bg-dark">
        <h1>Page not found</h1>
        <Link to={"/"} className="">
          Return to Home
        </Link>
        
      </main>
     
    </>
  );
}
