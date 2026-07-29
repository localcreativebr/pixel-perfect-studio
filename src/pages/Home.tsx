import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";

import { siteContent } from "@/data/content";
import motionCapa from "@/assets/home-capa.mp4";

const isVideo = (src: string) => /\.(mp4|webm|mov)(\?|$)/i.test(src);

const Home = () => {
  const { projects } = siteContent;

  return (
    <Layout>
      {/* Fixed background motion - fills viewport, stays behind content */}
      <div
        className="fixed inset-0 -z-10 bg-secondary overflow-hidden pointer-events-none"
        style={{ width: "100vw", height: "100dvh" }}
      >
        <video
          src={motionCapa}
          className="absolute inset-0 w-full h-full object-cover object-center"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          // @ts-ignore - iOS Safari inline playback
          webkit-playsinline="true"
          disablePictureInPicture
        />
      </div>

      {/* Spacer so projects start below the hero viewport */}
      <div
        className="w-full"
        style={{ height: "calc(100dvh - 5rem)" }}
        aria-hidden="true"
      />

      {/* Projects Grid - scrolls over the fixed motion */}
      <section className="relative z-10 bg-transparent px-3 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {projects.map((project) => (
            <Reveal key={project.id}>
            <Link
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
            </Reveal>
          ))}

        </div>
      </section>
    </Layout>
  );
};

export default Home;
