"use client";

import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Code,
  Send,
  Copy,
  Check,
} from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("bharathmay2005@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    setLoading(false);

    if (data.success) {
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "bharathmay2005@gmail.com",
      href: "mailto:bharathmay2005@gmail.com",
      highlight: true,
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-9789459437",
      href: "tel:+919789459437",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Salem, Tamil Nadu",
      href: "https://www.google.com/maps/place/Salem,+Tamil+Nadu",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/bharathmurugan",
      username: "@bharathmurugan",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/bharathm12",
      username: "@bharathm12",
    },
    {
      icon: Code,
      label: "LeetCode",
      href: "https://leetcode.com/u/Bharath_22ITR012/",
      username: "@Bharath22ITR012",
    },
  ];

  return (
    <section id="contact" className="py-28 px-6 bg-background relative">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-mono tracking-widest uppercase text-primary mb-4">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let’s Connect & Build Something Meaningful
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* LEFT SECTION */}
          <div className="space-y-6">

            {/* Contact Cards */}
            {contactInfo.map((info) => (
              <div
                key={info.label}
                className={`flex items-center justify-between p-5 rounded-2xl border border-border 
                bg-card hover:border-primary/40 hover:shadow-xl transition-all duration-300 ${
                  info.highlight ? "ring-1 ring-primary/30" : ""
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary">
                    <info.icon size={20} />
                  </div>

                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">
                      {info.label}
                    </p>

                    <Link
                      href={info.href}
                      target="_blank"
                      className="text-foreground font-medium hover:text-primary transition"
                    >
                      {info.value}
                    </Link>
                  </div>
                </div>

                {info.label === "Email" && (
                  <button
                    onClick={handleCopy}
                    className="text-muted-foreground hover:text-primary transition"
                  >
                    {copied ? <Check size={18} /> : <Copy size={18} />}
                  </button>
                )}
              </div>
            ))}

            {/* CONTACT FORM */}
            <form
              onSubmit={handleSubmit}
              className="space-y-4 bg-card p-6 rounded-2xl border border-border"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-background border border-border focus:border-primary outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-background border border-border focus:border-primary outline-none"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-background border border-border focus:border-primary outline-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-semibold hover:opacity-90 transition"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {success && (
                <p className="text-green-500 text-sm">
                  Message sent successfully!
                </p>
              )}
            </form>
          </div>

          {/* RIGHT SOCIAL SECTION */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-foreground">
              Connect with me online
            </h3>

            <div className="grid gap-6">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 p-6 rounded-2xl border border-border 
                  bg-card hover:border-primary/50 hover:-translate-y-2 
                  hover:shadow-2xl transition-all duration-300"
                >
                  <div className="p-4 bg-primary/10 rounded-xl text-primary group-hover:bg-primary/20 transition">
                    <social.icon size={22} />
                  </div>

                  <div>
                    <p className="font-semibold text-foreground group-hover:text-primary transition">
                      {social.label}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {social.username}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
