import type { MetaFunction } from "@remix-run/node";
import { IconBrandDiscordFilled, IconBrandGithub, IconBrandLinkedin, IconBrowser, IconLanguage, IconMoon, IconSun } from "@tabler/icons-react";
import { useEffect, useMemo, useState } from "react";
import Line2 from '~/assets/line2';
import Line3 from '~/assets/line3';

export const meta: MetaFunction = () => {
  return [
    { title: "Thomas Vergne" },
    { name: "description", content: "A web developer and computer science student in France. Passionate about math, I create innovative web solutions and new programming languages." },
  ];
};

function AsideLink({ name, href }: { name: string, href: string }) {
  return <a
    href={href}
    className="text-neutral-800/50 dark:text-white/50 hover:text-neutral-800 dark:hover:text-white md:text-xl font-mono transition-colors duration-200 after:"
  >
    {name}
  </a>;
}

function useLocalStorage(key: string, initialValue: boolean) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mode = window.localStorage.getItem(key);
    if (!mode) window.localStorage
  }, []);

  const [value, setValue] = useState(() => {
    if (typeof window === 'undefined') return initialValue;

    const storedValue = window.localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  const setStoredValue = (newValue: boolean) => {
    setValue(newValue);
    window.localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setStoredValue] as const;
}

export default function Index() {
  const names = ["memorable", "accessible", "responsive", "beautiful"];
  const [randomName, setRandomName] = useState("beautiful");
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', true);
  const ToggleIcon = darkMode ? IconSun : IconMoon;

  useEffect(() => {
    document.documentElement.dataset.mode = darkMode ? 'dark' : 'light';
    setRandomName(names[Math.floor(Math.random() * names.length)]);
  }, []);

  const toggleDarkMode = useMemo(() => {
    return () => {
      if (!document) return;
      const newDarkMode = !darkMode;

      setDarkMode(newDarkMode);

      // Should add [data-mode="dark"] to document
      document.documentElement.dataset.mode = newDarkMode ? 'dark' : 'light';
    };
  }, [darkMode]);

  return <>
    <main className="relative">
      {/* Bottom-left light */}
      <img src="/light3.svg" className="absolute inset-0 -bottom-16 md:-bottom-2/3 -left-1/2 object-cover w-full -z-10 opacity-50" alt="" />

      {/* Centered light */}
      <img src="/light.svg" className="absolute inset-0 top-56 sm:top-24 md:-top-0 lg:-top-16 xl:-top-32 object-cover opacity-50 w-full -z-10" alt="" />

      {/* Top-right light */}
      <img src="/light2.svg" className="absolute inset-0 -top-64 md:-top-2/3 -right-1/2 object-cover opacity-50 w-full -z-10" alt="" />

      <img src="/line.svg" className="absolute inset-0 w-full h-full object-cover opacity-25 -z-20" alt="" />
      <header className="grid grid-rows-12 h-screen backdrop-blur-md relative p-4">
        <section className="row-span-11 grid grid-cols-12 place-items-center w-full h-full">
          <aside className="col-span-1 rotated flex gap-x-8">
            <AsideLink name="home" href="/" />
            <AsideLink name="about" href="#about" />
            <AsideLink name="projects" href="#projects" />
            <AsideLink name="skills" href="#skills" />
            <AsideLink name="contact" href="#contact" />
          </aside>

          <article className="col-span-10">
            <h1 className="font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-neutral-800 dark:text-white text-center">
              I Create <span className="font-serif bg-gradient-to-tr from-pink-400 to-red-500 bg-clip-text text-transparent relative z-10 pr-4">{randomName}</span><br />
              web experiences.
            </h1>
          </article>

          <div className="col-span-1 relative">
            <button className="rotated text-neutral-800/70 dark:text-white/70 font-mono inline-flex items-center gap-x-2" onClick={toggleDarkMode}>
              <span>Toggle {darkMode ? 'light' : 'dark'} mode</span>
            </button>
          </div>
        </section>

        <footer className="row-span-1 flex justify-center items-center">
          <p className="text-neutral-800 dark:text-white font-mono font-black">
            thomas vergne.
          </p>
        </footer>
      </header>
    </main>

    <hr className="border-neutral-800/10 dark:border-white/10" />

    <section className="py-16 relative min-h-screen" id="about">
      <h1 className="font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black dark:text-white text-neutral-800 text-center mt-16">
        Behind the <span className="font-serif bg-gradient-to-tr from-pink-400 to-red-500 bg-clip-text text-transparent relative z-10 pr-4">scenes</span><br />
      </h1>

      <article className="flex flex-col md:grid md:grid-cols-3 gap-16 place-items-center py-32 max-w-4xl mx-auto px-8">
        <div className="flex flex-col gap-y-4 col-span-2">
          <h2 className="font-mono text-4xl font-black dark:text-white text-neutral-800">
            I'm Thomas Vergne
          </h2>
          <p className="dark:text-white/50 text-neutral-800/50">
            A passionate web developer based in France, currently studying computer science. My fascination with mathematics fuels my analytical and creative approach to development. 
            <br /><br />
            In between web projects, you'll often find me immersed in the creation of new programming languages, a passion that allows me to explore the limits of technological innovation. 
            <br /><br /> 
            Join me on this adventure where code meets math, and where every line written is a new opportunity to redefine what's possible.
          </p>

          <a href="#contact" className="dark:text-white text-neutral-800 text-left py-3 px-8 dark:bg-white/10 w-max rounded-full font-mono font-semibold mt-4 dark:hover:bg-white/15 bg-black/10 hover:bg-black/15  transition-colors duration-300">
            Get in touch
          </a>
        </div>
        <img src="/picture.png" className="h-auto w-96 mx-auto object-cover order-first" alt="" />
      </article>

      <img src="/light4.svg" className="absolute -bottom-1/3 w-full -right-[40%] opacity-70 -z-10" alt="" />
      <img src="/light5.svg" className="absolute -bottom-2/3 w-full -left-[50%] opacity-70 -z-10" alt="" />
    </section>

    <hr className="dark:border-white/10 border-neutral-800/10" />

    <section className="min-h-screen relative" id="projects">
      <Line2 className="absolute inset-0 h-full object-cover opacity-30 dark:opacity-50 w-full -z-10 [&>*]:fill-neutral-800 dark:[&>*]:fill-white" />

      <h1 className="font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black dark:text-white text-neutral-800 text-center pt-32">
        Projects I <span className="font-serif bg-gradient-to-tr from-pink-400 to-red-500 bg-clip-text text-transparent relative z-10 pr-4">worked</span> on
      </h1>

      <div id="projects" className="grid md:grid-cols-2 max-w-5xl mx-auto px-8 py-32 gap-16">
        <article className="border dark:border-white/30 border-neutral-800/30 gradient-border p-8 rounded-2xl relative">
          <h3 className="dark:text-white text-neutral-800 text-2xl font-extrabold">
            Le Don Vert
          </h3>

          <p className="dark:text-white/70 text-neutral-800/70 my-4">
            Le Don Vert is a French website for plant exchanges between private individuals. It allows you to contribute to making the planet greener.
          </p>

          <a href="https://ledonvert.org" className="bg-gradient-to-tr from-green-400 to-yellow-500 py-3 px-8 absolute -bottom-6 text-white font-bold font-mono rounded-full right-6">
            Discover the website
          </a>
        </article>

        <article className="border dark:border-white/30 border-neutral-800/30 gradient-border p-8 rounded-2xl relative">
          <h3 className="dark:text-white text-neutral-800 text-2xl font-extrabold">
            Plume
          </h3>

          <p className="dark:text-white/70 text-neutral-800/70 my-4">
            Plume is a programming language I created. It allows simple, efficient programming, with features such as an extension system, custom data types and more. 
          </p>

          <a href="https://plume-lang.org" className="bg-gradient-to-tr from-pink-400 to-red-500 py-3 px-8 absolute -bottom-6 text-white font-bold font-mono rounded-full right-6">
            Discover the language
          </a>
        </article>
      </div>

      <img src="/light6.svg" className="absolute -bottom-2/3 w-full -right-[50%] opacity-50 -z-10" alt="" />
    </section>
    
    <hr className="dark:border-white/10 border-neutral-800/10" />

    <section className="relative min-h-screen pb-32" id="skills">
      <img src="/light2.svg" className="absolute -bottom-64 md:-bottom-1/3 lg:-bottom-2/3 -left-1/2 -z-10 opacity-50" alt="" />

      <h1 className="font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black dark:text-white text-neutral-800 text-center py-32">
        What I do <span className="font-serif bg-gradient-to-tr from-pink-400 to-red-500 bg-clip-text text-transparent relative z-10 pr-4">best</span>
      </h1>

      <div id="section__skills" className="flex flex-col gap-8 max-w-5xl mx-auto">
        <div className="p-8 rounded-2xl grid md:grid-cols-6 place-items-center gap-8 dark:text-white text-neutral-800">
          <IconBrowser className="h-auto w-32" />

          <div className="col-span-5">
            <h3 className="text-2xl font-extrabold font-mono">
              Building web front-end applications
            </h3>

            <p className="dark:text-white/70 text-neutral-800/70 text-lg mt-4">
              I've been creating web applications for several years now, using a wide variety of technologies. I specialize mainly in front-end development, where I combine aesthetics and functionality to deliver exceptional user experiences. My expertise keeps me up to date with the latest trends and innovations in the field.
            </p>

            <ul className="flex items-center mt-4 gap-2 flex-wrap">
              <li className="inline-flex dark:bg-white/20 bg-black/5 p-2 rounded-full px-4">
                <img src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg" className="w-6 h-auto" alt="" />

                <span className="ml-2">
                  Tailwind CSS
                </span>
              </li>
              <li className="inline-flex dark:bg-white/20 bg-black/5 p-2 rounded-full px-4 items-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png" className="w-6 h-auto" alt="" />

                <span className="ml-2">
                  React
                </span>
              </li>
              <li className="inline-flex dark:bg-white/20 bg-black/5 p-2 rounded-full px-4 items-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png" className="w-6 h-auto" alt="" />

                <span className="ml-2">
                  Typescript
                </span>
              </li>
              <li className="inline-flex dark:bg-white/20 bg-black/5 p-2 rounded-full px-4 items-center">
                <img src="https://seeklogo.com/images/R/remix-logo-862D8B1019-seeklogo.com.png" className="w-6 h-auto" alt="" />

                <span className="ml-2">
                  Remix
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="p-8 rounded-2xl grid lg:grid-cols-6 gap-8 place-items-center dark:text-white text-neutral-800">
          <IconLanguage className="w-32 h-auto" />

          <div className="col-span-5">
            <h3 className="text-2xl font-extrabold font-mono">
              Implementing domain-specific languages
            </h3>

            <p className="dark:text-white/70 text-neutral-800/70 text-lg mt-4">
              I tailor languages for the most specific needs. To do this, I use Haskell, a powerful functional language that enables me to create them efficiently and elegantly. Thanks to Haskell, I can design innovative solutions tailored to the unique requirements of each project.
            </p>

            <ul className="flex items-center mt-4 gap-2 flex-wrap">
              <li className="inline-flex dark:bg-white/20 bg-black/5 p-2 rounded-full px-4">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Haskell-Logo.svg/1024px-Haskell-Logo.svg.png" className="w-6 h-auto" alt="" />

                <span className="ml-2">
                  Haskell
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section className="relative pb-48" id="contact">
      <Line3 className="absolute inset-0 h-full w-full stroke-black/10 dark:stroke-white/10 -z-20 " />

      <h1 className="font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black dark:text-white text-neutral-800 text-center py-32">
        How to <span className="font-serif bg-gradient-to-tr from-pink-400 to-red-500 bg-clip-text text-transparent relative z-10 pr-4">reach</span> me
      </h1>
      
      <div id="section__contact" className="max-w-5xl mx-auto backdrop-blur-sm rounded-2xl p-8 gap-y-8 grid md:grid-cols-2">
        <div>
          <p className="dark:text-white/70 text-neutral-800/70">
            You can reach me by email at
          </p>
          <a href="mailto:contact@thomas-vergne.fr" className="bg-gradient-to-tr from-pink-400 to-red-500 bg-clip-text text-transparent text-2xl mt-4 block">
            contact@thomas-vergne.fr
          </a>
        </div>

        <div>
          <p className="dark:text-white/70 text-neutral-800/70">
            Also, you can find me on
          </p>
          <ul className="flex items-center gap-4 mt-4">
            <li className="dark:text-white dark:bg-white/20 text-neutral-800 bg-black/5 hover:bg-black/10 p-1.5 rounded-lg dark:hover:bg-white/25">
              <a href="https://github.com/thomasvergne">
                <IconBrandGithub size={32} />
              </a>
            </li>
            <li className="dark:text-white dark:bg-white/20 text-neutral-800 bg-black/5 hover:bg-black/10 p-1.5 rounded-lg dark:hover:bg-white/25">
              <a href="https://discordapp.com/users/766231131720646666">
                <IconBrandDiscordFilled size={32} />
              </a>
            </li>
            <li className="dark:text-white dark:bg-white/20 text-neutral-800 bg-black/5 hover:bg-black/10 p-1.5 rounded-lg dark:hover:bg-white/25">
              <a href="https://www.linkedin.com/in/thomasvrgn/">
                <IconBrandLinkedin size={32} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </>
}
