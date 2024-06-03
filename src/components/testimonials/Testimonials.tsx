import {
  TestimonialSection,
  TestimonialContainer,
  TestimonialCard,
  ClientAvatar,
  ClientImg,
  ClientName,
  ClientReview,
} from "./Testimonial.style";
import ME from "/psp.jpg";
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
        <TestimonialCard>
          <ClientAvatar>
            <ClientImg src={ME} alt="Client" />
          </ClientAvatar>
          <ClientName>Client 1</ClientName>
          <ClientReview>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            tincidunt, urna nec lacinia volutpat, libero sapien ultricies dolor,
            nec commodo erat est vel nisl. Donec sed odio dui.
          </ClientReview>
        </TestimonialCard>
        <TestimonialCard>
          <ClientAvatar>
            <ClientImg src={ME} alt="Client" />
          </ClientAvatar>
          <ClientName>Client 1</ClientName>
          <ClientReview>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            tincidunt, urna nec lacinia volutpat, libero sapien ultricies dolor,
            nec commodo erat est vel nisl. Donec sed odio dui.
          </ClientReview>
        </TestimonialCard>

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
