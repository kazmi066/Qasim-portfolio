import { Reveal } from "@/components/motion/reveal";
import { aboutBody, site } from "@/content/site";

export function About() {
  return (
    <section id="about" className="about section-space border-t border-rule" aria-labelledby="about-title">
      <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <h2 id="about-title" className="sr-only">
            About {site.name}
          </h2>
          <Reveal>
            <p className="about__lead text-paper">{site.tagline}</p>
          </Reveal>
        </div>
        <div className="space-y-6 text-step-1 text-paper/85 lg:col-span-5 lg:pt-16">
          {aboutBody.map((paragraph) => (
            <Reveal key={paragraph}>
              <p>{paragraph}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
