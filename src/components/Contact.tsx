"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { cvData } from "@/lib/cv-data";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

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
      <div className="flex items-center gap-3 mb-8">
        <FaEnvelope className="text-2xl text-white" />
        <h2 className="text-3xl font-bold text-white">Contact</h2>
      </div>
      
      <h3 className="text-2xl font-semibold mb-8 text-white">Let's Get in Touch!</h3>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-neutral-900 ring-1 ring-neutral-800 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-2">
            <FaPhone className="text-neutral-400" />
            <div className="text-sm text-neutral-500 uppercase">Contact No</div>
          </div>
          <a href={`tel:${p.phone}`} className="text-lg font-medium text-white hover:text-emerald-500 transition">{p.phone}</a>
        </div>
        <div className="bg-neutral-900 ring-1 ring-neutral-800 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-2">
            <FaEnvelope className="text-neutral-400" />
            <div className="text-sm text-neutral-500 uppercase">Email</div>
          </div>
          <a href={`mailto:${p.email}`} className="text-lg font-medium text-white hover:text-emerald-500 transition">{p.email}</a>
        </div>
        <div className="bg-neutral-900 ring-1 ring-neutral-800 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-2">
            <FaMapMarkerAlt className="text-neutral-400" />
            <div className="text-sm text-neutral-500 uppercase">Address</div>
          </div>
          <div className="text-lg font-medium text-white">{p.city}</div>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl space-y-4">
        <div>
          <input 
            {...register("name")} 
            placeholder="Name" 
            className="w-full px-4 py-3 rounded-lg border border-neutral-800 bg-neutral-900 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent" 
          />
          {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <input 
            type="email" 
            {...register("email")} 
            placeholder="Email" 
            className="w-full px-4 py-3 rounded-lg border border-neutral-800 bg-neutral-900 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent" 
          />
          {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <input 
            {...register("phone")} 
            placeholder="Phone (optional)" 
            className="w-full px-4 py-3 rounded-lg border border-neutral-800 bg-neutral-900 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent" 
          />
        </div>
        <div>
          <textarea 
            {...register("message")} 
            placeholder="Message" 
            rows={5} 
            className="w-full px-4 py-3 rounded-lg border border-neutral-800 bg-neutral-900 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none" 
          />
          {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
        </div>
        <button 
          disabled={isSubmitting} 
          className="px-6 py-3 bg-emerald-500 text-white rounded-lg hover:opacity-90 transition font-medium flex items-center gap-2 disabled:opacity-50"
        >
          <FaPaperPlane />
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
        {isSubmitSuccessful && <p className="text-emerald-400 font-medium">Message sent. Thank you!</p>}
      </form>
    </section>
  );
}
