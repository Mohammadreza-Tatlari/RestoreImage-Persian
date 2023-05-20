import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full mt-5 border-b-2 pb-7 sm:px-4 px-2">
      <Link href="/" className="flex space-x-2">
        <Image
          alt="header text"
          src="/favicon.ico"
          className="sm:w-14 sm:h-14 w-9 h-9"
          width={36}
          height={36}
        />
        <h1 className="sm:text-5xl text-3xl font-bold ml-2 tracking-tight">
          juvenator
        </h1>
      </Link>
      <a
        href="https://vercel.com/"
        target="_blank"
        rel="noreferrer"
      >
        {/* <Image
          alt="Vercel Icon"
          src="/vercel.svg"
          className="sm:w-10 sm:h-[34px] w-8 h-[28px]"
          width={32}
          height={28}
        /> */}
        <svg
          className="h-10 w-10"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none">
            <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z" />
            <path
              d="M20 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16Zm-3 12H7a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2Zm-7-8H8a2 2 0 0 0-1.995 1.85L6 9v2a2 2 0 0 0 1.85 1.995L8 13h2a2 2 0 0 0 1.995-1.85L12 11V9a2 2 0 0 0-1.85-1.995L10 7Zm7 4h-3a1 1 0 0 0-.117 1.993L14 13h3a1 1 0 0 0 .117-1.993L17 11Zm-7-2v2H8V9h2Zm7-2h-3a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2Z"
              fill="#000"
            />
          </g>
        </svg>
      </a>
    </header>
  );
}

////////////////////////////////////////////////////////////////////

// import Image from "next/image";
// import Link from "next/link";

// export default function Header() {
//   return (
//     <header className="flex justify-between items-center w-full mt-5 border-b-2 pb-7 sm:px-4 px-2">
//       <Link href="/" className="flex space-x-2">
//         <Image
//           alt="header text"
//           src="/imageIcon.png"
//           className="sm:w-14 sm:h-14 w-9 h-9"
//           width={36}
//           height={36}
//         />
//         <h1 className="sm:text-5xl text-3xl font-bold ml-2 tracking-tight">
//           restorePhotos.io
//         </h1>
//       </Link>
//       <a
//         href="https://vercel.com/templates/next.js/ai-photo-restorer"
//         target="_blank"
//         rel="noreferrer"
//       >
//         <Image
//           alt="Vercel Icon"
//           src="/vercelLogo.png"
//           className="sm:w-10 sm:h-[34px] w-8 h-[28px]"
//           width={32}
//           height={28}
//         />
//       </a>
//     </header>
//   );
// }
