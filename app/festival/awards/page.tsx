import type { Metadata } from "next";
import { PageBanner } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.festivalYear} Award Winners`,
  description: `The winners of the ${site.festivalYear} Footcandle Film Festival, announced at the closing Awards Ceremony.`,
};

type Award = { award: string; film: string; note?: string; director?: string; country?: string; img?: string };

// Winners announced at the 2026 closing Awards Ceremony, in ceremony order.
// Director and country come from each film's festival Film Guide page (omitted
// where the page doesn't list a director).
const awards: Award[] = [
  { award: "Scriptwriting", film: "The Light Keepers", note: "by Duncan B. Putney" },
  { award: "Best Audience Award", film: "River Warrior", img: "/images/awards/river-warrior.jpg", director: "Haley Mellon", country: "United States" },
  { award: "Audience Favorite Children's Short Film", film: "Line 12", img: "/images/awards/line-12.jpg", director: "Sarah Schulz, Christopher Schmier", country: "Germany" },
  { award: "Best Documentary Short", film: "A Man Who Takes Pictures of Flowers", img: "/images/awards/man-flowers.jpg", country: "United States" },
  { award: "Audience Favorite Documentary Short", film: "A Short Documentary About A Giant Pencil", img: "/images/awards/giant-pencil.jpg", director: "Daniel Straub", country: "United States" },
  { award: "Best Narrative Short", film: "Somewhere To Be", img: "/images/awards/somewhere-to-be.jpg", director: "Christy Chan", country: "United States" },
  { award: "Audience Favorite Narrative Short", film: "The Piano", img: "/images/awards/the-piano.jpg", country: "United States" },
  { award: "FilmLAB", film: "Amper&Sand", img: "/images/awards/amper-and-sand.jpg", director: "The Coworkers" },
  { award: "Best International Film", film: "Kikuyu Land", img: "/images/awards/kikuyu-land.jpg", director: "Andrew H. Brown, Bea Wangondu", country: "Kenya" },
  { award: "Best Narrative Feature", film: "Project Herbert", img: "/images/awards/project-herbert.jpg", country: "Netherlands" },
  { award: "Audience Favorite Narrative Feature", film: "Project Herbert", img: "/images/awards/project-herbert.jpg", country: "Netherlands" },
  { award: "Best Documentary Feature", film: "Kikuyu Land", img: "/images/awards/kikuyu-land.jpg", director: "Andrew H. Brown, Bea Wangondu", country: "Kenya" },
  { award: "Audience Favorite Documentary Feature", film: "Crime & Parody", img: "/images/awards/crime-parody.jpg", country: "United States" },
];

function AwardCard({ a }: { a: Award }) {
  return (
    <div className="flex flex-col items-center rounded-sm border border-border bg-surface p-6 text-center">
      <div className="text-sm font-bold uppercase tracking-[0.12em] text-accent">{a.award}</div>
      {a.img ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={a.img}
          alt={a.film}
          className="mx-auto mt-5 max-h-[360px] w-auto max-w-full rounded-sm shadow-lg"
        />
      ) : (
        <div className="mx-auto mt-5 flex h-[180px] w-full max-w-[280px] items-center justify-center rounded-sm border border-border bg-surface-2">
          <span aria-hidden className="text-5xl text-accent">&ldquo;&rdquo;</span>
        </div>
      )}
      <div className="mt-5 text-2xl font-bold">{a.film}</div>
      {a.note && <div className="mt-1 text-base font-light text-muted">{a.note}</div>}
      {a.director && <div className="mt-2 text-sm font-light text-muted">Directed by {a.director}</div>}
      {a.country && <div className="mt-0.5 text-sm font-light text-muted">{a.country}</div>}
    </div>
  );
}

export default function AwardsPage() {
  return (
    <>
      <PageBanner
        title={`${site.festivalYear} Award Winners`}
        subtitle="Announced at the closing Awards Ceremony"
      />

      <section className="border-b border-border">
        <div className="container-fc py-12 md:py-16">
          <div className="mx-auto max-w-3xl text-center prose-fc">
            <p>
              What a festival! Thank you to everyone who joined us for the {site.festivalYear} Footcandle Film Festival.
              At our closing Awards Ceremony we honored this year&apos;s standout films and filmmakers &mdash;
              congratulations to all of our winners.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {awards.map((a, i) => (
              <AwardCard key={`${a.award}-${i}`} a={a} />
            ))}
          </div>

          <div className="mx-auto mt-14 max-w-3xl text-center prose-fc">
            <p>
              Congratulations to every filmmaker who shared their work with us this year, and thank you to our members,
              sponsors, and volunteers for making it all possible. We&apos;ll see you next year! Questions? Email us at{" "}
              <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
