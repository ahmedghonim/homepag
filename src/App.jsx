import "animate.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

function App() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative animate__animated animate__backInLeft">
        <img src="/hero-min.png" alt="" className="absolute top-0 -z-10" />
        <div className="md:pt-[12%] lg:pt-[10%] pr-[43%] lg:pr-[52%]">
          <h1 className=" text-5xl md:text-[170px] text-center text-white-A700_ab">
            تطبيق المدرب <br />
            الشخص
          </h1>
          <h1 className="md:pt-[50px]  m-auto text-xl md:text-[64px] text-center text-white-A700_ab md:leading-[80px]">
            تدريب وتغذية مع مدرب <br />
            شخصي مجانا
          </h1>
        </div>
      </section>
      {/* social  */}
      <div className="text-center flex flex-col items-center mt-[5%] animate__animated animate__backInRight">
        <div className="w-2/3 mx-auto relative">
          <img src="socail-min.png" alt="" />
          <a
            target="_blank"
            rel="noreferrer"
            href="https://apps.apple.com/sa/app/%D8%A7%D9%84%D9%85%D8%AF%D8%B1%D8%A8-%D8%A7%D9%84%D8%B4%D8%AE%D8%B5%D9%8A-%D8%AE%D8%B7%D8%A9-%D8%AA%D8%AF%D8%B1%D9%8A%D8%A8-%D9%88%D8%AA%D8%BA%D8%B0%D9%8A%D8%A9/id1594660397?l=ar?l=ar"
            className="absolute  top-0 left-[12%] w-[34%]  h-[100%]"
          ></a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://play.google.com/store/apps/details?id=com.kmm.untitled1"
            className="absolute cursor-pointer top-0 right-[16%] w-[34%] h-[100%] "
          ></a>
        </div>
        <h2 className="text-xl md:text-8xl text-center  text-white-A700">
          ثبت التطبيق الان مجانا
        </h2>
      </div>
      <AnimationOnScroll animateOnce={true} animateIn="animate__bounceIn">
        <img src="/phones-min.png" className="-mt-[10%]" />
      </AnimationOnScroll>
      <AnimationOnScroll animateOnce={true} animateIn="animate__backInDown">
        <section className="relative md:-mt-36 -mt-10">
          <img
            className="absolute -top-[95%] left-[7%] -z-10 w-[40%]"
            src="/yellwo-min.png"
            alt=""
          />
          <p className="mx-auto whitespace-nowrap text-[17px] md:text-[60px] text-center text-white-A700 ">
            <span className="text-white-A700 font-harmattan font-bold">
              تطبيق المدرب الشخصي ثوره في مجال التطبيقات{" "}
            </span>
            <span className="text-black-900 font-harmattan font-bold">
              الرياضية
            </span>
          </p>
        </section>
      </AnimationOnScroll>

      <AnimationOnScroll animateOnce={true} animateIn="animate__backInUp">
        <div className="text-center flex flex-col items-center mt-[5%]">
          <div className="w-2/3 mx-auto relative">
            <img src="socail-min.png" alt="" />
            <a
              target="_blank"
              rel="noreferrer"
              href="https://apps.apple.com/sa/app/%D8%A7%D9%84%D9%85%D8%AF%D8%B1%D8%A8-%D8%A7%D9%84%D8%B4%D8%AE%D8%B5%D9%8A-%D8%AE%D8%B7%D8%A9-%D8%AA%D8%AF%D8%B1%D9%8A%D8%A8-%D9%88%D8%AA%D8%BA%D8%B0%D9%8A%D8%A9/id1594660397?l=ar?l=ar"
              className="absolute  top-0 left-[12%] w-[34%]  h-[100%]"
            ></a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://play.google.com/store/apps/details?id=com.kmm.untitled1"
              className="absolute cursor-pointer top-0 right-[16%] w-[34%] h-[100%] "
            ></a>
          </div>
          <h2 className="text-xl md:text-8xl text-center  text-white-A700">
            ثبت التطبيق الان مجانا
          </h2>
        </div>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateOnce={true}
        animateIn="animate__lightSpeedInRight"
      >
        <section className="relative mt-10 h-fit">
          <img src="/fllow-min.png" alt="" className="absolute top-0" />
          <div className="grid grid-cols-2 gap-5 w-[95%]">
            <span className="text-2xl md:text-8xl flex flex-col md:gap-8 text-center mt-[5%] text-white-A700">
              <span className="text-white-A700 font-harmattan font-bold">
                متابعة تحت اشراف مدرب شخصي في اي{" "}
              </span>
              <span className="text-white-A700 font-harmattan font-bold relative">
                وقت
                <img
                  className="absolute -top-[50%] left-[20%] -z-10 w-[80%]"
                  src="/orang-min.png"
                  alt=""
                />
              </span>
            </span>
            <span className="mt-[10%] mr-[5%] md:text-5xl text-[11px]  text-right text-white-A700_99 md:tracking-[0.50px]">
              من اول لحضة تقوم فيها بتثبيت التطبيق <br />
              يقوم مدربك الشخصي بتوجيهك وتحديد افضل <br />
              الطرق واسرعها واكثرها ملائمة لك حسب مستواك وهدفك مع المتابعة
              اليومية
            </span>
          </div>
        </section>
      </AnimationOnScroll>

      <AnimationOnScroll
        animateOnce={true}
        animateIn="animate__lightSpeedInLeft"
      >
        <section className="relative mt-[55%]">
          <img
            src="/persentage-min.png"
            className="absolute right-0 left-0 w-full -z-10"
          />
          <div
            className="inset-x-[0] mx-auto md:text-5xl text-[11px] md:text-[44px] pt-[35%] text-center text-white-A700  w-full"
            size="txtHarmattanBold48"
          >
            حساب القيم الغذائية المناسبه لك باشراف المدرب الشخص
          </div>
          <div
            className="bottom-[0] inset-x-[0] mx-auto md:text-5xl text-[11px] md:text-[44px] text-center text-white-A700 w-full"
            size="txtHarmattanBold48"
          >
            مصممة حسب هدفك ومتغيرة حسب تقدمك{" "}
          </div>
          <div
            className="md:text-4xl text-[11px] text-center text-white-A700 top-[0]"
            size="txtHarmattanBold36"
          >
            السعرات الحرارية{" "}
          </div>
        </section>
      </AnimationOnScroll>

      <AnimationOnScroll animateOnce={true} animateIn="animate__bounceIn">
        <section className="relative">
          <img
            src="/rightleft-min.png"
            className="absolute w-[97%] right-0 -z-10"
          />
          <div className="flex flex-col md:gap-[50px] gap-2 justify-start pt-[15%]  w-[52%] ">
            <p className="inset-x-[0] mx-auto text-4xl text-[11px] md:text-[34px] text-right text-white-A700 w-max  bg-gray-500 bg-opacity-20 rounded-xl md:px-10 md:py-4 px-3 ml-[10%]">
              <img
                src="/fitness-min.png"
                alt=""
                className="ml-auto md:pb-3 -mb-3 md:mb-0 w-[25%] md:w-auto"
              />
              <div>جداول تدريب في الجيم مخصصه</div>
              <div className="-mt-6 md:mt-0">مشروحة بالفيديو</div>
            </p>

            <p className="md:pt-8 mx-auto text-4xl text-[11px] md:text-[34px] text-right text-white-A700 w-max bg-gray-500 bg-opacity-20 rounded-xl md:px-10 md:py-4 px-3 ">
              <img
                src="/home-min.png"
                alt=""
                className="ml-auto md:pb-3 w-[15%] -mb-3 md:mb-0  md:w-auto"
              />
              <div>جداول تدريبية في المنزل مخصصة</div>
              <div className="-mt-6 md:mt-0">حسب مستواك وهدفك</div>
            </p>
            <p className="inset-x-[0] mx-auto text-4xl text-[11px] md:text-[34px] text-right text-white-A700 w-max  bg-gray-500 bg-opacity-20 rounded-xl md:px-10 md:py-4 px-3 ml-[10%]">
              <img
                src="/add-min.png"
                alt=""
                className="ml-auto md:pb-3 w-[25%] -mb-3 md:mb-0  md:w-auto"
              />
              <div>خصص جدولك التدريبي بنفسك</div>
              <div className="-mt-6 md:mt-0">مع مكتبه ضخمه من التمارين</div>
            </p>
          </div>
        </section>
      </AnimationOnScroll>

      <AnimationOnScroll
        animateOnce={true}
        animateIn="animate__lightSpeedInDown"
      >
        <div className="text-center flex flex-col items-center mt-[10%] lg:mt-[20%]">
          <div className="w-2/3 mx-auto relative">
            <img src="socail-min.png" alt="" />
            <a
              target="_blank"
              rel="noreferrer"
              href="https://apps.apple.com/sa/app/%D8%A7%D9%84%D9%85%D8%AF%D8%B1%D8%A8-%D8%A7%D9%84%D8%B4%D8%AE%D8%B5%D9%8A-%D8%AE%D8%B7%D8%A9-%D8%AA%D8%AF%D8%B1%D9%8A%D8%A8-%D9%88%D8%AA%D8%BA%D8%B0%D9%8A%D8%A9/id1594660397?l=ar?l=ar"
              className="absolute  top-0 left-[12%] w-[34%]  h-[100%]"
            ></a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://play.google.com/store/apps/details?id=com.kmm.untitled1"
              className="absolute cursor-pointer top-0 right-[16%] w-[34%] h-[100%] "
            ></a>
          </div>
          <h2 className="text-xl md:text-8xl text-center  text-white-A700">
            ثبت التطبيق الان مجانا
          </h2>
        </div>
      </AnimationOnScroll>

      <AnimationOnScroll animateOnce={true} animateIn="animate__lightSpeedInUp">
        <section className="-mt-[15%]">
          <img src="/food-min.png" className="w-full absolute -z-10" />
          <div className="pt-[25%] pr-[12%] md:gap-5 flex flex-col gap-1 ">
            <div
              className="md:right-[11%] md:text-[38px] text-[11px] text-right text-white-A700 "
              size="txtHarmattanBold40"
            >
              جميع الانظمة الغذائية التي تخطر على بالك
            </div>
            <div
              className="md:text-[38px] text-[11px] text-right text-white-A700 "
              size="txtHarmattanBold40"
            >
              كيتو / اعتيادي / لوكارب / بدون حرمان
            </div>
            <div className="  md:right-[18%] md:text-[38px] text-[11px] text-right text-white-A700 top-[23%]">
              مكتبه ضخمة لجميع المواد الغذئية{" "}
            </div>

            <div
              className="md:text-[38px] text-[11px] text-right text-white-A700 top-[34%]"
              size="txtHarmattanBold40"
            >
              محسوبة العناصر الغذائية
            </div>
          </div>
        </section>
      </AnimationOnScroll>

      <AnimationOnScroll
        animateOnce={true}
        animateIn="animate__lightSpeedInRight"
      >
        <div className="text-center flex flex-col items-center mt-[45%]">
          <div className="w-2/3 mx-auto relative">
            <img src="socail-min.png" alt="" />
            <a
              target="_blank"
              rel="noreferrer"
              href="https://apps.apple.com/sa/app/%D8%A7%D9%84%D9%85%D8%AF%D8%B1%D8%A8-%D8%A7%D9%84%D8%B4%D8%AE%D8%B5%D9%8A-%D8%AE%D8%B7%D8%A9-%D8%AA%D8%AF%D8%B1%D9%8A%D8%A8-%D9%88%D8%AA%D8%BA%D8%B0%D9%8A%D8%A9/id1594660397?l=ar?l=ar"
              className="absolute  top-0 left-[12%] w-[34%]  h-[100%]"
            ></a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://play.google.com/store/apps/details?id=com.kmm.untitled1"
              className="absolute cursor-pointer top-0 right-[16%] w-[34%] h-[100%] "
            ></a>
          </div>
          <h2 className="text-xl md:text-8xl text-center  text-white-A700">
            ثبت التطبيق الان مجانا
          </h2>
        </div>
      </AnimationOnScroll>

      <AnimationOnScroll
        animateOnce={true}
        animateIn="animate__lightSpeedInLeft"
      >
        <section className="relative -mt-[10%]">
          <img src="/Component_7-min.png" className="absolute w-full -z-10" />
          <div className="flex flex-col items-center justify-start pt-[70%] pr-[15%] md:gap-10">
            <div
              className="md:text-[38px] text-[11px] text-right text-white-A700 w-full"
              size="txtHarmattanBold40"
            >
              تابع تقدمك واحسب نتائجك واهدافك{" "}
            </div>
            <div
              className="md:text-[38px] text-[11px] text-right text-white-A700 w-full"
              size="txtHarmattanBold40"
            >
              شاهد تقدمك ومستواك عبر الاحصائيات اليوميه والشهريه
            </div>
            <div
              className="md:text-[38px] text-[11px] text-right text-white-A700 w-full"
              size="txtHarmattanBold40"
            >
              راقب تقدم اوزانك في التدريب واحسب تطور الوزن في كل جلسة
            </div>
          </div>
        </section>
      </AnimationOnScroll>

      <AnimationOnScroll animateOnce={true} animateIn="animate__bounceIn">
        <div className="text-center flex flex-col items-center mt-[20%]">
          <div className="w-2/3 mx-auto relative">
            <img src="socail-min.png" alt="" />
            <a
              target="_blank"
              rel="noreferrer"
              href="https://apps.apple.com/sa/app/%D8%A7%D9%84%D9%85%D8%AF%D8%B1%D8%A8-%D8%A7%D9%84%D8%B4%D8%AE%D8%B5%D9%8A-%D8%AE%D8%B7%D8%A9-%D8%AA%D8%AF%D8%B1%D9%8A%D8%A8-%D9%88%D8%AA%D8%BA%D8%B0%D9%8A%D8%A9/id1594660397?l=ar?l=ar"
              className="absolute  top-0 left-[12%] w-[34%]  h-[100%]"
            ></a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://play.google.com/store/apps/details?id=com.kmm.untitled1"
              className="absolute cursor-pointer top-0 right-[16%] w-[34%] h-[100%] "
            ></a>
          </div>
          <h2 className="text-xl md:text-8xl text-center  text-white-A700">
            ثبت التطبيق الان مجانا
          </h2>
        </div>
      </AnimationOnScroll>
    </div>
  );
}

export default App;
