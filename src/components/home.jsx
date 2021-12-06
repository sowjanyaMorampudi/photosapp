import { useEffect, useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/1/albums`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  return (
    <div>
      {data.map((item) => {
        return (
          <center key={item.id}>
            <ListGroup>
              <ListGroupItem action color="success">
                <Link to={"album/" + item.id}>{item.id}</Link>
              </ListGroupItem>
            </ListGroup>
          </center>
        );
      })}
    </div>
  );
};
export default Home;
