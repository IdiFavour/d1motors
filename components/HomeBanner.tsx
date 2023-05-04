const links = [
  { name: "Open roles", href: "#" },
  { name: "Internship program", href: "#" },
  { name: "Our values", href: "#" },
  { name: "Meet our leadership", href: "#" },
];

export default function HomeBanner() {
  return (
    <div className=" bg-gray-900 videoBox">
      <video className="w-full " muted>
        <source src="/Maybach.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
