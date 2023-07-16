import SectionArtikles from "@/components/SectionArtikles";
import SectionFeatures from "@/components/SectionFeatures";
import SectionHero from "@/components/SectionHero";
import NavListItem from "@/components/ui/NavListItem";

export default function Home() {
  return (
    <main>
      <SectionHero />
      <SectionFeatures />
      <SectionArtikles />
    </main>
  );
}
