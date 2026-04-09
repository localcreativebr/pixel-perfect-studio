import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { siteContent } from "@/data/content";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = siteContent.projects.find((p) => p.id === id);

  if (!project) {
    return (
      <Layout>
        <div className="px-3 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Projeto não encontrado</h1>
          <Link to="/work" className="text-primary underline">
            Voltar para Work
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero image */}
      <section className="px-0">
        <div className="bg-secondary w-full aspect-video flex items-center justify-center">
          {project.thumbnail ? (
            <img
              src={project.thumbnail}
              alt={project.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-secondary" />
          )}
        </div>
      </section>

      {/* Project info */}
      <section className="px-3 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <h1 className="text-3xl md:text-4xl font-bold italic">
            {project.name}
          </h1>
          <p className="text-lg leading-relaxed">{project.description}</p>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-3 pb-8">
        {/* Full width images alternating with grid */}
        {project.images.map((img, i) => {
          if (i % 3 === 0 && i + 1 < project.images.length) {
            // Two-column row
            return (
              <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                <div className="bg-secondary rounded-xl aspect-[4/3] overflow-hidden">
                  {img ? (
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-secondary" />
                  )}
                </div>
                {project.images[i + 1] !== undefined && (
                  <div className="bg-secondary rounded-xl aspect-[4/3] overflow-hidden">
                    {project.images[i + 1] ? (
                      <img
                        src={project.images[i + 1]}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-secondary" />
                    )}
                  </div>
                )}
              </div>
            );
          }
          if (i % 3 === 2) {
            // Full width
            return (
              <div
                key={i}
                className="bg-secondary w-full aspect-video mb-3 overflow-hidden"
              >
                {img ? (
                  <img src={img} alt="" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-secondary" />
                )}
              </div>
            );
          }
          return null;
        })}
      </section>

      {/* Credits / Ficha Técnica */}
      <section className="px-3 pb-16">
        <h3 className="text-sm font-bold mb-6 uppercase">Ficha Técnica</h3>
        <div className="flex flex-col gap-4">
          {project.credits.map((credit, i) => (
            <div key={i}>
              <p className="text-sm font-bold">{credit.role}</p>
              <p className="text-sm text-muted-foreground">{credit.name}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
