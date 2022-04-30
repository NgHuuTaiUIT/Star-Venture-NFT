import {
  createContext,
  MutableRefObject,
  ReactNode,
  RefObject,
  useRef,
  useState
} from "react";
import { useWindowSize } from "../hooks/useWindowSize";

export const ScrollToSectionContext = createContext<any>({});

export const ScrollToSectionProvider = ({
  children
}: {
  children: ReactNode;
}) => {
  const trailerOnClickRef = useRef<HTMLElement>(null);
  const featureOnClickRef = useRef<HTMLElement>(null);
  const collectionOnClickRef = useRef<HTMLElement>(null);
  const roadmapOnClickRef = useRef<HTMLElement>(null);
  const teamOnClickRef = useRef<HTMLElement>(null);

  const [sectionActive, setSectionActive] = useState(0);

  const size = useWindowSize();
  const scrollEffect = (targetRef: MutableRefObject<HTMLElement>) => {
    targetRef &&
      targetRef?.current?.scrollIntoView({
        behavior: "smooth",
        block: size.width >= 1024 ? "center" : "start"
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
