import React from "react";
import Button from "./Button";
const Header = () => {
  const onClick = (e) => {};

  return (
    <header className="header">
      <Button color="green" text="Add" onClick={onClick} />
    </header>
  );
};

export default Header;
