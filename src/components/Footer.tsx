import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

export function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Success!",
        description: "Thank you for subscribing. A confirmation email has been sent.",
      });
      setEmail("");
    }
  };

  return (
    <footer className="py-16 bg-card border-t border-border/30">
      <div className="container mx-auto px-4">
        {/* Newsletter */}
        <div className="max-w-xl mx-auto text-center mb-12">
          <h3 className="font-display text-2xl font-bold text-foreground mb-4">
            Sign up for updates, exclusive content, and more!
          </h3>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-background border-border focus:border-primary"
            />
            <Button variant="ember" type="submit">
              Subscribe
            </Button>
          </form>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border/30">
          <div className="font-display text-xl font-bold text-primary">
            TORCHLIGHT
          </div>
          
          <div className="flex items-center gap-6 text-sm text-foreground/50">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Support</a>
          </div>

          <p className="text-sm text-foreground/40">
            © 2024 Perfect World Entertainment. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
