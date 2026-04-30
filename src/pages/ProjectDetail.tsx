import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { siteContent } from "@/data/content";

const isVideo = (src: string) => /\.(mp4|webm|mov)(\?|$)/i.test(src);

const Media = ({ src, className }: { src: string; className?: string }) => {
  if (!src) return <div className={className} />;
  if (isVideo(src)) {
    return (
      <video
        src={src}
        className={className}
        autoPlay
        loop
        muted
        playsInline
      />
    );
  }
  return <img src={src} alt="" className={className} />;
};

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
      {/* Hero */}
      <section className="px-0">
        <div className="bg-secondary w-full aspect-video overflow-hidden">
          <Media src={project.thumbnail} className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Project info */}
      <section className="px-3 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <h1 className="text-3xl md:text-4xl font-bold italic">
            {project.name}
          </h1>
          <p className="text-lg leading-relaxed whitespace-pre-line">
            {project.description}
          </p>
        </div>
      </section>

      {/* Gallery: pair every two consecutive images side-by-side, but if total odd the last one is full width */}
      <section className="px-3 pb-8">
        {(() => {
          const items = project.images;
          const rows: JSX.Element[] = [];
          let i = 0;
          while (i < items.length) {
            if (i + 1 < items.length) {
              rows.push(
                <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                  <div className="bg-secondary rounded-xl aspect-[4/3] overflow-hidden">
                    <Media src={items[i]} className="w-full h-full object-cover" />
                  </div>
                  <div className="bg-secondary rounded-xl aspect-[4/3] overflow-hidden">
                    <Media src={items[i + 1]} className="w-full h-full object-cover" />
                  </div>
                </div>
              );
              i += 2;
            } else {
              rows.push(
                <div
                  key={i}
                  className="bg-secondary w-full aspect-video mb-3 overflow-hidden rounded-xl"
                >
                  <Media src={items[i]} className="w-full h-full object-cover" />
                </div>
              );
              i += 1;
            }
          }
          return rows;
        })()}
      </section>

      {/* Credits */}
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
