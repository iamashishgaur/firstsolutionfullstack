import "react-toastify/dist/ReactToastify.css";
import FeaturedCompanies from "@/components/featuredcompanies/FeaturedCompanies";
import HomeBanner from "@/components/homebanner/HomeBanner";
import JobCategory from "@/components/jobs/JobCategory";
import OurTeam from "@/components/ourteam/OurTeam";
import TopCompany from "@/components/topcompany/TopCompany";
import Testimonials from "@/components/testimonials/Testimonials";
import EmailSubscribe from "@/components/emailsubscribe/EmailSubscribe";
import OurBrands from "@/components/ourbrand/OurBrands";
import WorkJob from "@/components/workjobnanner/workjob";
export default function Home() {
  return (
    <main>
      {/* <HomeBanner /> */}
      <JobCategory />
      {/* <TopCompany /> */}
      {/* <FeaturedCompanies /> */}
      {/* <WorkJob /> */}
      {/* <Testimonials /> */}
      {/* <EmailSubscribe /> */}
      {/* <OurBrands /> */}
    </main>
  );
}
