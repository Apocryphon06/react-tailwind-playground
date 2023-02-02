import React from "react";

function Header({ title }) {
  return (
    <div className="border m-5 px-5 py-3 bg-slate-500 text-white text-lg rounded-lg">
      {title}
    </div>
  );
}

export default Header;
