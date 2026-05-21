"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";

import SectionHeader from "./SectionHeader";

type GalleryImage = {
  src: string;
  alt: string;
};

type GalleryYear = "2023" | "2025";

const OFFICIAL_2023_GROUPS = [
  {
    stamp: "07082023142057",
    names:
      "DSC03060,DSC03061,DSC03063,DSC03065,DSC03068,DSC03070,DSC03073,DSC03074,DSC03075,DSC03078,DSC03080,DSC03081,DSC03087,DSC03091,DSC03092,DSC03093,DSC03095,DSC03099,DSC03101,DSC03104,DSC03106,DSC03109,DSC03111,DSC03114,DSC03115,DSC03116,DSC03117,DSC03118,DSC03119,DSC03120".split(
        ",",
      ),
  },
  {
    stamp: "07082023142230",
    names:
      "DSC03121,DSC03122,DSC03123,DSC03124,DSC03125,DSC03126,DSC03127,DSC03128,DSC03129,DSC03130,DSC03131,DSC03132,DSC03133,DSC03134,DSC03135,DSC03136,DSC03137,DSC03138,DSC03139,DSC03140,DSC03141,DSC03142,DSC03143,DSC03144,DSC03145,DSC03146,DSC03147,DSC03148,DSC03149,DSC03150".split(
        ",",
      ),
  },
  {
    stamp: "07082023142417",
    names:
      "DSC03151,DSC03152,DSC03153,DSC03154,DSC03155,DSC03156,DSC03157,DSC03158,DSC03159,DSC03160,DSC03161,DSC03162,DSC03163,DSC03164,DSC03165,DSC03166,DSC03167,DSC03168,DSC03169,DSC03170,DSC03171,DSC03172,DSC03173,DSC03174,DSC03175,DSC03176,DSC03177,DSC03178,DSC03179,DSC03180".split(
        ",",
      ),
  },
  {
    stamp: "07082023142535",
    names:
      "DSC03182,DSC03183,DSC03184,DSC03185,DSC03186,DSC03187,DSC03188,DSC03189,DSC03190,DSC03191,DSC03192,DSC03193,DSC03194,DSC03195,DSC03196,DSC03197,DSC03198,DSC03200,DSC03201,DSC03202,DSC03203,DSC03204,DSC03205,DSC03206,DSC03207,DSC03208,DSC03213,DSC03214,DSC03215".split(
        ",",
      ),
  },
  {
    stamp: "07082023142643",
    names:
      "DSC03217,DSC03218,DSC03219,DSC03220,DSC03221,DSC03222,DSC03223,DSC03224,DSC03225,DSC03226,DSC03227,DSC03228,DSC03229,DSC03230,DSC03231,DSC03232,DSC03233,DSC03234,DSC03235,DSC03236,DSC03237,DSC03238,DSC03239,DSC03240,DSC03241,DSC03242,DSC03243,DSC03244,DSC03245,DSC03246".split(
        ",",
      ),
  },
  {
    stamp: "07082023142752",
    names:
      "DSC03247,DSC03248,DSC03249,DSC03250,DSC03251,DSC03252,DSC03253,DSC03254,DSC03255,DSC03256,DSC03257,DSC03258,DSC03259,DSC03260,DSC03261,DSC03262,DSC03263,DSC03264,DSC03265,DSC03266,DSC03267,DSC03268,DSC03269,DSC03270,DSC03271,DSC03272,DSC03273,DSC03274,DSC03275,DSC03276".split(
        ",",
      ),
  },
  {
    stamp: "07082023143037",
    names:
      "DSC03278,DSC03279,DSC03280,DSC03281,DSC03283,DSC03284,DSC03285,DSC03286,DSC03287,DSC03288,DSC03289,DSC03290,DSC03291,DSC03292,DSC03293,DSC03294,DSC03295,DSC03296,DSC03297,DSC03298,DSC03299,DSC03300,DSC03301,DSC03302,DSC03303,DSC03304,DSC03305,DSC03306,DSC03307,DSC03308".split(
        ",",
      ),
  },
  {
    stamp: "07082023143241",
    names:
      "DSC03309,DSC03310,DSC03311,DSC03312,DSC03313,DSC03314,DSC03315,DSC03316,DSC03317,DSC03318,DSC03319,DSC03320,DSC03321,DSC03322,DSC03323,DSC03324,DSC03325,DSC03326,DSC03327,DSC03328,DSC03329,DSC03330,DSC03331,DSC03332,DSC03333,DSC03334,DSC03336,DSC03337,DSC03338,DSC03339".split(
        ",",
      ),
  },
  {
    stamp: "07082023143435",
    names:
      "DSC03340,DSC03341,DSC03342,DSC03345,DSC03347,DSC03348,DSC03350,DSC03351,DSC03352,DSC03353,DSC03355,DSC03361,DSC03363,DSC03364,DSC03368".split(
        ",",
      ),
  },
];

