import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { siteContent } from "@/data/content";
import motionCapa from "@/assets/home-capa.mp4";

const isVideo = (src: string) => /\.(mp4|webm|mov)(\?|$)/i.test(src);

const Home = () => {
  const { projects } = siteContent;

  return (
    <Layout>
      {/* Fixed background motion - fills viewport, stays behind content */}
      <div className="fixed inset-0 w-screen h-screen -z-10 bg-secondary overflow-hidden pointer-events-none">
        <video
          src={motionCapa}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* Spacer so projects start below the hero viewport */}
      <div className="h-[calc(100vh-5rem)]" aria-hidden="true" />

      {/* Projects Grid - scrolls over the fixed motion */}
      <section className="relative z-10 bg-transparent px-3 py-4">
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
