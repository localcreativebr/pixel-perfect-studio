import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { siteContent } from "@/data/content";
import Reveal from "@/components/Reveal";


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
        preload="auto"
      />
    );
  }
  return (
    <img
      src={src}
      alt=""
      className={className}
      loading="eager"
      decoding="async"
      // @ts-ignore - fetchpriority is a valid HTML attribute
      fetchpriority="high"
    />
  );
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
        <Reveal className="bg-secondary w-full aspect-video overflow-hidden">
          <Media src={project.thumbnail} className="w-full h-full object-cover" />
        </Reveal>
      </section>

      {/* Project info */}
      <section className="px-3 py-12">
        <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <h1 className="text-3xl md:text-4xl font-bold">
            {project.name}
          </h1>
          <p className="text-lg leading-relaxed whitespace-pre-line">
            {project.description}
          </p>
        </Reveal>
      </section>


      {/* Gallery */}
      <section className="px-3 pb-8">
        {(() => {
          const items = project.images;
          const layout = project.layout;
          const rows: JSX.Element[] = [];
          // ORBYT IA: pares permanecem lado a lado também no mobile
          const pairCols =
            project.id === "orbyt-ia"
              ? "grid grid-cols-2 gap-3 mb-3 items-start"
              : "grid grid-cols-1 md:grid-cols-2 gap-3 mb-3";

          if (layout && layout.length === items.length) {
            let i = 0;
            while (i < items.length) {
              if (layout[i] === "half" && i + 1 < items.length && layout[i + 1] === "half") {
                rows.push(
                  <div key={i} className={pairCols}>

                    <div className="bg-secondary rounded-xl overflow-hidden" style={{ aspectRatio: "2667 / 3000" }}>
                      <Media src={items[i]} className="w-full h-full object-cover" />
                    </div>
                    <div className="bg-secondary rounded-xl overflow-hidden" style={{ aspectRatio: "2667 / 3000" }}>
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
          }

          // Fallback: pair every two consecutive images
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
