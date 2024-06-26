import "./CourseItems.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function CourseItems({id,title, img, text}) {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>
            <h4>{title}</h4>
          </Card.Title>
          <Card.Text>{text}</Card.Text>
          <Button variant="primary">
            <Link to={`/course/${id}`} className="buy-btn">
              اطلا عات بیشتر
            </Link>
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default CourseItems;
