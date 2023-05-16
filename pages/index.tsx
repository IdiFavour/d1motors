import Image from "next/image";
import HomeBanner from "@/components/HomeBanner";
import Featured from "@/components/Featured";
import Action from "@/components/Action";
import Brands from "@/components/Brands";
import Testimonal from "@/components/Testimonal";
import About from "@/components/About";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <HomeBanner />
      <About />

      <div className="mx-auto max-w-7xl p-6 lg:px-8 bg-gray-50">
        <Featured />
      </div>
      <Action />
      <div className="mx-auto max-w-7xl p-6 lg:px-8 bg-gray-50">
        {/* <Testimonal /> */}
        <Brands />
      </div>
    </div>
  );
}
