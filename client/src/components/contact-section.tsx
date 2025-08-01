import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertContactSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Mail, MessageCircle, Calendar, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { z } from "zod";

const contactFormSchema = insertContactSchema.extend({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Adresse email invalide"),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      contactType: "call"
    }
  });

  const createContactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contacts", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message envoyé !",
        description: "Nous vous recontacterons dans les plus brefs délais.",
      });
      reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contacts"] });
    },
    onError: () => {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi de votre message.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    createContactMutation.mutate(data);
  };

  const handleBookCall = () => {
    window.open('mailto:mahguez368@gmail.com?subject=Demande de consultation gratuite', '_blank');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/33627596376?text=Bonjour, je souhaite en savoir plus sur vos services de création de sites internet', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Prêt à transformer votre présence digitale ?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contactez-nous dès maintenant pour une consultation gratuite et découvrez comment nous pouvons faire décoller votre business.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid gap-6 mb-8">
              {/* Email Contact */}
              <Card className="bg-white/10 backdrop-blur-sm border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="w-16 h-16 gradient-primary rounded-lg flex items-center justify-center mr-4">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                      <p className="text-gray-300 mb-2">Écrivez-nous pour toute question</p>
                      <a 
                        href="mailto:mahguez368@gmail.com" 
                        className="text-purple-400 hover:text-purple-300 transition-colors duration-200 font-medium"
                        data-testid="contact-email"
                      >
                        mahguez368@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* WhatsApp Contact */}
              <Card className="bg-white/10 backdrop-blur-sm border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-4">
                      <MessageCircle className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">WhatsApp</h3>
                      <p className="text-gray-300 mb-2">Réponse rapide garantie</p>
                      <a 
                        href="https://wa.me/33627596376" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-green-400 hover:text-green-300 transition-colors duration-200 font-medium"
                        data-testid="contact-whatsapp"
                      >
                        +33 6 27 59 63 76
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-col gap-4">
              <Button
                onClick={handleBookCall}
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 transform hover:scale-105 transition-all duration-200"
                data-testid="button-book-call-contact"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Réserver un appel gratuit
              </Button>
              <Button
                onClick={handleWhatsApp}
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white transform hover:scale-105 transition-all duration-200"
                data-testid="button-whatsapp-contact"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Discuter sur WhatsApp
              </Button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/10 backdrop-blur-sm border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-6">
                  Ou remplissez ce formulaire
                </h3>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-gray-300">Nom *</Label>
                      <Input
                        id="name"
                        {...register("name")}
                        className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400"
                        placeholder="Votre nom"
                        data-testid="input-name"
                      />
                      {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <Label htmlFor="company" className="text-gray-300">Entreprise</Label>
                      <Input
                        id="company"
                        {...register("company")}
                        className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400"
                        placeholder="Nom de votre entreprise"
                        data-testid="input-company"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email" className="text-gray-300">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email")}
                        className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400"
                        placeholder="votre@email.com"
                        data-testid="input-email"
                      />
                      {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-gray-300">Téléphone</Label>
                      <Input
                        id="phone"
                        {...register("phone")}
                        className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400"
                        placeholder="06 12 34 56 78"
                        data-testid="input-phone"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-300">Message *</Label>
                    <Textarea
                      id="message"
                      {...register("message")}
                      className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400 h-32"
                      placeholder="Décrivez votre projet et vos besoins..."
                      data-testid="textarea-message"
                    />
                    {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full gradient-primary hover:shadow-lg transform hover:scale-105 transition-all duration-200 text-white"
                    disabled={createContactMutation.isPending}
                    data-testid="button-submit-contact"
                  >
                    {createContactMutation.isPending ? (
                      "Envoi en cours..."
                    ) : (
                      <>
                        <Phone className="w-5 h-5 mr-2" />
                        Envoyer ma demande
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
