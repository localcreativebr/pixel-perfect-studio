import { useState } from "react";
import Layout from "@/components/Layout";

const Contact = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    service: "",
    email: "",
    description: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    const subject = encodeURIComponent(`Novo contato: ${form.firstName} ${form.lastName}`);
    const body = encodeURIComponent(
      `Nome: ${form.firstName} ${form.lastName}\nServiço: ${form.service}\nEmail: ${form.email}\n\nDescrição do projeto:\n${form.description}`
    );
    window.location.href = `mailto:localcreativebr@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 1000);
  };

  return (
    <Layout>
      <section className="px-3 py-8">
        <h1 className="text-4xl font-normal mb-16">Contact</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left side - info */}
          <div className="flex flex-col gap-6">
            <a
              href="https://wa.me/5511940263546"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:opacity-70 transition-opacity"
            >
              WhatsApp: +55 11 94026-3546
            </a>
            <a
              href="https://www.instagram.com/localcreativebr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:opacity-70 transition-opacity"
            >
              Instagram: @localcreativebr
            </a>
          </div>

          {/* Right side - form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label className="text-sm font-bold block mb-1">Name</label>
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                  className="input-underline w-full"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                  className="input-underline w-full"
                />
              </div>
            </div>

            <input
              type="text"
              name="service"
              placeholder="Serviço"
              value={form.service}
              onChange={handleChange}
              className="input-underline w-full"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              className="input-underline w-full"
            />

            <textarea
              name="description"
              placeholder="Project description"
              value={form.description}
              onChange={handleChange}
              rows={5}
              className="input-underline w-full resize-none"
            />

            <div>
              <button
                type="submit"
                disabled={sending}
                className="bg-foreground text-background px-6 py-2.5 rounded-xl text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {sent ? "Enviado!" : sending ? "Enviando..." : "Let's work!"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
