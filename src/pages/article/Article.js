import { Link, Outlet } from "react-router-dom";
import MyNavbar from "../../compounents/navbar/Navbar";
import { Container, Row, Col } from "react-bootstrap";
import "./Article.css";

function Article() {
  return (
    <div className="center">
      <MyNavbar />
      <h1>صفحه مقالات</h1>
      <hr />
      <Col className="btnContainer">
        <Link to="question1" className="linkBtn">
          برخی از معروف‌ترین فارغ‌التحصیلان دانشگاه آکسفورد چه کسانی هستند؟
        </Link>
        <Link to="question2" className="linkBtn">
          دانشگاه آکسفورد چه زمانی تأسیس شده است؟
        </Link>
        <Link to="question3" className="linkBtn">
          دانشگاه آکسفورد چه تعداد دانشکده و کالج دارد؟
        </Link>
      </Col>
      <hr />
      <Container>
        <Outlet />
      </Container>
    </div>
  );
}

export default Article;
