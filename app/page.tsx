import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import VerticalsSection from "@/components/verticals-section"
import ServicesSection from "@/components/services-section"
import StatsSection from "@/components/stats-section"
import NewsSection from "@/components/news-section"
import ResourcesSection from "@/components/resources-section"
import MediaGallery from "@/components/media-gallery"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <VerticalsSection />
      <ServicesSection />
      <StatsSection />
      <NewsSection />
      <ResourcesSection />
      <MediaGallery />
      <Footer />
    </main>
  )
}
