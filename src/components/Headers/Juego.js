import React, { useEffect, useState, useCallback } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "assets/css/tablero.css";
export default function Juego() {
  const [contador, setContador] = useState(0);
  const [estilo] = useState([
    "numero1",
    "numero2",
    "numero3",
    "numero4",
    "numero5",
    "numero6",
    "numero7",
    "numero8",
  ]);
  const [tablero, setTablero] = useState([
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
  ]);

  const [minas, setMinas] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  const seleccionamosBug = (x, y) => {
    if (x >= 0 && y >= 0 && x < tablero.length && y < tablero[0].length) {
      if (minas[x + 1][y + 1] >= 0 && tablero[x][y] === false) {
        tablero[x][y] = true;
        setTablero(tablero);
        //tenemso que seleccionar casillas de los lados como true
        //como true
        if (minas[x + 1][y + 1] === 0) {
          seleccionamosBug(x - 1, y - 1);
          seleccionamosBug(x - 1, y);
          seleccionamosBug(x - 1, y + 1);

          seleccionamosBug(x, y - 1);
          //seleccionamosBug(x, y); ya marcamos
          seleccionamosBug(x, y + 1);

          seleccionamosBug(x + 1, y - 1);
          seleccionamosBug(x + 1, y);
          seleccionamosBug(x + 1, y + 1);
        }
      }
    }
  };
  const seleccionamosCasilla = (x, y) => {
    if (!tablero[x][y]) {
      console.log("click");
      setContador(contador + 1);

      if (minas[x + 1][y + 1] === 0) {
        seleccionamosBug(x, y);
      } else {
        tablero[x][y] = true;
      }

      setTablero(tablero);
    }
  };
  const getCard = (x, y) => {
    if (!tablero[x][y]) {
      return (
        <div
          onClick={() => {
            seleccionamosCasilla(x, y);
          }}
          className="casillaCerrada"
        ></div>
      );
    } else {
      let casilla = "casillaAbierta2";
      if ((x % 2 === 0 && y % 2 == 0) || (x % 2 === 1 && y % 2 == 1)) {
        casilla = "casillaAbierta1";
      }
      if (minas[x + 1][y + 1] > 0) {
        return (
          <div className={casilla}>
            <p className={estilo[minas[x + 1][y + 1] - 1]}>
              {minas[x + 1][y + 1]}
            </p>
          </div>
        );
      } else {
        if (minas[x + 1][y + 1] !== 0) {
          return (
            <div className={casilla}>
              <img
                src="https://media.tenor.com/aZMV_bT0gVEAAAAj/the-blobs-live-on-bomb.gif"
                alt="HTML tutorial"
              />
            </div>
          );
        } else {
          return <div className={casilla}></div>;
        }
      }
    }
  };
  const generarMinasRandom = useCallback(() => {
    console.log("generando mimas");
    let aux = minas;
    for (let i = 0; i < tablero.length; i++) {
      let y = Math.trunc(Math.random() * tablero[i].length) + 1;
      console.log(y - 1);
      let x = i + 1;
      aux[x - 1][y - 1]++;
      aux[x - 1][y]++;
      aux[x - 1][y + 1]++;

      aux[x][y - 1]++;
      aux[x][y] = -10;
      aux[x][y + 1]++;

      aux[x + 1][y - 1]++;
      aux[x + 1][y]++;
      aux[x + 1][y + 1]++;
    }

    setMinas(aux);
    console.log(minas);
  }, [minas, contador, setMinas, setContador]);
  const validar = () => {};
  useEffect(() => {
    console.log("Cargamos la inicio");
    generarMinasRandom();
  }, []);

  return (
    <Card style={{ maxWidth: "25rem" }}>
      <Card.Header className="text-center bg-white">
        <i className="nc-icon nc-layout-11" />{" "}
        <Badge bg="light" text="dark">
          7
        </Badge>
        <i className="nc-icon nc-layout-11" />{" "}
        <Badge bg="light" text="dark">
          042
        </Badge>
        <span className="rounded">sdsd</span>
      </Card.Header>
      <Card.Body>
        <Row className="justify-content-md-center">
          <Col>
            <div className="tablero">
              {tablero.map((item, index) => {
                return (
                  <Col key={index}>
                    {item.map((item2, index2) => {
                      return (
                        <div key={index + "-" + index2}>
                          {getCard(index, index2)}
                        </div>
                      );
                    })}
                  </Col>
                );
              })}
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
