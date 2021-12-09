// import { useEffect, useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import useFetch from "./usefetch";

const Home = () => {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/users/1/albums`)
  //     .then((response) => response.json())
  //     .then((json) => setData(json));
  // }, []);
  const data = useFetch(`https://jsonplaceholder.typicode.com/users/1/albums`);
  console.log(data);
  return (
    <div>
      {data &&
        data.map((item) => {
          return (
            <center key={item.id}>
              <ListGroup>
                <ListGroupItem action color="success">
                  <Link to={`album/${item.id}`}>{item.id}</Link>
                </ListGroupItem>
              </ListGroup>
            </center>
          );
        })}
    </div>
  );
};
export default Home;
