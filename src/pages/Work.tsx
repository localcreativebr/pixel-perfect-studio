import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";

import { siteContent } from "@/data/content";

const isVideo = (src: string) => /\.(mp4|webm|mov)(\?|$)/i.test(src);

const Work = () => {
  const { projects } = siteContent;

  return (
    <Layout>
      <section className="px-3 pt-24 sm:pt-28 pb-8">
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
                      preload="auto"
                      disablePictureInPicture
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

export default Work;