const OFFICIAL_2023_IMAGES: GalleryImage[] = OFFICIAL_2023_GROUPS.flatMap(
  ({ stamp, names }) =>
    names.map((name, index) => ({
      src: `https://ecrie.com.br/sistema/conteudos/imagem/g_177_${index}_${30 - index}_${stamp}.jpg`,
      alt: `1ª Festa CampoAgro 2023 - ${name}`,
    })),
);

const DRIVE_2025_FILES = [
  ["1mvoDqdGuHRiL8htQcMEmaH_knu3Eap5u", "_DSC7036.JPG"],
  ["1UETRxMBMGJDjbLYIQ6JyN8nKsuak2cC1", "_DSC7037.JPG"],
  ["1ZOaxzEUg0LTm-YfJyLTMOZk8Y3NmsPep", "_DSC7038.JPG"],
  ["1ImSTo8vZeHoj-6Io-MhxPcM-yBH3PrUg", "_DSC7039.JPG"],
  ["1jWYM6eLXt4j2W44Re3Y_1RONgq1eamYA", "_DSC7040.JPG"],
  ["1hlSpjnqqoxEAP0OJ5npDpm8OS77iyErH", "_DSC7041.JPG"],
  ["1gsV_1kR_4-6XZROUg6bV79fGLtfQZMOq", "_DSC7042.JPG"],
  ["1vgpR9yMaod6z5bTp7YX0c6qzD43Nhkrb", "_DSC7043.JPG"],
  ["1AVQ9sKoKV3dw4mNeAA4DhzeMkvLBVYMc", "_DSC7044.JPG"],
  ["1ftus3VrA84aFWBwRHH7a7aVL0iH75fed", "_DSC7045.JPG"],
  ["18STLg5tMxT6msj7iOhiS_XrvejnIkLZI", "_DSC7047.JPG"],
  ["1ToWBbYikZn33fAfywuYaYRkOlZNsYQGk", "_DSC7048.JPG"],
  ["1xh9NjTi91JqX51FIh1mHDqyTVdhPMJc-", "_DSC7049.JPG"],
  ["1jT5lYu9rMORDMs05CVkg9hFQqsEdzZp0", "_DSC7050.JPG"],
  ["1fIcD8EDkPb5JVBaXiSPoAIT0MOZyNxsF", "_DSC7051.JPG"],
  ["1iMcuW7VmXDTcZs6cx_alEhO69EnIPXMi", "_DSC7052.JPG"],
  ["17i-daLJ9_WUPOkG0DIOEGoPv5eTxScOq", "_DSC7053.JPG"],
  ["1mEWyI_YaKAmSIca3MUP0zqj5UQBkP1JP", "_DSC7054.JPG"],
  ["1sb7rOzoKdQY2NGcQsYy24xcKdqrcakNu", "_DSC7055.JPG"],
  ["1O0Yd6hiiOJWr0IJLLFY8HygoEIaVN9yK", "_DSC7056.JPG"],
  ["1C8y4S6hBYFh4oUNGwZglWkYGy37Cc_GX", "_DSC7057.JPG"],
  ["12w7cIJJVAh2mVj2KIgtVQPmwqHmWYPuU", "_DSC7058.JPG"],
  ["1cgGm8954uXgP7N0zjirddXNP12W6Xf-R", "_DSC7059.JPG"],
  ["1LSRzV7-Lulw_EHzvLZgQP8EKPXkqRDuS", "_DSC7060.JPG"],
  ["1seEcigTJqKcDSWZpc0tFYcjcS9whoxj3", "_DSC7061.JPG"],
  ["1p9WsCVoT1TWcDaFIEmeYQs7PMTojD99u", "_DSC7062.JPG"],
  ["1eFbabFyeFblrMuso3Xu1_FTqM0eSt6Ef", "_DSC7063.JPG"],
  ["1zfzXW5kJL6I0Cv12iSpqICShykR6GQfs", "_DSC7064.JPG"],
  ["1SJD0-hzhLD0hdQItQUTOa0jL3Mz2eEsB", "_DSC7065.JPG"],
  ["156dx6BYed2Q3pCN3oKC_DWrXu2Ei8oAd", "_DSC7066.JPG"],
  ["1GLQX_fPtlaVUDl_rRswBgWMc-ija6D9v", "_DSC7067.JPG"],
  ["15tH6sHMYCzU73EP1dx-0Bv43FSQUTnyd", "_DSC7068.JPG"],
  ["100DOB9C_FNR-3V0P0JmXsreCGNiYRtP-", "_DSC7069.JPG"],
  ["1efLFkN0p27e5Cl-W5_PdgfpCPmKHRGFs", "_DSC7070.JPG"],
  ["1GQcJUijrsNMFRFabnlovhjA0TrHWPoe-", "_DSC7071.JPG"],
  ["1hnCN9afYao5vkRjgVfrabZq30uIHGJoT", "_DSC7072.JPG"],
  ["1R5tIDdA2kpFW96fDIEjWRSXNpsGr133t", "_DSC7073.JPG"],
  ["1Xc9h75DbHFey4TQ4kibSScnABM3AiQTA", "_DSC7074.JPG"],
  ["1lkHCHjES27lio4FSOTvlkIjYCKBY19pr", "_DSC7075.JPG"],
  ["1NELaViXAIPoLKADo97oNZXE8avlHrSDP", "_DSC7076.JPG"],
  ["110jy7Ftv7q0eYanQcBx40TAPlm0zdGYt", "_DSC7077.JPG"],
  ["1ZDrD-dEMa8JDcyG-GtkgBT8aKakpcb-n", "_DSC7078.JPG"],
  ["1qrgSEbTJgOugyhzBrLJ1r7GRjQ4Ev1nS", "_DSC7079.JPG"],
  ["1IXiMR9iWQaBOAy_z8l4XPWpV9Qjw_GpU", "_DSC7080.JPG"],
  ["1Z4SqkzRzWd8Q5byBl20QMlR802tsnluD", "_DSC7081.JPG"],
  ["1Bpm_IB695dmSno_FPvf5_PUXLC0MG-9P", "_DSC7082.JPG"],
  ["1fUA1aOGjptg4uqxmcBuBb9I0XbndpJEJ", "_DSC7083.JPG"],
  ["1K1LGebVU2yYbd9QOlCPGMYdpdNzm8VXO", "_DSC7084.JPG"],
  ["1DLnudnKhZJrZNBZAtJ74o6XeM8f749Zg", "_DSC7085.JPG"],
  ["1GBqWQAG-RV4zSkwW0XQsfJI9rO961NRz", "_DSC7086.JPG"],
] as const;

