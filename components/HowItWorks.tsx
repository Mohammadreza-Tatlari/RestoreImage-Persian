import Image from "next/image";
// copied from testimonials and need to be changed in content and file name • 80% is done just need a revision
// this file is wholely placed instead of testimonials and some features are templated from testimonals
// can be revised again

function HowItWorks() {
  return (
    <div className="flex justify-between items-center w-full flex-col sm:mt-10 mt-6 pt-3 pb-8 border-t-2">
      <h1 className="pb-3 text-3xl">فلوچارت روند کارکرد جووناتور</h1>
      <div className="">
        <a href="/flowchart.png" target="_blank" className="cursor-pointer flex justify-center items-center">
          {/* wanted to make this image to be scaled and be zoomed while moving the mouse over it but still not accomplished
               it is treated in the way that the image is open in new tap and can be zoomed on within that page */}
          <Image
            alt="How it functions"
            src="/flowchart.png"
            className="mt-3 w-480 h-120 rounded-2xl hover:scale-105  transition-all duration-500 cursor-pointer transform-origin-center"
            width={700}
            height={400}
          />
        </a>
        {/* in this section 2 dives are going to be stand as column on top of each other  */}
        <div dir="rtl" className=" max-w-2xl break-words mt-2 ">
          <ul className="justify-start float-right text-right list-decimal space-y-2">
            <li>در این مرحله ما تصویر آپلود شده را به حافظه ابری ارسال می کنیم.</li>
            <li> سپس یک لینک از عکس بار گذاری شده از حافظه دریافت می کنیم.</li>
            <li> لینک تصویر اصلی را برای امکان پذیر بودن دسترسی آن به بکند ارسال می کنیم.</li>
            <li> سپس با استفاده از متد پست لینک تصویر را از طریق ای پی ای و فراهم کردن توکن به سایت رپلیکا ارسال می کنیم.</li>
            <li>  برای دریافت لینک عکس پردازش شده با استفاده از متن گت و یک لوپ که تا زمانی که تصویر دریافت نشده است آن را درخواست می کند.</li>
            <li> در آخرین مرحله تصویر پردازش شده را به کاربر نمایش می دهیم.</li>
          </ul>
        </div>
      </div>
      <div dir="rtl" className="justfiy-center text-center p-3 m-4 border-t-2">
        <h4 className="font-bold ">هدف این پروژه چیست؟</h4>
        <p className="pt-3 max-w-2xl indent-1 tracking-wide text-justify-center leading-relaxed">
         هدف من برای انجام این پروژه به چند مورد تقسیم می شه که یکیش این هست که می تونیم با ارسال و آپلود اون روی هاست خودمون به صورت شخصی از امکانات رپلیکا استفاده کنیم. همینطور میشه دسترسی به استفاده از این ابزار رو آسون تر کرد و دیگه نیازی به احراز هویت های تکراری نباشه. و از همه مهمتر شاید این باشه که بشه قوانین آپلود تصاویر رو بر حسب چیزی که مد نظر هست قرار بدیم.
        </p>
      </div>
    </div>
  );
}

export default HowItWorks;
