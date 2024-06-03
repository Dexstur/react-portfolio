import ME from "/psp.jpg";
import val from "/val.jpg";

interface TestimonialData {
  name: string;
  img: string;
  review: string;
}

export const testimonials: TestimonialData[] = [
  {
    name: "Valentine Nkume",
    img: val,
    review:
      "Chukwuka is a highly skilled full stack developer, adept in both frontend and backend technologies, and consistently delivers innovative solutions with a strong work ethic. A quick learner and a flexible professional, Chuks excels in utilizing AGILE methodologies to drive project success. As both a competent leader and a valuable team player, Chuks brings intelligence, dedication, and collaborative spirit to every project.",
  },
  {
    name: "Client 1",
    img: ME,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt, urna nec lacinia volutpat, libero sapien ultricies dolor, nec commodo erat est vel nisl. Donec sed odio dui.",
  },
];
