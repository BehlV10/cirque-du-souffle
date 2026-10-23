import { Hero } from '@/components/Hero';
import { ProductCatalog } from '@/components/ProductCatalog';
import { TastingExperience } from '@/components/TastingExperience';
import { BioAndPress } from '@/components/BioAndPress';
import { Gallery } from '@/components/Gallery';
import { ContactSection } from '@/components/ContactSection';

export default function Home() {
  return (
    <>
      <Hero />
      <ProductCatalog />
      <TastingExperience />
      <BioAndPress />
      <Gallery />
      <ContactSection />
    </>
  );
}
