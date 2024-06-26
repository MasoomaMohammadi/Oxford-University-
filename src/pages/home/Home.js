import { Col, Container, Row } from "react-bootstrap";
import MyNavbar from "../../compounents/navbar/Navbar";
import "./Home.css";
import homeImage from "../../assets/images/oxford-1.jpeg";
import homeImage2 from "../../assets/images/ben-seymour-nqBUTBsDQNM-unsplash.jpg";
import CourseItems from "../../compounents/course/CourseItems";
import { useState } from "react";
import Footer from "../../compounents/footer/Footer";
import { courseData } from "../../data";

function Home() {
  const [courses, setCourses] = useState(courseData);
  return (
    <>
      <MyNavbar />
      <Container fluid="lg">
        <Row className="my-5 align-items-center">
          <Col lg="7" className="text">
            <h1>معرفی و تاریخچه‌ی دانشگاه آکسفورد</h1>
            <p style={{ textAlign: "justify" }} className="">
              دانشگاه آکسفورد یکی از معتبرترین و قدیمی‌ترین دانشگاه‌های جهان است
              که در شهر آکسفورد انگلستان قرار دارد. تاریخ تأسیس دقیق این دانشگاه
              مشخص نیست، اما شواهد حاکی از آن است که فعالیت‌های آموزشی در این
              دانشگاه از قرن دوازدهم میلادی آغاز شده است. آکسفورد شامل چندین
              کالج مستقل است که هر کدام دارای تاریخچه، ساختار و فرهنگ منحصر به
              فرد خود هستند. این دانشگاه به دلیل سطح بالای آموزش و پژوهش، به
              ویژه در رشته‌های علوم انسانی، علوم اجتماعی، علوم طبیعی و پزشکی،
              شهرت جهانی دارد. دانشجویان و اساتید آکسفورد از سراسر جهان جذب این
              دانشگاه می‌شوند و بسیاری از فارغ‌التحصیلان آن به عنوان رهبران،
              دانشمندان، نویسندگان و شخصیت‌های برجسته در عرصه‌های مختلف شناخته
              شده‌اند. کتابخانه‌های آکسفورد، به ویژه کتابخانه بودلیان، یکی از
              بزرگترین و مهم‌ترین مجموعه‌های کتاب و نسخ خطی در جهان را دارا
              هستند. این دانشگاه همچنین با برگزاری رویدادها و سخنرانی‌های علمی،
              فرهنگی و اجتماعی نقش مهمی در تبادل دانش و اندیشه‌های نوین ایفا
              می‌کند. به طور کلی، دانشگاه آکسفورد نمادی از کیفیت آموزشی، پژوهشی
              و فرهنگی در سطح جهانی است و همواره به عنوان یکی از برترین مراکز
              علمی دنیا شناخته می‌شود.
            </p>
          </Col>
          <Col lg="5" className="py-4 gap px-4">
            <img src={homeImage2} className="img-fluid img "></img>
          </Col>
        </Row>

        <Row className="my-5">
          <h2 className="py-4"> ویژگی‌های دانشگاه آکسفورد </h2>
          {courses.map((course) => (
            <Col key={course.id} className="py-3" md={6} lg={4} xl={3}>
              <CourseItems {...course} />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
