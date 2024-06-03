import { styled } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const TestimonialSection = styled.section``;

export const TestimonialContainer = styled(Swiper)`
  width: 40%;
  padding-bottom: 4rem;

  @media (max-width: 1024px) {
    width: 60%;
  }

  @media (max-width: 600px) {
    width: var(--container-width-sm);
  }
`;

export const TestimonialCard = styled(SwiperSlide)`
  background: var(--color-bg-variant);
  text-align: center;
  padding: 2rem;
  border-radius: 2rem;
  user-select: none;
`;

export const ClientAvatar = styled.div`
  width: 4rem;
  aspect-ratio: 1/1;
  overflow: hidden;
  border-radius: 50%;
  margin: 0 auto 1rem;
  border: 0.4rem solid var(--color-primary-variant);
`;

export const ClientImg = styled.img``;

export const ClientName = styled.h5``;

export const ClientReview = styled.small`
  color: var(--color-light);
  font-weight: 300;
  display: block;
  width: 80%;
  margin: 0.8rem auto 0;

  @media (max-width: 1024px) {
  }

  @media (max-width: 600px) {
    width: var(--container-width-sm);
  }
`;
