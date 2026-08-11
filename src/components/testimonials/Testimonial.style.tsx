import { styled } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const TestimonialSection = styled.section``;

export const TestimonialContainer = styled(Swiper)`
  width: 50%;
  padding-bottom: 4rem;

  @media (max-width: 1024px) {
    width: 70%;
  }

  @media (max-width: 600px) {
    width: var(--container-width-sm);
  }
`;

export const TestimonialCard = styled(SwiperSlide)`
  background: var(--color-glass);
  border: 1px solid var(--color-glass-border);
  text-align: center;
  padding: 2rem;
  border-radius: var(--radius-md);
  user-select: none;
`;

export const ClientAvatar = styled.div`
  width: 4rem;
  aspect-ratio: 1/1;
  overflow: hidden;
  border-radius: 50%;
  margin: 0 auto 1rem;
  border: 3px solid var(--color-primary-variant);
`;

export const ClientImg = styled.img``;

export const ClientName = styled.h5`
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const ClientReview = styled.small`
  color: var(--color-light);
  font-weight: 300;
  font-size: 0.8rem;
  display: block;
  width: 85%;
  margin: 0 auto;
  line-height: 1.7;
`;
