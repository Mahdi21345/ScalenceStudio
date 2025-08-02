import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, MessageCircle, Phone } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="py-20 bg-gray-50" id="contact">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            Prêt à transformer votre business ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contactez-nous dès maintenant pour discuter de votre projet et recevoir votre landing page en 24h.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-xl border-0 bg-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Envoyez-nous un message
                </h3>
                
                <form
                  action="https://formspree.io/f/manbdyaw"
                  method="POST"
                  className="space-y-6"
                >
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Votre email *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      required
                      className="w-full h-12 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="votre.email@exemple.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Votre nom *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      id="name"
                      required
                      className="w-full h-12 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Votre nom complet"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                      Entreprise
                    </label>
                    <Input
                      type="text"
                      name="company"
                      id="company"
                      className="w-full h-12 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Nom de votre entreprise"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Téléphone
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      id="phone"
                      className="w-full h-12 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="06 12 34 56 78"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Votre message *
                    </label>
                    <Textarea
                      name="message"
                      id="message"
                      required
                      rows={5}
                      className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500 resize-none"
                      placeholder="Décrivez votre projet, vos besoins, votre secteur d'activité..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    data-testid="contact-submit"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Autres moyens de contact
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">WhatsApp</h4>
                    <p className="text-gray-600 mb-3">
                      Contactez-nous directement pour une réponse rapide
                    </p>
                    <Button
                      onClick={() => window.open('https://wa.me/33627596376?text=Bonjour, je souhaite des informations sur vos services de landing page', '_blank')}
                      variant="outline"
                      className="border-green-500 text-green-600 hover:bg-green-50"
                      data-testid="contact-whatsapp"
                    >
                      Écrire sur WhatsApp
                    </Button>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Appel gratuit</h4>
                    <p className="text-gray-600 mb-3">
                      Réservez un créneau pour discuter de votre projet
                    </p>
                    <Button
                      onClick={() => window.open('https://calendly.com/mahguez368/meeting-site-internet-60-min', '_blank')}
                      variant="outline"
                      className="border-blue-500 text-blue-600 hover:bg-blue-50"
                      data-testid="contact-calendly"
                    >
                      Réserver un appel
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
              <h4 className="font-bold text-gray-900 mb-3">⚡ Réponse rapide garantie</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Réponse sous 2h en jour ouvré</li>
                <li>• Conseils sur mesure pour votre projet</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}