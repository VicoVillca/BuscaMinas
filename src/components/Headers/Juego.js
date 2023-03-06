import React, { useEffect, useState, useCallback } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "assets/css/tablero.css";
import bomba from "assets/img/bomba.png";
import reloj from "assets/img/reloj.png";
export default function Juego(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
  const [minas, setMinas] = useState([]);
  const [tablero, setTablero] = useState([]);
  const [bandera, setBandera] = useState([]);

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
        if (minas[x + 1][y + 1] < 0) {
          setShow(true);
          console.log("encontramos una mina weee");
        }
        tablero[x][y] = true;
      }

      setTablero(tablero);
    }
  };
  const colocamosBandera = (x, y) => {
    console.log("Colocamos Bandera");
    setContador(contador + 1);
    bandera[x][y] = !bandera[x][y];
    setBandera(bandera);
  };
  const limpiarIniciarJuego = useCallback(() => {
    console.log("Limpiamos Iniciamos juego");
    let tab = Array(8)
      .fill(0)
      .map((row) => new Array(7).fill(false));
    let band = Array(8)
      .fill(0)
      .map((row) => new Array(7).fill(false));
    let aux = Array(10)
      .fill(0)
      .map((row) => new Array(9).fill(0));

    for (let i = 0; i < tab.length; i++) {
      let y = Math.trunc(Math.random() * tab[i].length) + 1;
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

    setBandera(band);
    setTablero(tab);
    setMinas(aux);
    setShow(false);
  }, [setBandera, setTablero, setMinas, setShow]);
  const getCard = (x, y) => {
    if (!tablero[x][y]) {
      return (
        <div
          onClick={() => {
            seleccionamosCasilla(x, y);
          }}
          onContextMenu={(e) => {
            colocamosBandera(x, y);
          }}
          className="casillaCerrada"
        >
          {bandera[x][y] ? (
            <img
              src="https://icon-library.com/images/tourism-flag-red-point-512.png"
              alt="HTML tutorial"
            />
          ) : (
            ""
          )}
        </div>
      );
    } else {
      let casilla = "casillaAbierta2";
      if ((x % 2 === 0 && y % 2 === 0) || (x % 2 === 1 && y % 2 === 1)) {
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
  useEffect(() => {
    limpiarIniciarJuego();
  }, [limpiarIniciarJuego]);

  return (
    <>
      <Card style={{ maxWidth: "25rem" }}>
        <Card.Header className="justify-content-md-center bg-white">
          <Row>
            <Col className="col-4 d-flex justify-content-center text-center">
              <div className="info">
                <img src={bomba} alt="HTML tutorial" />
              </div>
              <div className="numero1">8</div>
              <div className="espacio"></div>
              <div className="info ">
                <img src={reloj} alt="HTML tutorial" />
              </div>
              <div className="numero1">123</div>
            </Col>
          </Row>
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
          {bandera}
        </Card.Body>
      </Card>

      {/** modal  */}

      <Modal
        size="sm"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <img src="https://media.tenor.com/APSSFvnUrdgAAAAM/sad-nuggie-gaming.gif" />
        <Modal.Footer>
          <Button
            className="reitentar"
            variant="primary"
            onClick={limpiarIniciarJuego}
          >
            <img
              className="btnrecargar"
              src="//www.gstatic.com/images/icons/material/system/2x/refresh_white_24dp.png"
            />
            Reintentar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
