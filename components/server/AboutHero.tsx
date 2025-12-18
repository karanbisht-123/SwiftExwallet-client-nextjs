import AboutHeroClient from '../client/AboutHeroClient';

export default function AboutHero() {
  return (
    <section id="mission" className="py-16   bg-linear-to-tr from-[#020E46] to-[#02164a] relative">
      <div className="absolute top-0 left-0 w-full " />
      <div className="max-w-7xl mx-2  md:mx-auto   relative z-10">
        <AboutHeroClient />
      </div>
    </section>
  );
}
