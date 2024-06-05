import {
  TestimonialSection,
  TestimonialContainer,
  TestimonialCard,
  ClientAvatar,
  ClientImg,
  ClientName,
  ClientReview,
} from "./Testimonial.style";
import { testimonials } from "./testimonial.data";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function Testimonials() {
  return (
    <TestimonialSection id="testimonial">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <TestimonialContainer
        className="container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index}>
            <ClientAvatar>
              <ClientImg src={testimonial.img} alt="Client" />
            </ClientAvatar>
            <ClientName>{testimonial.name}</ClientName>
            <ClientReview>{testimonial.review}</ClientReview>
          </TestimonialCard>
        ))}
      </TestimonialContainer>
    </TestimonialSection>
  );
}

export default Testimonials;
