import Image from "next/image";

export default function TratoracoSection() {
  const imgs = Array.from({ length: 8 }, (_, i) => {
    const n = String(i + 1).padStart(2, '0');
    return {
      src: `/img/tratoraco/tratoraco-${n}.png`,
      alt: `Tratoraço ${i + 1}`,
    };
  });

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
