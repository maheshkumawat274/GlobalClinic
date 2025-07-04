import ClinicInfoSection from "../../components/gallery/ClinicInfo"
import GallerySection from "../../components/gallery/GallerySection"
import HeroGallery from "../../components/gallery/HeroGallery"
import TestimonialsCarousel from "../../components/home/Testamonials"
import WhyChooseUs from "../../components/home/WhyChooseSection"

const GalleryPage = () => {
  return (
    <>
     <HeroGallery/>
     <GallerySection/>
     <ClinicInfoSection/>
     <WhyChooseUs/>
     <TestimonialsCarousel/>
    </>
  )
}

export default GalleryPage