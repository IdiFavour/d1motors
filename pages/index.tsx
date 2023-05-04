import Image from "next/image";
import HomeBanner from "@/components/HomeBanner";
import FilterBox from "@/components/FilterBox";

export default function Home() {
  return (
    <>
      <HomeBanner />

      <div className="mx-auto max-w-7xl p-6 lg:px-8">
        <FilterBox />
      </div>
    </>
  );
}
