import React from "react";
import Button from "./Button";
const Header = ({ onAdd, showAdd }) => {
  return (
    <header className="header">
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "close" : "add"}
        onClick={onAdd}
      />
    </header>
  );
};

export default Header;
