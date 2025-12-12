import { CountdownTimer } from "@/components/countDownTimer";
import { getTargetDate } from "@/helpers/formatDate";
import { vScale } from "@/helpers/utils";
import { useEffect, useState } from "react";
import data from "@/data/wedding-data.json"

export default function Countdown({ m }) {
  const event_date = data.date.countdown_time;

  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    const targetDate = getTargetDate(event_date);
    setCountdown(targetDate);
  }, [event_date, countdown]);
  return (
    <div className="relative">
      <div
          className="absolute inset-0 bg-fixed bg-cover"
          style={{
            backgroundImage: `url(${data.background.two})`,
            backgroundSize: "fit auto",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
      <div className="relative z-10 py-32 px-8 grid place-items-center text-xl">
        <m.div custom={0} initial="init" whileInView="anim" viewport={{ once: true }} variants={vScale} className="relative bg-primary text-background">
          <m.div custom={1} initial="init" whileInView="anim" viewport={{ once: true }} variants={vScale} className="flex justify-center text-2xl xs:text-xl my-4"> {data.date.full_date} </m.div>
          <m.div custom={2} initial="init" whileInView="anim" viewport={{ once: true }} variants={vScale} className="w-full h-full border-2 border-secondary absolute top-[0.375rem] left-[0.375rem]" />
          <CountdownTimer targetDate={countdown} m={m} />
        </m.div>
      </div>
    </div>
  );
}
