import React from "react";
import Carousel from "react-bootstrap/Carousel";
import styles from "./Code.module.css";

/* ---------- Individual section renderers ---------- */

const GallerySection = ({ media }) => (
  <Carousel variant="dark" interval={null} controls className={styles.detailCarousel}>
    {media.map((mediaItem, i) => (
      <Carousel.Item key={i}>
        {mediaItem.type === "image" ? (
          <img src={mediaItem.src} alt={`Slide ${i}`} />
        ) : (
          <video controls muted loop poster={mediaItem.poster}>
            <source src={mediaItem.src} type="video/mp4" />
          </video>
        )}

        {mediaItem.caption && (
          <Carousel.Caption>
            <h3 className={styles.caption}>{mediaItem.caption}</h3>
          </Carousel.Caption>
        )}
      </Carousel.Item>
    ))}
  </Carousel>
);

const ImageSection = ({ src, caption }) => (
  <figure className={styles.mediaSection}>
    <img src={src} alt={caption ?? ""} className={styles.mediaSectionAsset} />
    {caption && <figcaption className={styles.mediaCaption}>{caption}</figcaption>}
  </figure>
);

const VideoSection = ({ src, poster, caption }) => (
  <figure className={styles.mediaSection}>
    <video className={styles.mediaSectionAsset} controls muted loop poster={poster}>
      <source src={src} type="video/mp4" />
    </video>
    {caption && <figcaption className={styles.mediaCaption}>{caption}</figcaption>}
  </figure>
);

/* Standard paragraph structure.
   `body` can be a single string/JSX node, or an array of them
   for multiple paragraphs under one heading. */
const ParagraphSection = ({ heading, body }) => {
  const paragraphs = Array.isArray(body) ? body : [body];

  return (
    <div className={styles.section}>
      {heading && <h2 className={styles.sectionHeading}>{heading}</h2>}
      {paragraphs.map((paragraph, i) => (
        <p key={i} className={styles.sectionText}>
          {paragraph}
        </p>
      ))}
    </div>
  );
};

/* Standard list structure.
   Set `ordered: true` for a numbered list, otherwise bulleted. */
const ListSection = ({ heading, items, ordered }) => {
  const ListTag = ordered ? "ol" : "ul";

  return (
    <div className={styles.section}>
      {heading && <h2 className={styles.sectionHeading}>{heading}</h2>}
      <ListTag className={styles.bodyul}>
        {items.map((item, i) => (
          <li key={i} className={styles.bodyli}>
            {item}
          </li>
        ))}
      </ListTag>
    </div>
  );
};

const QuoteSection = ({ text, cite }) => (
  <blockquote className={styles.quoteSection}>
    <p>{text}</p>
    {cite && <footer className={styles.quoteCite}>— {cite}</footer>}
  </blockquote>
);

const LinksSection = ({ heading, github, extra, items }) => (
  <div className={styles.section}>
    {heading && <h2 className={styles.sectionHeading}>{heading}</h2>}
    {github && (
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.githubLink}
      >
        <img
          src="/assets/Icons/github_circle_icon.png"
          alt="GitHub"
          className={styles.githubIcon}
        />
        <span className={styles.linkText}>View Project</span>
      </a>
    )}
    {extra?.map((link, i) => (
      <a
        key={i}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.extraLink}
      >
        {link.label}
      </a>
    ))}
    {items?.length > 0 && (
      <ul className={styles.bodyul}>
        {items.map((item, i) => (
          <li key={i} className={styles.bodyli}>
            {item}
          </li>
        ))}
      </ul>
    )}
  </div>
);

/* ---------- Type -> renderer map ----------
   To add a new section type: write a renderer above,
   register it here, then use that `type` in CodeProjects.jsx.
   No other file needs to change.

   `paragraph` and `list` are the two standard text structures —
   reach for one of these first for any new text content rather
   than inventing a new type name. */
const SECTION_RENDERERS = {
  gallery: GallerySection,
  image: ImageSection,
  video: VideoSection,
  paragraph: ParagraphSection,
  list: ListSection,
  quote: QuoteSection,
  links: LinksSection,
};

export const ProjectSection = ({ section }) => {
  const Renderer = SECTION_RENDERERS[section.type];

  if (!Renderer) {
    console.warn(`ProjectSection: unknown section type "${section.type}"`);
    return null;
  }

  return <Renderer {...section} />;
};