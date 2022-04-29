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
        block: size.width >= 1024 ? "center" : "start"
      });
  };

  const [currentOffSetY, setCurrentOffSetY] = useState(0);

  const HEIGHT_HEADER = 90 + 65;

  console.log("feature", { ...featureOnClickRef?.current });
  console.log("roadmap", roadmapOnClickRef?.current);
  console.log("team", teamOnClickRef?.current);
  console.log("collection", collectionOnClickRef?.current);

  useEffect(() => {
    const handleScroll = () => {
      const getBoundingClientRectRef = (ref: RefObject<any>) => {
        const valueRef = ref && ref?.current?.getBoundingClientRect();
        return valueRef;
      };

      if (getBoundingClientRectRef(featureOnClickRef)?.top <= window.scrollY) {
        setShowFeature(true);
      }
      if (getBoundingClientRectRef(roadmapOnClickRef)?.top <= window.scrollY) {
        setShowRoadmap(true);
      }
      if (
        getBoundingClientRectRef(collectionOnClickRef)?.top -
          getBoundingClientRectRef(collectionOnClickRef)?.height / 2 <=
        0
      ) {
        setShowCollection(true);
      }
      if (
        getBoundingClientRectRef(teamOnClickRef)?.top -
          (HEIGHT_HEADER +
            getBoundingClientRectRef(teamOnClickRef)?.height / 2) <=
        0
      ) {
        setShowTeam(true);
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
