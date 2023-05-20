import { NextPage } from "next";
import Image from "next/image";
import Header from "../components/Header";
import Head from "next/head";
import Link from "next/link";
import HowItWorks from "../components/HowItWorks";
import Footer from "../components/Footer";


const Home: NextPage = () => {
  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>Juvenator.net</title>
      </Head>
      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-28 mt-20">
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          className="border rounded-2xl py-1 px-4 text-slate-500 text-sm mb-5 hover:scale-105 transition duration-300 ease-in-out"
        >
          استفاده شده توسط بیش از <span className="font-semibold">۲۱۵۸</span> کاربر راضی
        </a>
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-slate-900 sm:text-7xl">
          تصاویر قدیمی خود را{" "}
          <span className=" relative whitespace-nowrap text-[#3290EE]">
            <p className="m-5"></p>
            <span className="relative">با استفاده از هوش مصنوعی</span>
            <p className="m-5"></p>


          </span>{" "}
          بازیابی کنید
        </h1>

        <p className="mx-auto mt-12 max-w-xl text-lg text-slate-700 leading-7">
          تصویری قدیمی و بلور خودت رو سریع و آنلاین بازسازی کن! 
        </p>
        <div className="flex justify-center space-x-4">
          <a
            className="bg-white rounded-xl text-black font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-gray-100 border"
            href="https://github.com/Mohammadreza-Tatlari/restorePhotoFarsi"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            برای دیدن منابع به اینجا یه سر بزن{" "}
          </a>
          
          <Link
            className="bg-black rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-black/80"
            href="/restore"
          >
            تصویرت رو بازیابی کن
          </Link>
        </div>
        <div className="flex justify-between items-center w-full flex-col sm:mt-10 mt-6">
          <div className="flex flex-col space-y-10 mt-4 mb-16">
            <div className="flex sm:space-x-2 sm:flex-row flex-col">
              <div>
                {/* first comperasion */}
                <h2 className="mb-1 font-medium text-lg">تصویر اصلی</h2>
                <Image
                  alt="Original photo"
                  src="/come.jpg"
                  className="w-96 h-96 rounded-2xl"
                  width={400}
                  height={400}
                />
              </div>
              <div className="sm:mt-0 mt-8">
                <h2 className="mb-1 font-medium text-lg">تصویر بازیابی شده</h2>
                <Image
                  alt="Restored photo"
                  width={400}
                  height={400}
                  src="/outer.jpg"
                  className="w-96 h-96 rounded-2xl sm:mt-0 mt-2"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
        <HowItWorks />
        <Footer />
    </div>
  );
};

export default Home;



