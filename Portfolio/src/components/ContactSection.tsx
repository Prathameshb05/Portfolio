import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Github, Linkedin, Clipboard } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useTheme } from '../contexts/ThemeContext';

const ContactSection = () => {
  const { toast } = useToast();
  const { theme } = useTheme();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/xjkrrrjb", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. I'll get back to you soon!",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast({
          title: "Failed to send!",
          description: "Something went wrong. Please try again later.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Network Error",
        description: "Please check your internet connection and try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEmailCopy = async () => {
    try {
      await navigator.clipboard.writeText("prathameshb9199@gmail.com");
      toast({
        title: "Email Copied",
        description: "prathameshb9199@gmail.com has been copied to your clipboard."
      });
    } catch (err) {
      toast({
        title: "Failed to Copy",
        description: "Could not copy email. Try manually.",
        variant: "destructive"
      });
    }
  };

  const contactInfo = [
    {
      
      icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Email",
      content: "prathameshb9199@gmail.com",
      link: "mailto:prathameshb9199@gmail.com"
    },
    {
      icon: <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "LinkedIn",
      content: "linkedin.com/in/prathameshbhagat",
      link: "https://www.linkedin.com/in/prathamesh-bhagat-2b624732b"
    },
    {
      icon: <Github className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "GitHub",
      content: "github.com/prathameshbhagat",
      link: "https://github.com/Prathameshb05"
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            Get In <span className="text-red-500">Touch</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-red-500 mx-auto mb-4 sm:mb-6"></div>
          <p className={`text-base sm:text-lg max-w-2xl mx-auto px-4 ${theme === 'dark' ? 'text-gray-300' : 'text-black'}`}>
            Let's discuss your project ideas or potential opportunities. I'd love to hear from you!
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <Card className={`shadow-xl border transition-all duration-300 hover:scale-105 hover:shadow-2xl order-1 ${
              theme === 'dark' 
                ? 'border-white/20 bg-black/20 backdrop-blur-md' 
                : 'border-gray-200/50 bg-white/90 backdrop-blur-md'
            }`}>
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <h3 className={`text-xl sm:text-2xl font-bold mb-4 sm:mb-6 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                  Send Me a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div>
                    <label htmlFor="name" className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg border text-sm sm:text-base ${
                        theme === 'dark'
                          ? 'border-gray-700 bg-black text-white focus:ring-2 focus:ring-red-500 focus:border-red-500'
                          : 'border-gray-300 bg-white text-black focus:ring-2 focus:ring-red-500 focus:border-red-500'
                      }`}
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg border text-sm sm:text-base ${
                        theme === 'dark'
                          ? 'border-gray-700 bg-black text-white focus:ring-2 focus:ring-red-500 focus:border-red-500'
                          : 'border-gray-300 bg-white text-black focus:ring-2 focus:ring-red-500 focus:border-red-500'
                      }`}
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className={`w-full px-4 py-3 rounded-lg border resize-none text-sm sm:text-base ${
                        theme === 'dark'
                          ? 'border-gray-700 bg-black text-white focus:ring-2 focus:ring-red-500 focus:border-red-500'
                          : 'border-gray-300 bg-white text-black focus:ring-2 focus:ring-red-500 focus:border-red-500'
                      }`}
                      placeholder="Tell me about your project or just say hello!"
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-red-500 hover:bg-red-600 text-white py-3 text-base sm:text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info Cards */}
            <div className="space-y-6 sm:space-y-8 order-2">
              <div>
                <h3 className={`text-xl sm:text-2xl font-bold mb-4 sm:mb-6 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                  Let's Connect
                </h3>
                <p className={`text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 px-2 sm:px-0 ${theme === 'dark' ? 'text-gray-300' : 'text-black'}`}>
                  I'm always open to discussing new opportunities, interesting projects, 
                  or just having a conversation about technology and development.
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className={`shadow-lg border transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                    theme === 'dark' 
                      ? 'border-white/20 bg-black/20 backdrop-blur-md' 
                      : 'border-gray-200/50 bg-white/90 backdrop-blur-md'
                  }`}>
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-500/20 rounded-lg flex items-center justify-center text-red-500 flex-shrink-0">
                          {info.icon}
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className={`font-semibold text-sm sm:text-base ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                            {info.title}
                          </h4>
                          <a 
                             href={info.link}
                             className={`hover:text-red-500 transition-colors duration-300 underline-offset-2 hover:underline text-xs sm:text-sm break-all ${
                               theme === 'dark' ? 'text-gray-300' : 'text-black'
                             }`}
                             rel="noopener noreferrer"
                              >
                               {info.content}
                           </a>
                          {info.onCopy && (
                            <button onClick={info.onCopy} className="ml-2 inline-flex text-red-500 hover:text-red-700">
                              <Clipboard size={14} />
                            </button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className={`shadow-lg border transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                theme === 'dark' 
                  ? 'border-red-500/20 bg-gradient-to-r from-red-500/80 to-red-600/80 backdrop-blur-sm' 
                  : 'border-red-500/20 bg-gradient-to-r from-red-500/90 to-red-600/90 backdrop-blur-sm'
              }`}>
                <CardContent className="p-4 sm:p-6 text-center">
                  <h4 className="text-lg sm:text-xl font-bold mb-2 text-white">Available for Work</h4>
                  <p className="mb-4 text-sm sm:text-base text-white">
                    I'm currently open to new opportunities and exciting projects.
                  </p>
                  <Button 
                    variant="outline"
                    className={`text-sm sm:text-base px-4 py-2 transition-all duration-300 ${
                      theme === 'dark'
                        ? 'border-white text-white hover:bg-white hover:text-red-500'
                        : 'border-white text-black hover:bg-white hover:text-red-600'
                    }`}
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Let's Collaborate
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
