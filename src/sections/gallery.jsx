import { useEffect, useState } from "react";
import data from "@/data/wedding-data.json";
import Image from "next/image";
import { createPortal } from "react-dom";
const images = data.photos;

export default function Gallery() {
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    document.body.style.overflow = activeImage ? "hidden" : "";
  }, [activeImage]);

  return (
    <div
      id="gallery"
      className="relative px-4 pt-4 pb-16"
      style={{
        backgroundImage: `url(${data.background.two})`,
        backgroundSize: "fit auto",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Masonry */}
      <div className="columns-3 gap-2 space-y-2 p-2 backdrop-filter bg-background/40 backdrop-brightness-[.75]">
        {images.map((src, i) => (
          <div
            key={i}
            className="break-inside-avoid cursor-pointer"
            onClick={() => setActiveImage(src)}
          >
            <Image
              src={src}
              alt=""
              width={600}
              height={800}
              className="w-full rounded-base hover:opacity-90 transition"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeImage &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-4"
            onClick={() => setActiveImage(null)}
          >
            <div className="relative max-w-4xl w-full">
              <Image
                src={activeImage}
                alt=""
                width={1200}
                height={1600}
                className="w-full rounded-lg"
              />
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
