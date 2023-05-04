import Image from "next/image";
import HomeBanner from "@/components/HomeBanner";
import FilterBox from "@/components/FilterBox";
import Featured from "@/components/Featured";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <HomeBanner />

      <div className="mx-auto max-w-7xl p-6 lg:px-8 bg-gray-50">
        <FilterBox />
        <Featured />
      </div>
    </div>
  );
}
