import { Col, Row, Container } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import './Footer.css';

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <h2> دانشگاه آکسفورد </h2>
            <p>
              دانشگاه آکسفورد یکی از بهترین دانشگاه های جهان محسوب می شود که
              شرایط ورود بسیار رقابتی دارد. این دانشگاه با دارا بودن محیطی وسیع
              با امکانات آموزشی و تحقیقاتی متنوع یکی از بهترین مقاصد تحصیل برای
              دانشجویان بین المللی به حساب می آید
            </p>
          </Col>
          <Col style={{ textAlign: "left" }}>
            <img className="logo" src={logo} />
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
