import { Container, Col } from "react-bootstrap";
import MyNavbar from "../../compounents/navbar/Navbar";
import backgroundImage from "../../assets/images/oxford.jpg";
import "./Panel.css";

function Panel() {
 const backgroundImageStyle = {
   backgroundImage: `url(${backgroundImage})`,
   backgroundSize: "cover",
   backgroundRepeat: "no-repeat",
   minHeight: "100vh",
 };

  return (
    <div style={backgroundImageStyle}>
      <MyNavbar />
      <Container>
        <h1 className="panel-text">خوش آمدید به دانشگاه آکسفورد 🤩</h1>
      </Container>
    </div>
  );
}

export default Panel;
