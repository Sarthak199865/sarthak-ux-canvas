import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import ProtectedProject from "@/components/ProtectedProject";
import { Skeleton } from "@/components/ui/skeleton";

const MeetO = () => {
  useEffect(() => {
    // SEO: title and meta description
    const title = "MEET.O — Seamless connections | Case Study";
    const description = "MEET.O case study — seamless connections, effortless bookings.";
    document.title = title;

    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = description;

    // Canonical tag
    const canonicalHref = `${window.location.origin}/projects/meet-o`;
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalHref;

    // Structured data (CreativeWork)
    const ldId = "ld-json-meeto";
    const existingLd = document.getElementById(ldId);
    if (existingLd) existingLd.remove();
    const script = document.createElement("script");
    script.id = ldId;
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: "MEET.O",
      headline: "Seamless connections",
      url: canonicalHref,
      author: { "@type": "Person", name: "Sarthak Sidharth Pany" }
    });
    document.head.appendChild(script);
  }, []);

  return (
    <ProtectedProject>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-16">
        <header className="px-6">
          <div className="max-w-5xl mx-auto">
            <p className="font-montreal text-sm text-muted-foreground tracking-wide uppercase">Case Study</p>
            <h1 className="mt-2 text-4xl md:text-5xl font-cormorant font-semibold text-portfolio-black">MEET.O</h1>
            <p className="mt-3 text-lg md:text-xl font-cormorant text-portfolio-gray">Seamless connections, effortless bookings</p>
          </div>
        </header>

        <section className="mt-10 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="md:col-span-2 bg-white rounded-xl border border-border/50 p-6">
              <h2 className="text-base font-montreal text-portfolio-black mb-4">Overview</h2>
              <div className="space-y-3">
                <Skeleton className="h-4 w-11/12" />
                <Skeleton className="h-4 w-10/12" />
                <Skeleton className="h-4 w-9/12" />
              </div>
            </article>
            <aside className="bg-white rounded-xl border border-border/50 p-6">
              <h3 className="text-base font-montreal text-portfolio-black mb-4">Role & Duration</h3>
              <div className="space-y-3">
                <Skeleton className="h-4 w-8/12" />
                <Skeleton className="h-4 w-6/12" />
              </div>
            </aside>
          </div>
        </section>

        <section className="mt-10 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-base font-montreal text-portfolio-black mb-4">Key Screens</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1,2,3,4,5,6].map((i) => (
                <article key={i} className="bg-white rounded-xl border border-border/50 overflow-hidden">
                  <div className="aspect-[4/3] bg-muted">
                    <Skeleton className="h-full w-full" />
                  </div>
                  <div className="p-4">
                    <Skeleton className="h-4 w-2/3" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-10 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="bg-white rounded-xl border border-border/50 p-6">
              <h2 className="text-base font-montreal text-portfolio-black mb-4">Problem</h2>
              <div className="space-y-3">
                <Skeleton className="h-4 w-11/12" />
                <Skeleton className="h-4 w-10/12" />
                <Skeleton className="h-4 w-9/12" />
              </div>
            </article>
            <article className="bg-white rounded-xl border border-border/50 p-6">
              <h2 className="text-base font-montreal text-portfolio-black mb-4">Solution</h2>
              <div className="space-y-3">
                <Skeleton className="h-4 w-11/12" />
                <Skeleton className="h-4 w-10/12" />
                <Skeleton className="h-4 w-9/12" />
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
    </ProtectedProject>
  );
};

export default MeetO;
