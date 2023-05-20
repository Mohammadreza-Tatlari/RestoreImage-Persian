import { AnimatePresence, motion } from "framer-motion";
import { NextPage } from "next";
import Head from "next/head"; //this part need revision
import Image from "next/image";
import { useState } from "react";
import CountUp from "react-countup";
import { UploadDropzone } from "react-uploader"; //
import { Uploader } from "uploader"; //
import { CompareSlider } from "../components/CompareSlider"; //done
import Footer from "../components/Footer"; //done
import Header from "../components/Header"; //done
import LoadingDots from "../components/LoadingDots"; //done
import ResizablePanel from "../components/ResizablePanel"; //done
import Toggle from "../components/Toggle"; //done
import appendNewToName from "../utils/appendNewToName"; //done
import downloadPhoto from "../utils/downloadPhoto"; //done
import NSFWPredictor from "../utils/nsfwCheck"; //is not neccessary for this project. can be added later
import va from "@vercel/analytics"; // needs vercel enterprise account

// Configuration for the uploader
const uploader = Uploader({
  apiKey: !!process.env.NEXT_PUBLIC_UPLOAD_API_KEY
    ? process.env.NEXT_PUBLIC_UPLOAD_API_KEY
    : "free",
});
const options = {
  maxFileCount: 1,
  mimeTypes: ["image/jpeg", "image/png", "image/jpg"],
  editor: { images: { crop: false } },
  styles: { colors: { primary: "#000" } },

  //this section need drastic changes on NSFW tracker because the feature only use in vercel enterprise version.
  onValidate: async (file: File): Promise<undefined | string> => {
    let isSafe = true; // in this line I want to change isfase to True to allow all images to be uploaded
    try {
      isSafe = await NSFWPredictor.isSafeImg(file);
      //console.log is placed instead of va.track due to dysfunctionality of va.track
      if (!isSafe) console.log("there is problem in safty of uploaded picture"); //va.track("NSFW Image blocked")
    } catch (error) {
      console.error("NSFW predictor threw an error", error);
    }
    return isSafe
      ? undefined
      : "Detected a NSFW image which is not allowed. If this was a mistake, please contact me at mohammadrezat@gmail.com";
  },
};

