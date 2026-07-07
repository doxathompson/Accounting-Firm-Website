export function ContactForm() {
  return (
    <form className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-semibold text-slate-800">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 shadow-sm"
          />
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-semibold text-slate-800">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 shadow-sm"
          />
        </div>

        <div>
          <label htmlFor="phone" className="text-sm font-semibold text-slate-800">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 shadow-sm"
          />
        </div>

        <div>
          <label htmlFor="businessType" className="text-sm font-semibold text-slate-800">
            Business type
          </label>
          <select
            id="businessType"
            name="businessType"
            className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 shadow-sm"
          >
            <option>Sole trader</option>
            <option>Limited company</option>
            <option>Freelancer / consultant</option>
            <option>Not sure yet</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="preferredContact" className="text-sm font-semibold text-slate-800">
            Preferred contact method
          </label>
          <select
            id="preferredContact"
            name="preferredContact"
            className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 shadow-sm"
          >
            <option>Email</option>
            <option>Phone</option>
            <option>Either is fine</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="text-sm font-semibold text-slate-800">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            placeholder="Tell us a little about your business and what you need help with."
            className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 shadow-sm"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 sm:w-auto"
      >
        Book a free consultation
      </button>

      <p className="mt-4 text-sm leading-6 text-slate-500">
        This form is ready for static UI review. Email or backend handling can be connected later.
      </p>
    </form>
  );
}