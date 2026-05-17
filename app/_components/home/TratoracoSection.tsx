import Image from "next/image";

export default function TratoracoSection() {
  const imgs = [
    { src: "/img/tratoraco/tratoraco-01.png", alt: "Tratoraço 1" },
    { src: "/img/tratoraco/tratoraco-02.png", alt: "Tratoraço 2" },
    { src: "/img/tratoraco/tratoraco-03.png", alt: "Tratoraço 3" },
    { src: "/img/tratoraco/tratoraco-04.png", alt: "Tratoraço 4" },
  ] as const;

  return (
    <section className="tratoraco-section" id="tratoraco">
      <div className="container tratoraco-layout">
        <div className="tratoraco-copy reveal">
          <div className="section-badge">Tratoraço</div>
          <h2 className="section-title">A tradição rural toma a avenida</h2>
          <p>
            O Tratoraço celebra produtores, famílias e máquinas que movem a
            economia do campo. Uma experiência visual forte, popular e simbólica
            dentro do CampoAgro.
          </p>
          <div className="tratoraco-stats">
            <div className="tratoraco-stat">
              <strong>+250</strong>
              <span>tratores esperados</span>
            </div>
            <div className="tratoraco-stat">
              <strong>100%</strong>
              <span>identidade rural</span>
            </div>
          </div>
        </div>
        <div className="tratoraco-carousel reveal" data-tratoraco-track>
          {imgs.map(({ src, alt }) => (
            <Image
              key={src}
              src={src}
              alt={alt}
              width={720}
              height={480}
              sizes="(max-width: 768px) 85vw, 360px"
              quality={78}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
