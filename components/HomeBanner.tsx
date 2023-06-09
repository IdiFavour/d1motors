const links = [
  { name: "Open roles", href: "#" },
  { name: "Internship program", href: "#" },
  { name: "Our values", href: "#" },
  { name: "Meet our leadership", href: "#" },
];

export default function HomeBanner() {
  return (
    <section className="relative bg-[url(https://r4.wallpaperflare.com/wallpaper/586/507/755/gta-5-gta-v-games-4k-wallpaper-d9b24b34f544c9eaaae3caa859edc7db.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-gray-800/50  "></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-white">
          <h1 className="text-3xl sm:text-5xl">
            The Easiest Way to Find the Most Suitable Car for Yourself
          </h1>

          <p className="mt-4 max-w-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#"
              className="block w-full rounded bg-main px-12 py-3 text-sm font-medium text-black shadow  focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
