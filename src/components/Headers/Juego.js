import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
function Juego() {
  let tablero = Array(10)
    .fill(0)
    .map((row) => new Array(10).fill(0));
  return (
    <Card className="text-center bg-dark">
      <Card.Header>
        <i className="nc-icon nc-layout-11" />{" "}
        <Badge bg="light" text="dark">
          10
        </Badge>
        <i className="nc-icon nc-layout-11" />{" "}
        <Badge bg="light" text="dark">
          000
        </Badge>
        <span class="rounded" >sdsd</span>
      </Card.Header>
      <Card.Body>
   
        <table>
          <tbody>
            {tablero.slice(0, tablero.length).map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <Button variant="primary">{item[0]}</Button>
                  </td>
                  <td>
                    <Button variant="primary">{item[1]}</Button>
                  </td>
                  <td>
                    <Button variant="primary">{item[2]}</Button>
                  </td>
                  <td>
                    <Button variant="primary">{item[3]}</Button>
                  </td>
                  <td>
                    <Button variant="primary">{item[4]}</Button>
                  </td>
                  <td>
                    <Button variant="primary">{item[5]}</Button>
                  </td>
                  <td>
                    <Button variant="primary">{item[6]}</Button>
                  </td>
                  <td>
                    <Button variant="primary">{item[7]}</Button>
                  </td>
                  <td>
                    <Button variant="primary">{item[8]}</Button>
                  </td>
                  <td>
                    <Button variant="primary">{item[9]}</Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card.Body>
    </Card>
  );
}

export default Juego;
