import styled from "@emotion/styled";
import React, {
  MouseEvent,
  useCallback,
  useEffect,
  useRef,
  useState
} from "react";
import { Container, ContainerRelative } from "./style";

interface CarouselParams {
  children: React.ReactNode;
  max_width?: number;
}

interface StateCarouselParams {
  width_Carousel?: number;
  width_childrens?: number;
  qnt_childrens?: number;
  max_width_carousel?: number;
}

/**
 * Componente de Carousel simples. Para utilizar  certifique-se de que os childrens tem a mesma largura(width), para ter uma maior experiencia.
 * @param param0 {CarouselParams}
 * @returns {JSX.Element}
 */
const Carousel: React.FC<CarouselParams> = ({
  children,
  max_width
}: CarouselParams): JSX.Element => {
  const Carousel = useRef<HTMLDivElement>(null);

  const [stateCarousel, setStateCarousel] = useState<StateCarouselParams>();

  const handleCarousel = useCallback(() => {
    if (Carousel.current) {
      const carousel = Carousel.current;
      setStateCarousel({
        ...stateCarousel,
        width_Carousel: carousel.clientWidth,
        qnt_childrens: carousel.children.length,
        width_childrens: carousel.children.item(0)?.clientWidth,
        max_width_carousel:
          (carousel.children.length - 1) *
          carousel.children.item(0)?.clientWidth!
      });
    }
  }, [stateCarousel]);

  const handleCarouselAction = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    switch (e.currentTarget.id) {
      case "next":
        return (Carousel.current!.scrollLeft +=
          stateCarousel?.width_childrens!);

      case "prev":
        return (Carousel.current!.scrollLeft -=
          stateCarousel?.width_childrens!);

      default:
        return null;
    }
  };

  useEffect(() => handleCarousel(), [handleCarousel]);

  return (
    <ContainerRelative max={max_width || stateCarousel?.max_width_carousel}>
      <Container ref={Carousel}>{children}</Container>
    </ContainerRelative>
  );
};

export default Carousel;
