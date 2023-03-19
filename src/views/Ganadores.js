import React from "react";

function Ganadores() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return <>aqui estan los ganadores</>;
}

export default Ganadores;
