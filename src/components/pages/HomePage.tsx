import { FeaturedJobs } from "../sections/home-page/featured-jobs";
import Hero from "../sections/home-page/hero";
import { HowItWorks } from "../sections/home-page/how-it-works";
import { PopularVacancies } from "../sections/home-page/job-vaccancies";
import { PopularCategories } from "../sections/home-page/popular-categories";
import TestimonialsCarousel from "../sections/home-page/testimonial";
import CompanyGrid from "../sections/home-page/top-companies";

const HeroPage = () => {
    return (
        <main className="flex-1">
            <Hero />
            <PopularVacancies />
            <HowItWorks />
            <PopularCategories />
            <FeaturedJobs />
            <CompanyGrid />
            <TestimonialsCarousel />
        </main>
    )
}

export default HeroPage;
