import Article from "./pages/article/Article";
import Course from "./pages/course/Course";
import Home from "./pages/home/Home";
import About from './pages/about/About'
import Login from "./pages/login/Login";
import Panel from "./pages/panel/Panel";
import Setting from "./pages/Setting";
import PrivateRoute from "./compounents/PrivateRoute";
import { collageInfo } from "./dataCarcoul";

const router = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About collageInfo={collageInfo}/> },
  {
    path: "/article/*",
    element: <Article />,
    children: [
      {
        path: "question1",
        element: (
          <h5 style={{ textAlign: "justify" }} className="aretcle-text">
            دانشگاه آکسفورد بسیاری از فارغ‌التحصیلان برجسته و مشهور در حوزه‌های
            مختلف دارد. در زیر به برخی از معروف‌ترین آن‌ها اشاره می‌شود:
            <br />
            1. تونی بلر - نخست‌وزیر سابق بریتانیا.
            <br />
            2. مارگارت تاچر - نخست‌وزیر سابق بریتانیا.
            <br />
            3. ترزا می - نخست‌وزیر سابق بریتانیا.
            <br />
            4. بیل کلینتون - رئیس‌جمهور سابق ایالات متحده آمریکا.
            <br />
            5. اسکار وایلد - نویسنده و شاعر مشهور ایرلندی.
            <br />
            6. جی. آر. آر. تالکین - نویسنده کتاب‌های «ارباب حلقه‌ها».
            <br />
            7. استیون هاوکینگ - فیزیکدان نظری و کیهان‌شناس معروف.
            <br />
            8. ایندرا نویی - مدیرعامل سابق شرکت پپسی‌کو.
            <br />
            9. ایملی دیویس - از فعالان حقوق زنان و یکی از بنیان‌گذاران کالج زنان
            آکسفورد.
            <br />
            10. تیم برنرز-لی - مخترع شبکه جهانی وب.
            <br />
            این افراد تنها نمونه‌ای از فارغ‌التحصیلان برجسته دانشگاه آکسفورد
            هستند و این دانشگاه بسیاری دیگر از چهره‌های مهم در حوزه‌های علمی،
            سیاسی، فرهنگی و اقتصادی را نیز تربیت کرده است.
          </h5>
        ),
      },
      {
        path: "question2",
        element: (
          <h5 style={{ textAlign: "justify" }} className="aretcle-text">
            دانشگاه آکسفورد یکی از قدیمی‌ترین دانشگاه‌های جهان است و تاریخ تأسیس
            دقیقی برای آن وجود ندارد. با این حال، قدیمی‌ترین شواهد از فعالیت‌های
            آموزشی در آکسفورد به سال ۱۰۹۶ میلادی بازمی‌گردد. بر اساس این شواهد،
            آموزش در آکسفورد از اوایل قرن دوازدهم میلادی آغاز شده و این دانشگاه
            به تدریج رشد و توسعه یافته است. آکسفورد به عنوان یکی از معتبرترین
            دانشگاه‌های جهان، نقش مهمی در توسعه علم و دانش ایفا کرده است.
          </h5>
        ),
      },
      {
        path: "question3",
        element: (
          <h5 style={{ textAlign: "justify" }} className="aretcle-text">
            دانشگاه آکسفورد دارای ساختاری منحصربه‌فرد است که شامل تعدادی دانشکده
            و کالج است. این دانشگاه از ۳۹ کالج مستقل و ۶ دانشکده خصوصی دائمی
            تشکیل شده است. هر کالج یک نهاد مستقل است که مدیریت خود را دارد، اما
            همه تحت نظارت دانشگاه آکسفورد فعالیت می‌کنند. کالج‌ها مسئولیت ارائه
            آموزش، پشتیبانی از دانشجویان و فراهم کردن محل اقامت را بر عهده
            دارند. علاوه بر کالج‌ها، دانشگاه آکسفورد شامل بیش از ۱۰۰ دپارتمان،
            دانشکده و مؤسسه تحقیقاتی است که در زمینه‌های مختلف علمی فعالیت
            می‌کنند و آموزش و پژوهش را هماهنگ می‌کنند.
          </h5>
        ),
      },
    ],
  },
  { path: "/course/:courseId", element: <Course /> },
  { path: "/login", element: <Login /> },
  { path: "/panel", element: <PrivateRoute><Panel/></PrivateRoute>},
  { path: "/setting", element: <PrivateRoute><Setting/></PrivateRoute> },
];

export default router;
