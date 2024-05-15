import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="mb-8">
        <ul className="flex">
          <li className="font-bold w-1/2 p-8 text-center bg-[#240750]">
            <Link to="/" className="text-white font-sans text-xl">
              Feedback Form
            </Link>
          </li>
          <li className="font-bold w-1/2 p-8 text-center bg-blue-600">
            <Link to="/history" className="text-white font-sans text-xl">
              Submission History
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
