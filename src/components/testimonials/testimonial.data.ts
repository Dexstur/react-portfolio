import val from "/val.jpg";
import dave from "/dave.jpg";

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
    name: "David Ojimba",
    img: dave,
    review:
      "Chuks is a dedicated full stack developer known for his hard work and goal-driven mindset. His intelligence and innovative approach consistently lead to exceptional solutions and successful project outcomes. Chuks' commitment and technical expertise make them a valuable asset to any team.",
  },
];
