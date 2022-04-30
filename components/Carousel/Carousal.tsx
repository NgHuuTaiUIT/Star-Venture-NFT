import styled from "@emotion/styled";
import React, {
  MouseEvent,
  useCallback,
  useEffect,
  useRef,
  useState
} from "react";
import { Container, ContainerRelativo } from "./style";

interface CaroselParams {
  children: React.ReactNode;
  max_width?: number;
}

interface StateCaroselParams {
  width_carosel?: number;
  width_childrens?: number;
  qnt_childrens?: number;
  max_width_carousel?: number;
}

/**
 * Componente de Carosel simples. Para utilizar  certifique-se de que os childrens tem a mesma largura(width), para ter uma maior experiencia.
 * @param param0 {CaroselParams}
 * @returns {JSX.Element}
 */
const Carosel: React.FC<CaroselParams> = ({
  children,
  max_width
}: CaroselParams): JSX.Element => {
  const Carousel = useRef<HTMLDivElement>(null);

  const [stateCarosel, setStateCarousel] = useState<StateCaroselParams>();

  const handleCarousel = useCallback(() => {
    if (Carousel.current) {
      const carousel = Carousel.current;
      setStateCarousel({
        ...stateCarosel,
        width_carosel: carousel.clientWidth,
        qnt_childrens: carousel.children.length,
        width_childrens: carousel.children.item(0)?.clientWidth,
        max_width_carousel:
          (carousel.children.length - 1) *
          carousel.children.item(0)?.clientWidth!
      });
    }
  }, [setStateCarousel]);

  const handleCarouselAction = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    switch (e.currentTarget.id) {
      case "next":
        return (Carousel.current!.scrollLeft += stateCarosel?.width_childrens!);

      case "prev":
        return (Carousel.current!.scrollLeft -= stateCarosel?.width_childrens!);

      default:
        return null;
    }
  };

  useEffect(() => handleCarousel(), [handleCarousel]);

  return (
    <ContainerRelativo max={max_width || stateCarosel?.max_width_carousel}>
      <Container ref={Carousel}>
        {children}
        <div className="buttons">
          <button onClick={handleCarouselAction} id="prev" className="prev">
            prev
          </button>
          <button onClick={handleCarouselAction} id="next" className="next">
            next
          </button>
        </div>
      </Container>
    </ContainerRelativo>
  );
};

export default Carosel;
