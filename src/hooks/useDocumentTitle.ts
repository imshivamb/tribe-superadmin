import { useEffect, useRef } from "react";

export const useDocumentTitle = (title?: string) => {
  const originalTitle = useRef(document.title || "");

  useEffect(() => {
    if (title && document.title !== title) {
      document.title = title;
    }

    return () => {
      document.title = originalTitle.current;
    };
  }, [title]);
};
