import { vFadeInBottom, vFadeInLeft, vFadeInRight, vScale } from "@/helpers/utils";
import Link from "next/link";
import data from "@/data/wedding-data.json"

export default function Event({ m }) {
  return (
    <div className="relative overflow-hidden" id="event">
      <div
        className="absolute inset-0 bg-fixed bg-cover"
        style={{
          backgroundImage: `url(${data.background.one})`,
          backgroundSize: "auto",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>
      <m.div className="relative z-10 grid place-items-center text-primary text-center font-semibold antialiased py-8 px-8 xs:px-4">
        <div>
          <m.div custom={0} initial="init" whileInView="anim" viewport={{ once: true }} variants={vScale} className="relative flex flex-col justify-center items-center p-8 backdrop-filter bg-background/40 backdrop-brightness-[.75] mb-2">
            <m.div custom={8} initial="init" whileInView="anim" viewport={{ once: true }} variants={vFadeInBottom} className="text-xl xs:text-lg"> Alamat </m.div>
            <m.div custom={9} initial="init" whileInView="anim" viewport={{ once: true }} variants={vFadeInBottom} className="text-md xs:text-sm font-fira">
              {data.address}
            </m.div>
            <Link
              href={data.map_url}
              className="text-sm xs:text-xs border mt-4 p-2 border-primary hover:backdrop-sepia-0 hover:bg-white/30 z-10"
            >
              <m.div custom={10} initial="init" whileInView="anim" viewport={{ once: true }} variants={vScale} className="flex justify-center items-center gap-1">
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="w-4 h-4"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                  />
                </svg>{" "}
                Lihat Lokasi
              </m.div>
            </Link>
          </m.div>
        </div>
      </m.div>
    </div>
  );
}
