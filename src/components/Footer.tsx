import { forwardRef } from "react";

const Footer = forwardRef<HTMLElement>((_, ref) => {
  return (
    <footer ref={ref} className="bg-primary text-primary-foreground px-4 py-8">
      {/* Top section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold">©2026</h2>
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase leading-tight">
            LET'S BUILD SOMETHING<br />
            THAT MAKES A DIFFERENCE.
          </h2>
        </div>
      </div>

      {/* Location */}
      <div className="mb-16">
        <p className="text-lg">São Paulo, SP</p>
        <p className="text-lg">Brazil</p>
      </div>

      {/* Bottom section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-6">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-medium hover:opacity-70 transition-opacity"
          >
            Linkedin
          </a>
          <a
            href="https://www.instagram.com/localcreativebr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-medium hover:opacity-70 transition-opacity"
          >
            Instagram
          </a>
          <a
            href="mailto:hello@localcreative.com"
            className="text-lg font-medium hover:opacity-70 transition-opacity"
          >
            hello@localcreative.com
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-lg font-medium">LocalCreative©</p>
          <p className="text-lg font-medium uppercase">
            WORLDWIDE BRAND DESIGN STUDIO
          </p>
          <div className="mt-2">
            <p className="text-xs text-primary-foreground/60 uppercase">
              TUDO É DESIGN, NÓS PROJETAMOS TUDO
            </p>
            <p className="text-xs text-primary-foreground/60 uppercase">
              2026 © TODOS OS DIREITOS RESERVADOS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
