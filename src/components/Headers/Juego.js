import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "table.css";
function Juego() {
  let tablero = Array(70)
    .fill(0)
    .map((row) => 0);
  return (
    <Card className="text-center bg-dark" style={{ maxWidth: '25rem' }}>
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
          <Col >
            {tablero.slice(0, tablero.length).map((item, index) => {
              return (
                
                  <Button className="button1" key={index}>{item}</Button>

              );
            })}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default Juego;
