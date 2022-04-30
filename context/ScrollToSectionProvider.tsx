import { createContext, MutableRefObject, useRef, useState } from "react";

export const ScrollToSectionContext = createContext<any>({});

export const ScrollToSectionProvider = ({ children }: { children: any }) => {
  const trailerOnClickRef = useRef<HTMLElement>(null);
  const featureOnClickRef = useRef<HTMLElement>(null);
  const collectionOnClickRef = useRef<HTMLElement>(null);
  const roadmapOnClickRef = useRef<HTMLElement>(null);
  const teamOnClickRef = useRef<HTMLElement>(null);

  const [sectionActive, setSectionActive] = useState(0);

  const scrollEffect = (targetRef: MutableRefObject<HTMLElement>) => {
    console.log(targetRef);
    targetRef &&
      targetRef?.current?.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
  };

  return (
    <ScrollToSectionContext.Provider
      value={{
        trailerOnClickRef,
        featureOnClickRef,
        collectionOnClickRef,
        roadmapOnClickRef,
        teamOnClickRef,
        scrollEffect,
        sectionActive,
        setSectionActive
      }}>
      {children}
    </ScrollToSectionContext.Provider>
  );
};
