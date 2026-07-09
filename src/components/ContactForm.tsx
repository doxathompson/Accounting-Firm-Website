export function ContactForm() {
  const inputClass =
    "mt-2 w-full border border-[#D8D3C8] bg-[#FAF9F4] px-4 py-4 text-sm text-[#111827] shadow-sm transition placeholder:text-[#8A8175] focus:border-[#101923] focus:bg-white focus:outline-none";

  const labelClass = "text-sm font-semibold text-[#111827]";

  return (
    <form className="border border-[#E5E1D8] bg-[#FAF9F4] p-6 shadow-sm sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className={inputClass}
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputClass}
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className={inputClass}
            placeholder="+44..."
          />
        </div>

        <div>
          <label htmlFor="businessType" className={labelClass}>
            Business type
          </label>
          <select
            id="businessType"
            name="businessType"
            className={inputClass}
            defaultValue=""
          >
            <option value="" disabled>
              Select one
            </option>
            <option>Sole trader</option>
            <option>Limited company</option>
            <option>Freelancer / consultant</option>
            <option>Not sure yet</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="preferredContact" className={labelClass}>
            Preferred contact method
          </label>
          <select
            id="preferredContact"
            name="preferredContact"
            className={inputClass}
            defaultValue=""
          >
            <option value="" disabled>
              Select one
            </option>
            <option>Email</option>
            <option>Phone</option>
            <option>Either is fine</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClass}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            placeholder="Tell us a little about your business and what you need help with."
            className={inputClass}
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center bg-[#101923] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#1C2936] sm:w-auto"
      >
        Book a free consultation
      </button>

      <p className="mt-5 max-w-md text-sm leading-6 text-[#4B5563]">
        Tell us a little about your business and we’ll get back to you to arrange
        a consultation.
      </p>
    </form>
  );
}