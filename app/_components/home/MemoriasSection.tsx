"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

import MemoryGalleryImage from "./MemoryGalleryImage";
import {
  GALLERIES,
  MODAL_BATCH_SIZE,
  PREVIEW_LIMIT,
  type GalleryImage,
  type GalleryYear,
} from "./memorias-gallery-data";
import SectionHeader from "./SectionHeader";

export default function MemoriasSection() {
  const [selectedYear, setSelectedYear] = useState<GalleryYear>("2023");
  const [activeIndex, setActiveIndex] = useState(0);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [modalVisibleCount, setModalVisibleCount] = useState(MODAL_BATCH_SIZE);
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);

  const gallery = GALLERIES[selectedYear];
  const activeImageInGallery = gallery.images[activeIndex] ?? gallery.images[0];
  const previewImages = gallery.images.slice(0, PREVIEW_LIMIT);
  const modalImages = gallery.images.slice(0, modalVisibleCount);

  const selectYear = (year: GalleryYear) => {
    setSelectedYear(year);
    setActiveIndex(0);
    setGalleryOpen(false);
    setActiveImage(null);
    setModalVisibleCount(MODAL_BATCH_SIZE);
  };

  const openGallery = () => {
    setModalVisibleCount(MODAL_BATCH_SIZE);
    setGalleryOpen(true);
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
            <MemoryGalleryImage
              src={activeImageInGallery.src}
              alt={activeImageInGallery.alt}
              fill
              sizes="(max-width: 860px) 100vw, min(640px, 55vw)"
              priority={selectedYear === "2023"}
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
              <button type="button" onClick={openGallery}>
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
              <MemoryGalleryImage
                src={image.src}
                alt={image.alt}
                width={96}
                height={72}
                sizes="96px"
              />
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
              {modalImages.map((image, index) => (
                <button
                  type="button"
                  key={`${selectedYear}-full-${image.alt}`}
                  onClick={() => {
                    setActiveIndex(index);
                    setActiveImage(image);
                  }}
                >
                  <MemoryGalleryImage
                    src={image.src}
                    alt={image.alt}
                    width={160}
                    height={120}
                    sizes="160px"
                  />
                </button>
              ))}
            </div>

            {modalVisibleCount < gallery.images.length ? (
              <div className="memory-gallery-modal-more">
                <button
                  type="button"
                  onClick={() =>
                    setModalVisibleCount((count) =>
                      Math.min(count + MODAL_BATCH_SIZE, gallery.images.length),
                    )
                  }
                >
                  Carregar mais fotos (
                  {gallery.images.length - modalVisibleCount} restantes)
                </button>
              </div>
            ) : null}
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
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              sizes="100vw"
              quality={80}
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </div>
      ) : null}
    </section>
  );
}
