import Link from "next/link";

import { InstagramMark } from "@/components/icons/instagram-mark";
import { YoutubeIcon } from "@/components/icons/youtube";
import { HeroTitle } from "@/components/sections/hero-title";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__copy wrap">
        <HeroTitle />
        <p className="hero__lede">
          Video editor, motion designer, shorts editor.
          <br />
          Nature cinematography that still has dirt on it.
        </p>
        <Link href="/#contact" className="hero__cta">
          Work with me
        </Link>
      </div>

      <div className="hero__dock">
        <Link
          href={site.instagram}
          className="hero__social"
          target="_blank"
          rel="noreferrer"
          aria-label={`${site.instagramHandle} on Instagram`}
        >
          <InstagramMark size={20} />
        </Link>
        <Link
          href={site.youtube}
          className="hero__social"
          target="_blank"
          rel="noreferrer"
          aria-label={`${site.youtubeHandle} on YouTube`}
        >
          <YoutubeIcon size={20} />
        </Link>
        <Link
          href={`mailto:${site.email}`}
          className="hero__social"
          aria-label={`Email ${site.email}`}
        >
          <span className="hero__mail">@</span>
        </Link>
        <span className="hero__live" aria-hidden="true" />
      </div>
    </section>
  );
}
