"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { cvData } from "@/lib/cv-data";
type FormData = { name: string; email: string; phone?: string; message: string };

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(10),
});

export default function Contact() {
  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful } } =
    useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    // Varianta simplă: Formspree (creezi endpoint și îl pui aici)
    const res = await fetch("https://formspree.io/f/your-id", {
      method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data)
    });
    // Sau: Next.js route /api/contact + Nodemailer (poate fi adăugat ulterior)
  };

  const p = cvData.profile;

  return (
    <section id="contact" className="py-12">
      <h2 className="text-2xl font-semibold mb-6">Contact — Hai să vorbim!</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="rounded-xl bg-neutral-900 p-4 ring-1 ring-neutral-800">
          <div className="text-sm text-neutral-400">Email</div>
          <a href={`mailto:${p.email}`} className="text-lg">{p.email}</a>
        </div>
        <div className="rounded-xl bg-neutral-900 p-4 ring-1 ring-neutral-800">
          <div className="text-sm text-neutral-400">Telefon</div>
          <a href={`tel:${p.phone}`} className="text-lg">{p.phone}</a>
        </div>
        <div className="rounded-xl bg-neutral-900 p-4 ring-1 ring-neutral-800">
          <div className="text-sm text-neutral-400">Oraș</div>
          <div className="text-lg">{p.city}</div>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-4 max-w-xl">
        <input {...register("name")} placeholder="Nume" className="w-full rounded-md bg-neutral-900 border-neutral-800" />
        {errors.name && <p className="text-red-400 text-sm">{errors.name.message}</p>}
        <input type="email" {...register("email")} placeholder="Email" className="w-full rounded-md bg-neutral-900 border-neutral-800" />
        {errors.email && <p className="text-red-400 text-sm">{errors.email.message}</p>}
        <input {...register("phone")} placeholder="Telefon (opțional)" className="w-full rounded-md bg-neutral-900 border-neutral-800" />
        <textarea {...register("message")} placeholder="Mesaj" rows={5} className="w-full rounded-md bg-neutral-900 border-neutral-800" />
        {errors.message && <p className="text-red-400 text-sm">{errors.message.message}</p>}
        <button disabled={isSubmitting} className="px-4 py-2 bg-[var(--accent)] text-black rounded-lg hover:opacity-90">
          {isSubmitting ? "Se trimite..." : "Trimite mesaj"}
        </button>
        {isSubmitSuccessful && <p className="text-emerald-400">Mesaj trimis. Mulțumesc!</p>}
      </form>
    </section>
  );
}
