// useMetaTags.js
import { useEffect } from "react";

const useMetaTags = ({ title, description, image, url }) => {
  useEffect(() => {
    if (title) {
      document.title = title;
      setMetaTag("property", "og:title", title);
      setMetaTag("name", "twitter:title", title);
    }
    if (description) {
      setMetaTag("property", "og:description", description);
      setMetaTag("name", "twitter:description", description);
    }
    if (image) {
      setMetaTag("property", "og:image", image);
      setMetaTag("name", "twitter:image", image);
    }
    if (url) {
      setMetaTag("property", "og:url", url);
    }
    setMetaTag("name", "twitter:card", "summary_large_image");
  }, [title, description, image, url]);

  const setMetaTag = (attrName, attrValue, content) => {
    let element = document.querySelector(`meta[${attrName}='${attrValue}']`);
    if (!element) {
      element = document.createElement("meta");
      element.setAttribute(attrName, attrValue);
      document.head.appendChild(element);
    }
    element.setAttribute("content", content);
  };
};

export default useMetaTags;
