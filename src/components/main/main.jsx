import AboutSection from "../about/about-section";
import TestimonialCard from "../testimonial/testimonial-section";
import CarouselMain from "./carousel/carousel-main";
import PlansCard from "./plans-cards/plans-card";

export default function Main() {
  return (
    <>
        <CarouselMain />
        <AboutSection />
        <PlansCard />
        <TestimonialCard />
    </>
  )
}
