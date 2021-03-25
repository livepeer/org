import { useRouter } from "next/router";
import { useCallback, useRef, useState } from "react";
import { DocSearchModal, useDocSearchKeyboardEvents } from "@docsearch/react";
import Link from "next/link";
import { createPortal } from "react-dom";

function Hit({ hit, children }) {
  return (
    <Link href={hit.url}>
      <a>{children}</a>
    </Link>
  );
}

export const useDocSearch = () => {
  const router = useRouter();
  const searchButtonRef = useRef();

  const [isOpen, setIsOpen] = useState(false);
  const [initialQuery, setInitialQuery] = useState(null);

  const onOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const onInput = useCallback(
    (e) => {
      setIsOpen(true);
      setInitialQuery(e.key);
    },
    [setIsOpen, setInitialQuery]
  );

  useDocSearchKeyboardEvents({
    isOpen,
    onOpen,
    onClose,
    onInput,
    searchButtonRef,
  });

  const Modal = () => (
    <>
      {isOpen &&
        createPortal(
          <DocSearchModal
            initialQuery={initialQuery}
            initialScrollY={window.scrollY}
            searchParameters={{
              facetFilters: "version:v2",
              distinct: 1,
            }}
            onClose={onClose}
            indexName="tailwindcss"
            apiKey="3df93446658cd9c4e314d4c02a052188"
            appId="BH4D9OD16A"
            navigator={{
              navigate({ suggestionUrl }) {
                setIsOpen(false);
                router.push(suggestionUrl);
              },
            }}
            hitComponent={Hit}
            transformItems={(items) => {
              return items.map((item) => {
                // We transform the absolute URL into a relative URL to
                // leverage Next's preloading.
                const a = document.createElement("a");
                a.href = item.url;

                const hash = a.hash === "#content-wrapper" ? "" : a.hash;

                return {
                  ...item,
                  url: `${a.pathname}${hash}`,
                };
              });
            }}
          />,
          document.body
        )}
    </>
  );

  return { Modal, searchButtonRef, onOpen, onClose };
};
