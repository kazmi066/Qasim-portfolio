import { SparklesIcon } from "@/components/icons/sparkles";
import { marqueeItems } from "@/content/site";

export function Marquee() {
  const loop = [...marqueeItems, ...marqueeItems];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {loop.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="font-display flex items-center gap-6 text-step-3 tracking-tight text-paper/90"
          >
            {item}
            <SparklesIcon size={22} className="text-sun" />
          </div>
        ))}
      </div>
    </div>
  );
}
