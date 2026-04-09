import Layout from "@/components/Layout";
import { siteContent } from "@/data/content";

const About = () => {
  const { about, team } = siteContent;

  return (
    <Layout>
      {/* Hero image area */}
      <section className="bg-secondary w-full aspect-video flex items-center justify-center">
        <div className="w-full h-full bg-secondary" />
      </section>

      {/* About text */}
      <section className="px-3 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <h1 className="text-4xl font-bold">{about.title}</h1>
          <p className="text-lg leading-relaxed">{about.description}</p>
        </div>

        {/* Language toggle placeholder */}
        <div className="flex gap-6 mt-12 mb-20">
          <span className="text-sm font-bold cursor-pointer">PT</span>
          <span className="text-sm text-muted-foreground cursor-pointer">EN</span>
        </div>
      </section>

      {/* Team */}
      <section className="px-3 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {team.map((member, i) => (
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
                  <p className="text-base">{member.role}</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default About;
