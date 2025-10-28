import Link from "next/link";
import MusicNoteRoundedIcon from "@mui/icons-material/MusicNoteRounded";
import MusicOffRoundedIcon from "@mui/icons-material/MusicOffRounded";
import { motion as m } from "framer-motion";

export default function Navbar({
  audioElement,
  isPlay,
  setIsPlay,
  handleOnClick,
}) {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        duration: 2,
        delay: 3,
      }}
      className="navbar-containter bottom-0 fixed left-1/2 -translate-x-2/4 z-50"
    >
      <div className="navbar backdrop-filter backdrop-brightness-75">
        <div className="icons">
          <Link href={"#bride"} scroll={false}>
            <m.span
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                duration: 1,
                delay: 3.2,
              }}
              className="span-hover"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="h-8 w-8 xs:w-6 xs:h-6"
              >
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
              </svg>
            </m.span>
          </Link>

          <Link href={"#gallery"} scroll={false}>
            <m.span
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                duration: 1,
                delay: 3.8,
              }} className="span-hover">
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="h-8 w-8 xs:w-6 xs:h-6"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                />
              </svg>
            </m.span>
          </Link>

          <m.span
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                duration: 1,
                delay: 4.2,
              }} onClick={handleOnClick}>
            <svg className="w-8 h-8 xs:w-6 xs:h-6">
              {isPlay ? <MusicNoteRoundedIcon /> : <MusicOffRoundedIcon />}
            </svg>
          </m.span>
        </div>
      </div>
    </m.div>
  );
}
