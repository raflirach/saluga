import { motion } from "framer-motion";
import { useRouter } from "next/router";
import data from "@/data/wedding-data.json";

export default function Opening({ handleOnOpen, transition }) {
  const router = useRouter();
  const { query } = router;
  const tm = query?.tm;

  return (
    <motion.div
      className="absolute bg-background z-50 h-screen xs:px-4 px-8 grid place-items-center text-xl max-w-[640px]"
      style={{
        backgroundImage: `url(${data.background.one})`,
        backgroundSize: "auto",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      variants={transition}
    >
      <div className="relative flex flex-col justify-center items-center p-8 backdrop-filter bg-background/40 backdrop-brightness-[.75] font-alice">
        <div className="absolute border-2 border-solid w-full h-full -top-2 -left-2 border-primary z-[-10]"></div>
        <div className="text-xl font-bold">Selamat Datang</div>
        <div className="text-sm italic">Bapak/Ibu/Saudara/i</div>
        <div className="text-xl my-2 font-alice font-bold">
          {tm ? tm : "Tamu Undangan"}
        </div>
        <div className="flex justify-center items-center">
          <img
            src={`./theme/${data.theme}/love-latter.svg`}
            className="h-20 w-20 mb-4 animate-bounce-slow"
          />
        </div>

        <div className="text-sm">
          Tanpa mengurangi rasa hormat, kami mengundang rekan-rekan sekalian
          untuk hadir dan turut memeriahkan acara Syukuran Saluga, serta memohon doa
          agar acara ini berjalan lancar dan penuh kebersamaan.
        </div>
        <button
          className="text-lg border mt-6 px-4 py-1 border-primary text-primary bg-background rounded-md hover:text-background hover:bg-primary hover:border-background"
          onClick={() => handleOnOpen()}
        >
          Buka Undangan
        </button>
      </div>
    </motion.div>
  );
}
