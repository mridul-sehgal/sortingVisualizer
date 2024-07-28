import SortingVisualizer from "@/components/SortingVisualizer";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Instructions from "@/components/Instructions";

export default function Home() {
  return (
    <>
      <div className="m-10">
      <Navbar/>
      <Hero/>
      <Instructions/>
      <SortingVisualizer />
      </div>      
    </>
  );
}
