function App() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative">
        <img src="/hero.png" alt="" className="absolute top-0 -z-10" />
        <div className="pt-[12%] pr-[43%]">
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
      <div className="text-center flex flex-col items-center mt-[5%]">
        <img src="socail.png" alt="" className="w-2/3 mx-auto" />
        <h2 className="text-xl md:text-8xl text-center  text-white-A700">
          ثبت التطبيق الان مجانا
        </h2>
      </div>

      <img src="/phones.png" className="-mt-[10%]" />

      <section className="relative md:-mt-36 -mt-10">
        <img
          className="absolute -top-[95%] left-[7%] -z-10 w-[40%]"
          src="/yellwo.png"
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

      <div className="text-center flex flex-col items-center mt-[5%]">
        <img src="socail.png" alt="" className="w-2/3 mx-auto" />
        <h2 className="text-xl md:text-8xl text-center  text-white-A700">
          ثبت التطبيق الان مجانا
        </h2>
      </div>
      <section className="relative mt-10 h-fit">
        <img src="/fllow.png" alt="" className="absolute top-0" />
        <div className="grid grid-cols-2 gap-5 w-[95%]">
          <span className="text-2xl md:text-8xl flex flex-col md:gap-8 text-center mt-[5%] text-white-A700">
            <span className="text-white-A700 font-harmattan font-bold">
              متابعة تحت اشراف مدرب شخصي في اي{" "}
            </span>

            <span className="text-white-A700 font-harmattan font-bold relative">
              وقت
              <img
                className="absolute -top-[50%] left-[20%] -z-10 w-[80%]"
                src="/orang.png"
                alt=""
              />
            </span>
          </span>
          <span className="mt-[10%] mr-[5%] md:text-5xl text-[11px]  text-right text-white-A700_99 md:tracking-[0.50px]">
            من اول لحضة تقوم فيها بتثبيت التطبيق <br />
            يقوم مدربك الشخصي بتوجيهك وتحديد افضل <br />
            الطرق واسرعها واكثرها ملائمة لك حسب مستواك وهدفك مع المتابعة اليومية
          </span>
        </div>
      </section>
      <section className="relative mt-[55%]">
        <img
          src="/persentage.png"
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
      <section className="relative">
        <img src="/rightleft.png" className="absolute w-[97%] right-0 -z-10" />
        <div className="flex flex-col md:gap-[50px] gap-2 justify-start pt-[15%]  w-[52%] ">
          <p className="inset-x-[0] mx-auto text-4xl text-[11px] md:text-[34px] text-right text-white-A700 w-max  bg-gray-500 bg-opacity-20 rounded-xl md:px-10 md:py-4 px-3 ml-[10%]">
            <img
              src="/fitness.png"
              alt=""
              className="ml-auto md:pb-3 -mb-3 md:mb-0 w-[25%] md:w-auto"
            />
            <div>جداول تدريب في الجيم مخصصه</div>
            <div className="-mt-6 md:mt-0">مشروحة بالفيديو</div>
          </p>

          <p className="md:pt-8 mx-auto text-4xl text-[11px] md:text-[34px] text-right text-white-A700 w-max bg-gray-500 bg-opacity-20 rounded-xl md:px-10 md:py-4 px-3 ">
            <img
              src="/home.png"
              alt=""
              className="ml-auto md:pb-3 w-[15%] -mb-3 md:mb-0  md:w-auto"
            />
            <div>جداول تدريبية في المنزل مخصصة</div>
            <div className="-mt-6 md:mt-0">حسب مستواك وهدفك</div>
          </p>

          <p className="inset-x-[0] mx-auto text-4xl text-[11px] md:text-[34px] text-right text-white-A700 w-max  bg-gray-500 bg-opacity-20 rounded-xl md:px-10 md:py-4 px-3 ml-[10%]">
            <img
              src="/add.png"
              alt=""
              className="ml-auto md:pb-3 w-[25%] -mb-3 md:mb-0  md:w-auto"
            />
            <div>خصص جدولك التدريبي بنفسك</div>
            <div className="-mt-6 md:mt-0">مع مكتبه ضخمه من التمارين</div>
          </p>
        </div>
      </section>
      <div className="text-center flex flex-col items-center mt-[10%]">
        <img src="socail.png" alt="" className="w-2/3 mx-auto" />
        <h2 className="text-xl md:text-8xl text-center  text-white-A700">
          ثبت التطبيق الان مجانا
        </h2>
      </div>
      <section className="-mt-[15%]">
        <img src="/food.png" className="w-full absolute -z-10" />
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

      <div className="text-center flex flex-col items-center mt-[45%]">
        <img src="socail.png" alt="" className="w-2/3 mx-auto" />
        <h2 className="text-xl md:text-8xl text-center  text-white-A700">
          ثبت التطبيق الان مجانا
        </h2>
      </div>
      <section className="relative -mt-[10%]">
        <img src="/Component_7.png" className="absolute w-full -z-10" />
        <div className="flex flex-col items-center justify-start pt-[67%] pr-[15%] md:gap-10">
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

      <div className="text-center flex flex-col items-center mt-[20%]">
        <img src="socail.png" alt="" className="w-2/3 mx-auto" />
        <h2 className="text-xl md:text-8xl text-center  text-white-A700">
          ثبت التطبيق الان مجانا
        </h2>
      </div>
    </div>
  );
}

export default App;
