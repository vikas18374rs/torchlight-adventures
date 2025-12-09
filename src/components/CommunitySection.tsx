import { MessageCircle, Users, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { icon: MessageCircle, label: "Discord", href: "https://discordapp.com/invite/f5HU7Zv" },
  { icon: Users, label: "Reddit", href: "https://www.reddit.com/r/torchlight/" },
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/PlayTorchlight/" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com/PlayTorchlight" },
];

export function CommunitySection() {
  return (
    <section id="community" className="py-24 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Join the Community
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Connect with fellow adventurers, share your builds, and stay updated on the latest news.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-4 rounded-lg bg-card border border-border/30 hover:border-primary/50 hover:bg-card/80 transition-all duration-300"
            >
              <social.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
              <span className="font-display uppercase tracking-wider text-sm text-foreground group-hover:text-primary transition-colors">
                {social.label}
              </span>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="max-w-2xl mx-auto text-center bg-card rounded-lg p-8 md:p-12 border border-border/30">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to Begin Your Adventure?
          </h3>
          <p className="text-foreground/60 mb-8">
            Available on Windows, Mac, Linux, and Xbox. Choose your platform and start playing today.
          </p>
          <Button variant="cta" size="xl">
            Buy Now
          </Button>
        </div>
      </div>
    </section>
  );
}
