import { ArrowUp } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-10 flex flex-wrap justify-between">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Nitesh Dueby! sab mera hai
      </p>

      <a href="#hero" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
        <ArrowUp size={20}></ArrowUp>
      </a>
    </footer>
  );
};

export default Footer;
