"use client";

import { useEffect, useRef, useState } from "react";

const subjects = [
  "Course and programme enquiry",
  "School or educator visit",
  "Academic or industry partnership",
  "Donation or support",
  "Media enquiry",
  "General enquiry",
];

/**
 * Enquiry form. Until the Centre's role-based inbox is confirmed this
 * composes the message locally and confirms receipt of the details on screen.
 */
export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [subject, setSubject] = useState(subjects[0]);
  const confirmationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sent) confirmationRef.current?.focus();
  }, [sent]);

  if (sent) {
    return (
      <div
        ref={confirmationRef}
        role="status"
        tabIndex={-1}
        className="border border-line p-10 text-center outline-none md:p-16"
      >
        <p className="eyebrow mb-4">Thank you</p>
        <p className="display-3 text-ink">Your enquiry is ready to send.</p>
        <p className="mx-auto mt-5 max-w-md text-body">
          Your email application should have opened with the message addressed
          to the Centre team. If it did not, please email{" "}
          <a
            href="mailto:coe@anandacollege.edu.lk"
            className="link-underline font-medium text-maroon"
          >
            coe@anandacollege.edu.lk
          </a>{" "}
          directly and mention &ldquo;{subject}&rdquo;.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="link-underline mt-8 font-medium text-maroon"
        >
          Start another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      className="flex flex-col gap-8"
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const body = [
          `Name: ${data.get("name")}`,
          `Email: ${data.get("email")}`,
          "",
          String(data.get("message") ?? ""),
        ].join("\n");
        window.location.href = `mailto:coe@anandacollege.edu.lk?subject=${encodeURIComponent(
          `[${subject}] Website enquiry`,
        )}&body=${encodeURIComponent(body)}`;
        setSent(true);
      }}
    >
      <fieldset>
        <legend className="eyebrow !text-[0.625rem] mb-4">
          Choose a subject so your message reaches the right team
        </legend>
        <div className="flex flex-wrap gap-2">
          {subjects.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSubject(s)}
              aria-pressed={subject === s}
              className={`border px-3.5 py-2 text-[0.8125rem] font-medium transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maroon ${
                subject === s
                  ? "border-maroon bg-maroon text-white"
                  : "border-line text-body hover:border-maroon hover:text-maroon"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-8 sm:grid-cols-2">
        <label className="flex flex-col gap-3">
          <span className="eyebrow !text-[0.625rem]">Name</span>
          <input
            required
            name="name"
            type="text"
            autoComplete="name"
            className="border-b border-line bg-transparent py-3 text-[1.0625rem] transition-colors duration-300 focus:border-maroon focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-maroon"
          />
        </label>
        <label className="flex flex-col gap-3">
          <span className="eyebrow !text-[0.625rem]">Email</span>
          <input
            required
            name="email"
            type="email"
            autoComplete="email"
            className="border-b border-line bg-transparent py-3 text-[1.0625rem] transition-colors duration-300 focus:border-maroon focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-maroon"
          />
        </label>
      </div>

      <label className="flex flex-col gap-3">
        <span className="eyebrow !text-[0.625rem]">Message</span>
        <textarea
          required
          name="message"
          rows={6}
          className="resize-none border border-line bg-transparent p-4 text-[1.0625rem] transition-colors duration-300 focus:border-maroon focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maroon"
        />
      </label>

      <div>
        <button type="submit" className="btn-solid">
          Send an enquiry
        </button>
      </div>
    </form>
  );
}
