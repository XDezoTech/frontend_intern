import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Accordion } from '../components/UI';

import Button from "../components/ui/Button";

const faqs = [
  { q: 'Do I need previous trekking experience?', a: 'For easier treks like Mardi Himal or Langtang, no. For EBC or Annapurna Circuit, you should be comfortable walking 6–8 hours carrying a daypack. We offer a fitness assessment call before booking if you are unsure.' },
  { q: 'What is included in the trek price?', a: 'All National Park and TIMS permits, Sherpa guide, porters (1 per 2 guests), teahouse accommodation, and breakfast and dinner every day on trail. International flights, travel insurance, personal snacks, and alcoholic drinks are not included.' },
  { q: 'How do I get to Nepal?', a: 'Fly into Tribhuvan International Airport (KTM) in Kathmandu. We recommend arriving at least 2 days before your trek departs for acclimatisation and preparation. We can arrange airport pickup and Kathmandu accommodation.' },
  { q: 'What is the altitude risk?', a: 'All treks above 3,000m carry some altitude risk. Our guides are Wilderness First Responder certified and carry a portable altitude chamber. We follow strict acclimatisation schedules and will always descend rather than risk a guest\'s health.' },
  { q: 'Can I trek solo?', a: 'Yes. We have many solo trekkers and can match you with a small group departing the same route. Solo trekking with a guide is safer and often more enriching than going alone.' },
  { q: 'What is your cancellation policy?', a: '90+ days: full refund. 89–60 days: 75% refund. 59–30 days: 50% refund. Under 30 days: no refund, but credit can be applied to a future trek within 24 months.' },
];

const contactInfo = [
  { label: 'Address', value: 'JP Road, Thamel, Kathmandu, Nepal' },
  { label: 'Phone', value: '+977-1-470-1234' },
  { label: 'WhatsApp', value: '+977-9801-234567' },
  { label: 'Email', value: 'namaste@himalayatrails.np' },
  { label: 'Hours', value: 'Sun–Fri 9am–6pm NPT (UTC+5:45)' },
];

