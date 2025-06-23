import React, { useState } from "react";
import { Send } from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from "@/hooks/use-toast";
import SectionHeading from "./SectionHeading";

import { contact } from "../constants/constants";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for your message",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading
          title={contact.section.title}
          label={contact.section.label}
        />
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {contact.section.desc}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-3xl font-semibold mb-6">
              {contact.info.title}
            </h3>

            <div className="space-y-6 justify-center">
              {contact.info.data.map((item, key) => (
                <div key={key} className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium">{item.label}</h4>
                    <a
                      href="mailto"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.source}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">{contact.social.title}</h4>
              <div className="flex space-x-4 justify-center">
                {contact.social.data.map((item, key) => (
                  <a href={item.link} target="_blank">
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form action="" className="space-y-6 " onSubmit={handleSubmit}>
              <div className="">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Nieth Dubey"
                />
              </div>

              <div className="">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="Email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="nitesh@gmail.com"
                />
              </div>

              <div className="">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello talk..."
                />
              </div>

              <button
                disabled={isSubmitting}
                type="submit"
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "sending..." : "send Message"}
                <Send size={16}></Send>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
