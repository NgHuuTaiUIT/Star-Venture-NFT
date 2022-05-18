import {
  createContext,
  MutableRefObject,
  ReactNode,
  RefObject,
  useEffect,
  useRef,
  useState
} from "react";
import { useSpring } from "react-spring";
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

  const [showCollection, setShowCollection] = useState(false);
  const [showRoadmap, setShowRoadmap] = useState(false);
  const [showTeam, setShowTeam] = useState(false);
  const [showFeature, setShowFeature] = useState(false);

  const [sectionActive, setSectionActive] = useState(0);

  const size = useWindowSize();

  const scrollEffect = (targetRef: MutableRefObject<HTMLElement>) => {
    targetRef &&
      targetRef?.current?.scrollIntoView({
        behavior: "smooth",
        block: size.width >= 1024 ? "center" : "start",
        inline: "nearest"
      });
  };

  useEffect(() => {
    const handleScroll = () => {
      const getBoundingClientRectRef = (ref: RefObject<any>) => {
        const valueRef = ref && ref?.current?.getBoundingClientRect();
        return valueRef;
      };

      if (
        getBoundingClientRectRef(trailerOnClickRef)?.top <=
        getBoundingClientRectRef(trailerOnClickRef)?.height
      ) {
        setSectionActive(0);
      }
      console.log(getBoundingClientRectRef(featureOnClickRef)?.top);
      if (
        getBoundingClientRectRef(featureOnClickRef)?.top <
        getBoundingClientRectRef(trailerOnClickRef)?.height
      ) {
        setShowFeature(true);
        setSectionActive(1);
      }

      if (
        getBoundingClientRectRef(collectionOnClickRef)?.top <=
        getBoundingClientRectRef(collectionOnClickRef)?.height / 2
      ) {
        setShowCollection(true);
        setSectionActive(2);
      }

      if (getBoundingClientRectRef(roadmapOnClickRef)?.top <= 500) {
        console.log(
          "roadmap",
          getBoundingClientRectRef(roadmapOnClickRef)?.top
        );
        console.log("window", window.scrollY);

        setShowRoadmap(true);
        setSectionActive(3);
      }

      if (
        getBoundingClientRectRef(teamOnClickRef)?.top <=
        (size.width >= 1024
          ? getBoundingClientRectRef(teamOnClickRef)?.height
          : 500)
      ) {
        setShowTeam(true);
        setSectionActive(4);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        setSectionActive,
        showFeature,
        showRoadmap,
        showTeam,
        showCollection
      }}>
      {children}
    </ScrollToSectionContext.Provider>
  );
};
