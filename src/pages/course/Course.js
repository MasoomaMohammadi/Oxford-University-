import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import MyNavbar from "../../compounents/navbar/Navbar";
import { courseData } from "../../data";

function Course() {
  const courseId = useParams().courseId;
  const courseInfo = courseData.find((course) => course.id == courseId);

  return (
    <div>
      <MyNavbar />
      <Container>
        <Row className="align-items-center">
          <Col md={5} className="imgCard" style={{ textAlign: "right" }}>
            <img className="imgCard img-fluid" src={courseInfo.img} />
          </Col>
          <Col md={7} className="my-4">
            <h2 style={{ fontFamily: "Lalezar" }}>{courseInfo.title}</h2>
            <p>
              <b>{courseInfo.text}</b>
            </p>
            <p style={{ textAlign: "justify" }}>{ courseInfo.paragraph}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Course;
