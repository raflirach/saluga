import { vFadeInLeft, vFadeInRight, vFadeInTop, vScale } from "@/helpers/utils";
import data from "@/data/wedding-data.json";

export default function Bride({ m }) {
  return (
    <div className="relative" id="bride">
      <div
        className="absolute inset-0 bg-fixed bg-cover"
        style={{
          backgroundImage: `url(${data.background.one})`,
          backgroundSize: "auto",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>
      <m.div className="relative z-10 py-8 px-8 xs:px-4 grid place-items-center text-primary text-center font-semibold antialiased">
        <m.div
          custom={1}
          initial="init"
          whileInView="anim"
          viewport={{ once: true }}
          variants={vScale}
          className="relative flex flex-col justify-center items-center p-8 backdrop-filter bg-background/40 backdrop-brightness-[.75]"
        >
          <m.div
            custom={2}
            initial="init"
            whileInView="anim"
            viewport={{ once: true }}
            variants={vScale}
            className="absolute border-2 border-solid w-full h-full -top-2 -left-2 border-primary"
          />
          <m.div
            custom={3}
            initial="init"
            whileInView="anim"
            viewport={{ once: true }}
            variants={vFadeInTop}
            className="mb-4 text-lg xs:text-sm font-fira"
          >
            بِسْــــــــــــــــــمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ
          </m.div>
          <m.div
            custom={4}
            initial="init"
            whileInView="anim"
            viewport={{ once: true }}
            variants={vFadeInTop}
            className="mb-4 text-xl xs:text-md"
          >
            Assalamu’alaikum Wr. Wb.
          </m.div>
          <m.div
            custom={5}
            initial="init"
            whileInView="anim"
            viewport={{ once: true }}
            variants={vFadeInTop}
            className="text-center font-fira xs:text-sm"
          >
            Puji dan Syukur kita panjatkan kehadirat Allah SWT, atas segala
            limpahan Rahmat Taufik Hidayah serta nikmat yang tak terhingga.
            Sholawat serta salam semoga tetap tercurah kepada Baginda Nabi
            Muhammad SAW beserta keluarga, para sahabat, serta umatnya hingga
            akhir zaman.
          </m.div>
          <m.div
            custom={6}
            initial="init"
            whileInView="anim"
            viewport={{ once: true }}
            variants={vFadeInTop}
            className="text-center font-fira xs:text-sm mt-2"
          >
            Bersama ini kami mengundang Bapak/Ibu/Saudara(i) kiranya berkenan hadir dalam Acara Syukuran Saluga (Saung Luhur Gawir) yang akan dilaksanakan pada:
          </m.div>
        </m.div>
      </m.div>
    </div>
  );
}
