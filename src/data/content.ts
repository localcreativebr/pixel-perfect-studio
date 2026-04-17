export interface Project {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  images: string[];
  credits: {
    role: string;
    name: string;
  }[];
}

export interface TeamMember {
  name: string;
  photo: string;
  pt: { role: string; bio: string };
  en: { role: string; bio: string };
}

export type Language = "pt" | "en";

export const siteContent = {
  about: {
    pt: {
      title: "Quem Somos",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    en: {
      title: "Who We Are",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  },
  team: [
    {
      name: "Fabrício Costa",
      photo: "",
      pt: {
        role: "Fundador/Designer",
        bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      },
      en: {
        role: "Founder/Designer",
        bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      },
    },
    {
      name: "Breno França",
      photo: "",
      pt: {
        role: "Co - Fundador/Designer",
        bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      },
      en: {
        role: "Co - Founder/Designer",
        bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      },
    },
  ],
  projects: [
    {
      id: "projeto-1",
      name: "Nome do projeto",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      thumbnail: "",
      images: ["", "", "", "", "", ""],
      credits: [
        { role: "Creative Direction", name: "Lorem Ipsum is simply dummy" },
        { role: "Design", name: "Lorem Ipsum is simply dummy" },
        { role: "Motion Design", name: "Lorem Ipsum is simply dummy" },
        { role: "Strategy & Copywriting", name: "Lorem Ipsum is simply dummy" },
      ],
    },
    {
      id: "projeto-2",
      name: "Nome do projeto 2",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      thumbnail: "",
      images: ["", "", "", ""],
      credits: [
        { role: "Creative Direction", name: "Lorem Ipsum is simply dummy" },
        { role: "Design", name: "Lorem Ipsum is simply dummy" },
      ],
    },
    {
      id: "projeto-3",
      name: "Nome do projeto 3",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      thumbnail: "",
      images: ["", "", "", ""],
      credits: [
        { role: "Creative Direction", name: "Lorem Ipsum is simply dummy" },
        { role: "Design", name: "Lorem Ipsum is simply dummy" },
      ],
    },
    {
      id: "projeto-4",
      name: "Nome do projeto 4",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      thumbnail: "",
      images: ["", "", "", ""],
      credits: [
        { role: "Creative Direction", name: "Lorem Ipsum is simply dummy" },
        { role: "Design", name: "Lorem Ipsum is simply dummy" },
      ],
    },
  ] as Project[],
};
