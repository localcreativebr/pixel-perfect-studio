import { useState } from "react";
import Layout from "@/components/Layout";
import { siteContent, type Language } from "@/data/content";
import { cn } from "@/lib/utils";
import aboutCapa from "@/assets/about-capa.png";
import Reveal from "@/components/Reveal";


const About = () => {
  const [lang, setLang] = useState<Language>("pt");
  const { about, team } = siteContent;
  const aboutContent = about[lang];

  return (
    <Layout>
      {/* Hero image area */}
      <Reveal as="section" className="bg-secondary w-full aspect-video overflow-hidden">
        <img
          src={aboutCapa}
          alt="Local Creative studio"
          className="w-full h-full object-cover"
        />
      </Reveal>

      {/* About text */}
      <section className="px-3 py-16">
        <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <h1 className="text-4xl font-bold">{aboutContent.title}</h1>
          <p className="text-lg leading-relaxed">{aboutContent.description}</p>
        </Reveal>


        {/* Language toggle */}
        <div className="flex gap-6 mt-12 mb-20">
          <button
            type="button"
            onClick={() => setLang("pt")}
            className={cn(
              "text-sm cursor-pointer transition-colors",
              lang === "pt" ? "font-bold" : "text-muted-foreground"
            )}
          >
            PT
          </button>
          <button
            type="button"
            onClick={() => setLang("en")}
            className={cn(
              "text-sm cursor-pointer transition-colors",
              lang === "en" ? "font-bold" : "text-muted-foreground"
            )}
          >
            EN
          </button>
        </div>
      </section>

      {/* Team */}
      <section className="px-3 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {team.map((member, i) => {
            const memberContent = member[lang];
            return (
              <div key={i} className="grid grid-cols-2 gap-3">
                <div className="bg-secondary rounded-xl aspect-square overflow-hidden">
                  {member.photo ? (
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-secondary" />
                  )}
                </div>
                <div className="flex flex-col justify-between py-2">
                  <div>
                    <h2 className="text-xl font-bold">{member.name}</h2>
                    <p className="text-base">{memberContent.role}</p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {memberContent.bio}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export default About;
