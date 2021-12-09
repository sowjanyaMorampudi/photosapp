import { Card, CardBody, CardImg, CardTitle, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Photo = ({ item, modeOn }) => {
  const { url, title } = item;
  return (
    <Col md="2">
      <Card className="m-2">
        <CardImg
          src={item.thumbnailUrl}
          onClick={() => {
            modeOn({ url, title });
          }}
          alt={item.title}
        />

        <CardBody>
          <CardTitle>
            {item.id}:{item.title}
          </CardTitle>
        </CardBody>
      </Card>
    </Col>
  );
};
export default Photo;
