import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import MyNavbar from "../../compounents/navbar/Navbar";
import { courseData } from "../../data";
import Footer from "../../compounents/footer/Footer";
import Image from "react-bootstrap/Image";

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
            <h2 className="courseTittle" style={{ fontFamily: "Lalezar" }}>
              {courseInfo.title}
            </h2>
            <p>{courseInfo.text}</p>
            <p style={{ textAlign: "justify" }}>{courseInfo.paragraph}</p>
          </Col>
        </Row>
        <Row className="my-5 mx-1 flex-img">
          <Col xs={12} md={4} className="mt-3">
            <Image
              style={{ width: "23.5rem", height: "25rem" }}
              src={courseInfo.img1}
              thumbnail
            />
          </Col>
          <Col xs={12} md={4} className="mt-3">
            <Image
              style={{ width: "23.5rem", height: "25rem" }}
              src={courseInfo.img2}
              thumbnail
            />
          </Col>
          <Col xs={12} md={4} className="mt-3">
            <Image
              style={{ width: "23.5rem", height: "25rem" }}
              src={courseInfo.img3}
              thumbnail
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
export default Course;
