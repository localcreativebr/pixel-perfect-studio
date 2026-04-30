import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { siteContent } from "@/data/content";
import motionCapa from "@/assets/home-capa.gif";

const isVideo = (src: string) => /\.(mp4|webm|mov)(\?|$)/i.test(src);

const Home = () => {
  const { projects } = siteContent;

  return (
    <Layout>
      {/* Hero - Sticky */}
      <section className="sticky-hero h-[calc(100vh-5rem)] bg-secondary rounded-none overflow-hidden">
        <img
          src={motionCapa}
          alt="Local Creative — motion principal"
          className="w-full h-full object-cover"
        />
      </section>

      {/* Projects Grid - scrolls over hero */}
      <section className="content-over-hero bg-background px-3 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/work/${project.id}`}
              className="group block"
            >
              <div className="bg-secondary rounded-xl aspect-[4/3] overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-[0.98]">
                {project.thumbnail ? (
                  isVideo(project.thumbnail) ? (
                    <video
                      src={project.thumbnail}
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  ) : (
                    <img
                      src={project.thumbnail}
                      alt={project.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  )
                ) : (
                  <div className="w-full h-full bg-secondary" />
                )}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Home;