const DRIVE_2025_IMAGES: GalleryImage[] = DRIVE_2025_FILES.map(
  ([, name]) => ({
    src: `/img/tratoraco-2025/${name}`,
    alt: `Tratoraço 2025 - ${name}`,
  }),
);

const GALLERIES: Record<
  GalleryYear,
  {
    year: GalleryYear;
    title: string;
    eyebrow: string;
    description: string;
    images: GalleryImage[];
  }
> = {
  "2023": {
    year: "2023",
    title: "Tratoraço 2023",
    eyebrow: "Registros oficiais da primeira edição",
    description:
      "Primeira edição registrada oficialmente na cidade de Campo do Tenente, PR.",
    images: OFFICIAL_2023_IMAGES,
  },
  "2025": {
    year: "2025",
    title: "Tratoraço 2025",
    eyebrow: "Fotos oficiais do Drive",
    description:
      "Segunda edição do evento Tratoraço realizado na cidade de Campo do Tenente, PR.",
    images: DRIVE_2025_IMAGES,
  },
};

const PREVIEW_LIMIT = 14;

export default function MemoriasSection() {
  const [selectedYear, setSelectedYear] = useState<GalleryYear>("2023");
  const [activeIndex, setActiveIndex] = useState(0);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);

  const gallery = GALLERIES[selectedYear];
  const activeImageInGallery = gallery.images[activeIndex] ?? gallery.images[0];
  const previewImages = gallery.images.slice(0, PREVIEW_LIMIT);

  const selectYear = (year: GalleryYear) => {
    setSelectedYear(year);
    setActiveIndex(0);
    setGalleryOpen(false);
    setActiveImage(null);
  };

  const closeGallery = () => {
    setGalleryOpen(false);
    setActiveImage(null);
  };

  const closeLightbox = () => setActiveImage(null);

  const overlayOpen = galleryOpen || activeImage !== null;

  useEffect(() => {
    if (!overlayOpen) return;

    function onEscape(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      if (activeImage) {
        closeLightbox();
      } else if (galleryOpen) {
        closeGallery();
      }
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onEscape);
    };
  }, [overlayOpen, galleryOpen, activeImage]);

  return (
    <section className="memorias-section" id="memorias">
      <div className="container">
        <SectionHeader
          badge="Memória CampoAgro"
          className="memorias-head"
          title={
            <>
              A trajetória que prepara a{" "}
              <span className="highlight">3ª edição</span>
            </>
          }
        />

        <div
          className="memory-year-tabs reveal"
          aria-label="Selecionar ano da galeria"
        >
          {(["2023", "2025"] as const).map((year) => (
            <button
              type="button"
              key={year}
              className={selectedYear === year ? "active" : undefined}
              onClick={() => selectYear(year)}
            >
              <span>{year}</span>
              <strong>{GALLERIES[year].title}</strong>
            </button>
          ))}
        </div>

        <div className="memory-gallery-panel reveal">
          <div className="memory-gallery-stage">
            <img
              src={activeImageInGallery.src}
              alt={activeImageInGallery.alt}
              loading="lazy"
            />
          </div>

          <div className="memory-gallery-copy">
            <span>{gallery.eyebrow}</span>
            <h3>{gallery.title}</h3>
            <p>{gallery.description}</p>
            <div className="memory-gallery-actions">
              <button
                type="button"
                onClick={() => setActiveImage(activeImageInGallery)}
              >
                Ampliar foto
              </button>
              <button type="button" onClick={() => setGalleryOpen(true)}>
                Ver {gallery.images.length} fotos
              </button>
            </div>
          </div>
        </div>

        <div
          className="memory-thumb-strip reveal"
          aria-label={`Prévia de fotos ${selectedYear}`}
        >
          {previewImages.map((image, index) => (
            <button
              type="button"
              key={`${selectedYear}-${image.alt}`}
              className={activeIndex === index ? "active" : undefined}
              onClick={() => setActiveIndex(index)}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
            </button>
          ))}
        </div>
      </div>

      {galleryOpen ? (
        <div
          className="memory-gallery-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="memory-gallery-modal-title"
          onClick={closeGallery}
        >
          <button
            type="button"
            className="memory-modal-close"
            aria-label="Fechar galeria"
            onClick={(event) => {
              event.stopPropagation();
              closeGallery();
            }}
          >
            <X size={22} strokeWidth={2.25} aria-hidden />
          </button>

          <div
            className="memory-gallery-modal-panel"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="memory-gallery-modal-head">
              <div>
                <span>{gallery.year}</span>
                <h3 id="memory-gallery-modal-title">{gallery.title}</h3>
              </div>
            </div>

            <div className="memory-gallery-modal-grid">
              {gallery.images.map((image, index) => (
                <button
                  type="button"
                  key={`${selectedYear}-full-${image.alt}`}
                  onClick={() => {
                    setActiveIndex(index);
                    setActiveImage(image);
                  }}
                >
                  <img src={image.src} alt={image.alt} loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      {activeImage ? (
        <div
          className="memory-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Visualização ampliada"
          onClick={closeLightbox}
        >
          <button
            type="button"
            className="memory-modal-close memory-lightbox-close"
            aria-label="Fechar visualização"
            onClick={(event) => {
              event.stopPropagation();
              closeLightbox();
            }}
          >
            <X size={22} strokeWidth={2.25} aria-hidden />
          </button>
          <div
            className="memory-lightbox-panel"
            onClick={(event) => event.stopPropagation()}
          >
            <img src={activeImage.src} alt={activeImage.alt} />
          </div>
        </div>
      ) : null}
    </section>
  );
}
