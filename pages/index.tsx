import Image from "next/image";
import HomeBanner from "@/components/HomeBanner";
import Featured from "@/components/Featured";
import Action from "@/components/Action";
import Brands from "@/components/Brands";
import Testimonal from "@/components/Testimonal";
import Reason from "@/components/Reason";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <HomeBanner />

      <div className="mx-auto max-w-7xl p-6 lg:px-8 bg-gray-50">
        <Featured />
      </div>
      <Action />
      <Reason />
      <div className="mx-auto max-w-7xl p-6 lg:px-8 bg-gray-50">
        {/* <Testimonal /> */}
        <Brands />
      </div>
    </div>
  );
}
