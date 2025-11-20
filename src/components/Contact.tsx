import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { createClient } from "@supabase/supabase-js";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card } from "@/components/ui/card";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Try Supabase first if configured
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
    if (supabaseUrl && supabaseKey) {
      try {
        console.log("[Contact] Supabase config detected. Initializing client.", { supabaseUrl, hasKey: !!supabaseKey });
        const supabase = createClient(supabaseUrl, supabaseKey);
        const insert = {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        };
        console.log("[Contact] Supabase insert payload:", insert);
        const { data, error } = await supabase.from("messages").insert([insert]);
        if (error) {
          console.error("[Contact] Supabase insert error:", error);
          toast({
            title: "Send failed",
            description: "Could not save message. Please try again or use your email client.",
          });
        } else {
          console.log("[Contact] Supabase insert success:", data);
          toast({
            title: "Message saved",
            description: "Thanks for reaching out. I'll get back to you soon!",
          });
          setFormData({ name: "", email: "", message: "" });
        }
        return;
      } catch (err) {
        console.error("[Contact] Supabase unexpected error:", err);
        toast({
          title: "Send failed",
          description: "Unexpected error while sending. Please try again.",
        });
        // fallback to EmailJS/mailto below
      }
    }

    // If Supabase not configured or failed, try EmailJS
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };
    if (serviceId && templateId && publicKey) {
      // Debug: log EmailJS config and template params
      console.log("[Contact] EmailJS config:", { serviceId, templateId, publicKey });
      console.log("[Contact] templateParams:", templateParams);

      // Send via EmailJS
      emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then((res) => {
          console.log("[Contact] EmailJS send success:", res);
          toast({
            title: "Message sent",
            description: "Thanks for reaching out. I'll get back to you soon!",
          });
          setFormData({ name: "", email: "", message: "" });
        })
        .catch((err) => {
          console.error("[Contact] EmailJS error:", err);
          toast({
            title: "Send failed",
            description: "Could not send message. Please try again or use your email client.",
          });
        });
    } else {
      // Fallback to mailto if EmailJS is not configured
      const subject = `New message from ${formData.name} <${formData.email}>`;
      const body = formData.message;
      const mailto = `mailto:costajean1005@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      console.log("[Contact] EmailJS not configured, opening mailto:", mailto);
      window.location.href = mailto;
      toast({
        title: "Email client opened",
        description: "Your email client should open so you can send the message.",
      });
      setFormData({ name: "", email: "", message: "" });
    }
    
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-container">
      <div className="text-center mb-16 space-y-4">
        <p className="text-primary text-sm font-semibold tracking-wide uppercase">
          Let's Talk
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text">
          Contact Me
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          I'm always open to new projects and opportunities
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <Card className="p-4 bg-card border-border hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a 
                      href="mailto:costajean1005@gmail.com" 
                      className="font-semibold hover:text-primary transition-colors"
                    >
                      {"costajean1005@gmail.com"}
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-4 bg-card border-border hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">WhatsApp</p>
                    <a 
                      href="https://wa.me/5521989365166" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold hover:text-primary transition-colors"
                    >
                      {"+5521989365166"}
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-4 bg-card border-border hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-semibold">Brazil - Rio de Janeiro</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <Card className="p-8 bg-card border-border">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="bg-background border-border focus:border-primary"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="bg-background border-border focus:border-primary"
                placeholder="you@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                className="bg-background border-border focus:border-primary min-h-[150px]"
                placeholder="Type your message..."
              />
            </div>

            <Button 
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
              size="lg"
            >
              <Send className="mr-2 h-5 w-5" />
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