function ContactForm() {
  const [done, setDone] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();

  const onSubmit = async () => {
    await new Promise(r => setTimeout(r, 1000));
    setDone(true);
    reset();
  };

  if (done) return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="card-parchment p-8 text-center">
      <div className="text-5xl mb-4">🙏</div>
      <h3 className="font-heading text-2xl text-bark-dark mb-2">Message Received!</h3>
      <p className="text-bark/65 text-sm leading-relaxed mb-4">
        Thank you for reaching out. One of our guides will reply within one business day.
      </p>
      <button onClick={() => setDone(false)} className="text-xs text-crimson hover:underline">Send another message</button>
    </motion.div>
  );

  const fieldClass = (err) =>
    `w-full border px-4 py-3 text-sm text-bark bg-parchment placeholder-bark/30 focus:outline-none transition-colors min-h-[44px] ${
      err ? 'border-red-400' : 'border-parchment-deep focus:border-saffron'
    }`;

  const ErrMsg = ({ msg }) => <p className="text-xs text-red-500 mt-1">{msg}</p>;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="card-parchment p-6 space-y-4"
      noValidate
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="name"
            className="block text-xs text-bark/60 uppercase tracking-wider font-medium mb-1.5"
          >
            Full Name *
          </label>
          <input
            id="name"
            type="text"
            placeholder="Hari Bahadur"
            className={fieldClass(errors.name)}
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <ErrMsg msg={errors.name.message} />}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-xs text-bark/60 uppercase tracking-wider font-medium mb-1.5"
          >
            Email *
          </label>
          <input
            id="email"
            type="email"
            placeholder="hari@example.com"
            className={fieldClass(errors.email)}
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email" },
            })}
          />
          {errors.email && <ErrMsg msg={errors.email.message} />}
        </div>
      </div>

      <div>
        <label
          htmlFor="trek"
          className="block text-xs text-bark/60 uppercase tracking-wider font-medium mb-1.5"
        >
          Trek of Interest
        </label>
        <select id="trek" className={fieldClass(false)} {...register("trek")}>
          <option value="">Select a trek (optional)</option>
          <option>Everest Base Camp</option>
          <option>Annapurna Circuit</option>
          <option>Langtang Valley</option>
          <option>Upper Mustang</option>
          <option>Gokyo Lakes</option>
          <option>Mardi Himal</option>
          <option>Custom / Not sure yet</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="group"
            className="block text-xs text-bark/60 uppercase tracking-wider font-medium mb-1.5"
          >
            Group Size
          </label>
          <input
            id="group"
            type="number"
            min="1"
            max="20"
            placeholder="2"
            className={fieldClass(false)}
            {...register("group")}
          />
        </div>
        <div>
          <label
            htmlFor="month"
            className="block text-xs text-bark/60 uppercase tracking-wider font-medium mb-1.5"
          >
            Preferred Month
          </label>
          <select
            id="month"
            className={fieldClass(false)}
            {...register("month")}
          >
            <option value="">Any / Flexible</option>
            {[
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ].map((m) => (
              <option key={m}>{m}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-xs text-bark/60 uppercase tracking-wider font-medium mb-1.5"
        >
          Message *
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Tell us about your trekking experience, any health considerations, or questions you have…"
          className={`${fieldClass(errors.message)} resize-none`}
          {...register("message", {
            required: "Please write a message",
            minLength: { value: 15, message: "At least 15 characters" },
          })}
        />
        {errors.message && <ErrMsg msg={errors.message.message} />}
      </div>

      <label className="flex items-start gap-2 cursor-pointer">
        <input
          type="checkbox"
          className="mt-0.5 accent-crimson"
          {...register("consent", { required: "Required" })}
        />
        <span className="text-xs text-bark/60 leading-relaxed">
          I agree to Himalaya Trails contacting me about my enquiry.
        </span>
      </label>
      {errors.consent && <ErrMsg msg={errors.consent.message} />}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-crimson text-white text-xs tracking-widest uppercase font-medium py-3.5 hover:bg-crimson-light transition-colors min-h-[44px] disabled:opacity-60"
      >
        {isSubmitting ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-parchment">
      {/* Header */}
      <section className="relative pt-28 pb-14 bg-bark overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1553856622-d1b352e9a211?w=1920&q=80" alt="" className="w-full h-full object-cover" aria-hidden="true" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="font-heading text-5xl text-white">Get in Touch</h1>
          <p className="text-white/50 mt-2 text-sm">We reply to every message, usually within the same day.</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">

          {/* Office Info */}
          <div>
            <h2 className="font-heading text-3xl text-bark-dark mb-6">Kathmandu Office</h2>

            <div className="overflow-hidden mb-6 h-64">
              <iframe
                title="Himalaya Trails Kathmandu"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.6883!2d85.31167!3d27.71534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18fcb77fd4bd%3A0x58099b8d7b27d4!2sThamel%2C%20Kathmandu!5e0!3m2!1sen!2snp!4v1699000000000"
                width="100%" height="100%"
                style={{ border: 0 }}
                allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="space-y-3">
              {contactInfo.map(c => (
                <div key={c.label} className="flex items-start gap-3">
                  <span className="text-xs text-bark/50 uppercase tracking-wider font-medium w-20 flex-shrink-0 pt-0.5">{c.label}</span>
                  <p className="text-sm text-bark font-medium">{c.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="font-heading text-3xl text-bark-dark mb-6">Plan Your Trek</h2>
            <ContactForm />
          </div>
        </div>

        {/* FAQ */}
        <section>
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-heading text-4xl text-bark-dark">Frequently Asked</h2>
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Accordion items={faqs.map(f => ({ q: f.q, a: f.a }))} />
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