//1.write the Home function first
const Home: NextPage = () => {
  const [originalPhoto, setOriginalPhoto] = useState<string | null>(null);
  const [restoredImage, setRestoredImage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [restoredLoaded, setRestoredLoaded] = useState<boolean>(false);
  const [sideBySide, setSideBySide] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [photoName, setPhotoName] = useState<string | null>(null);
  //9.complete this part that is related to upload zone
  const UploadDropZone = () => (
    <UploadDropzone
      uploader={uploader}
      options={options}
      onUpdate={(file) => {
        if (file.length !== 0) {
          setPhotoName(file[0].originalFile.originalFileName);
          setOriginalPhoto(file[0].fileUrl.replace("raw", "thumbnail"));
          generatePhoto(file[0].fileUrl.replace("raw", "thumbnail"));
        }
      }}
      width="670px"
      height="250px"
    />
  );

  async function generatePhoto(fileUrl: string) {
    await new Promise((resolve) => setTimeout(resolve, 500));
    setLoading(true);
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ imageUrl: fileUrl }),
    });

    let newPhoto = await res.json();
    if (res.status !== 200) {
      setError(newPhoto);
    } else {
      setRestoredImage(newPhoto);
    }
    setLoading(false);
  }

  //2.write the return function and elements
  return (
    //3.complete this main div first
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>بازیابی تصویر</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* 4.add the header to folder */}
      <Header />
      {/* 5.persianize and add the main part to the component and import dependencies side by side of it  */}
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-4 sm:mb-0 mb-8">
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          className="p-1 pb-2 border rounded-2xl py-1 px-4 text-slate-500 text-sm mb-5 hover:scale-105 transition duration-300 ease-in-out"
        >
          برای مشاهده و چگونگی دقیق تر کارکرد این اپ به {" "}
          <span className="font-bold">لینک اینجا</span>.
          مراجعه کن
        </a>
        <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-normal text-slate-900 sm:text-6xl mb-5">
           عکسات رو بازیابی کن 
        </h1>
        <p className=" text-slate-500">
          {" "}
          {/* 6.add countUp to the project and import its dependency */}
          {/* Obtained this number from Vercel: based on how many serverless invocations happened. */}
          تا به حال 
          <CountUp start={1000} end={3231} duration={5} separator="," /> 
             تصویر، پردازش شده  
        </p>
        {/* 7.work on Resizalbe Panel and  importation */}
        <ResizablePanel>
          <AnimatePresence exitBeforeEnter>
            {/* 8.complete the motion.div and its children */}
            <motion.div className="flex justify-between items-center w-full flex-col mt-4">
              <Toggle
                className={`${restoredLoaded ? "visible" : "invisible"} mb-6`}
                sideBySide={sideBySide}
                setSideBySide={(newVal) => setSideBySide(newVal)}
              />
              {/* 11.comparesider  and restoredLoaded */}
              {restoredLoaded && sideBySide && (
                <CompareSlider
                  original={originalPhoto!}
                  restored={restoredImage!}
                />
              )}
              {/* 10. prepare the Uploadzone and its properties */}
              {!originalPhoto && <UploadDropZone />}
              {originalPhoto && !restoredImage && (
                <Image
                  alt="original photo"
                  src={originalPhoto}
                  className="rounded-2xl"
                  width={475}
                  height={475}
                />
              )}
              {/* 12.to dispay the image and compare the original to its restored format */}
              {restoredImage && originalPhoto && !sideBySide && (
                <div className="flex sm:space-x-4 sm:flex-row flex-col">
                  <div>
                    <h2 className="mb-1 font-medium text-lg">عکس اصلی</h2>
                    <Image
                      alt="original photo"
                      src={originalPhoto}
                      className="rounded-2xl relative"
                      width={475}
                      height={475}
                    />
                  </div>
                  <div className="sm:mt-0 mt-8">
                    <h2 className="mb-1 font-medium text-lg">عکس بازیابی شده</h2>
                    <a href={restoredImage} target="_blank" rel="noreferrer">
                      <Image
                        alt="restored photo"
                        src={restoredImage}
                        className="rounded-2xl relative sm:mt-0 mt-2 cursor-zoom-in"
                        width={475}
                        height={475}
                        onLoadingComplete={() => setRestoredLoaded(true)}
                      />
                    </a>
                  </div>
                </div>
              )}
              {/* 13. loading and styling */}
              {loading && (
                <button
                  disabled
                  className="bg-black rounded-full text-white font-medium px-4 pt-2 pb-3 mt-8 hover:bg-black/80 w-40"
                >
                  <span className="pt-4">
                    <LoadingDots color="white" style="large" />
                  </span>
                </button>
              )}
              {/* 14.catching error */}
              {error && (
                <div
                  className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl mt-8"
                  role="alert"
                >
                  <span className="block sm:inline">{error}</span>
                </div>
              )}
              {/* 15.to upload new photo */}
              <div className="flex space-x-2 justify-center">
                {originalPhoto && !loading && (
                  <button
                    onClick={() => {
                      setOriginalPhoto(null);
                      setRestoredImage(null);
                      setRestoredLoaded(false);
                      setError(null);
                    }}
                    className="bg-black rounded-full text-white font-medium px-4 py-2 mt-8 hover:bg-black/80 transition"
                  >
                    بارگذاری عکس جدید
                  </button>
                )}
                {/* 16. download the restored photo */}
                {restoredLoaded && (
                  <button
                    onClick={() => {
                      downloadPhoto(
                        restoredImage!,
                        appendNewToName(photoName!)
                      );
                    }}
                    className="bg-white rounded-full text-black border font-medium px-4 py-2 mt-8 hover:bg-gray-100 transition"
                  >
                    دانلود تصویر بازیابی شده
                  </button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </ResizablePanel>
      </main>
      {/* 17.add footer to the page */}
      <Footer />
    </div>
  );
};
export default Home;
