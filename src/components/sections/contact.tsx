"use client";

import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

import { AtSignIcon } from "@/components/icons/at-sign";
import { InstagramMark } from "@/components/icons/instagram-mark";
import { SendIcon } from "@/components/icons/send";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/content/site";

export function Contact() {
  const [sent, setSent] = useState(false);

  function copyEmail() {
    navigator.clipboard.writeText(site.email).then(() => {
      toast("Email copied");
    });
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");
    const body = encodeURIComponent(`From ${name} <${email}>\n\n${message}`);
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Edit request")}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="contact section-space border-t border-rule bg-ink-soft" aria-labelledby="contact-title">
      <div className="wrap grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h2 id="contact-title" className="display-title">
            Bring the footage. Keep the weather.
          </h2>
          <Link
            href={`mailto:${site.email}`}
            className="contact__mail mt-10 block text-paper no-underline hover:text-sun"
          >
            hello@<wbr />qasim.studio
          </Link>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button type="button" variant="outline" onClick={copyEmail} className="h-12 rounded-none px-5">
              <AtSignIcon size={18} />
              Copy email
            </Button>
            <Link
              href={site.instagram}
              className="inline-flex items-center gap-2 text-paper no-underline hover:opacity-80"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramMark size={22} />
              {site.instagramHandle}
            </Link>
          </div>
        </div>

        <form onSubmit={onSubmit} className="flex flex-col gap-5 lg:col-span-5">
          <p className="text-meta text-mist">A short brief is enough</p>
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" required autoComplete="name" className="h-12 rounded-none bg-ink text-step-0" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required autoComplete="email" className="h-12 rounded-none bg-ink text-step-0" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">What's the job</Label>
            <Textarea id="message" name="message" required rows={5} className="rounded-none bg-ink text-step-0" />
          </div>
          <Button type="submit" className="h-14 rounded-none text-base">
            <SendIcon size={18} />
            {sent ? "Opening mail" : "Send the brief"}
          </Button>
        </form>
      </div>
    </section>
  );
}
