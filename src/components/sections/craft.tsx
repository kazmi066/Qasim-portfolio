import { ClapIcon } from "@/components/icons/clap";
import { ProjectorIcon } from "@/components/icons/projector";
import { SunsetIcon } from "@/components/icons/sunset";
import { WindIcon } from "@/components/icons/wind";
import { Reveal } from "@/components/motion/reveal";
import { craft } from "@/content/site";

const icons = {
  clap: ClapIcon,
  projector: ProjectorIcon,
  wind: WindIcon,
  sunset: SunsetIcon,
};

export function Craft() {
  return (
    <section className="craft section-space border-t border-rule" aria-labelledby="craft-title">
      <div className="wrap">
        <h2 id="craft-title" className="font-display max-w-[16ch] text-step-6 tracking-tight">
          How the work behaves
        </h2>
        <ul className="mt-16 grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          {craft.map((item, index) => {
            const Icon = icons[item.icon as keyof typeof icons];
            return (
              <li key={item.id} className="craft__item border-t border-rule pt-8">
                <Reveal delay={index * 0.08}>
                  <Icon size={32} className="text-sun" />
                  <h3 className="font-display mt-6 text-step-3">{item.title}</h3>
                  <p className="mt-4 text-paper/80">{item.copy}</p>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
