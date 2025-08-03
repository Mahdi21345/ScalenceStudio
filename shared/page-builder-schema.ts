import { z } from "zod";
import { createInsertSchema } from "drizzle-zod";

// Schema pour les blocs de construction de page
export const blockSchema = z.object({
  id: z.string(),
  type: z.enum(['hero', 'pricing', 'contact', 'faq', 'testimonials', 'gallery', 'text', 'image']),
  position: z.number(),
  visible: z.boolean().default(true),
  content: z.record(z.any()), // Contenu flexible selon le type de bloc
  styles: z.object({
    backgroundColor: z.string().optional(),
    textColor: z.string().optional(),
    padding: z.string().optional(),
    margin: z.string().optional(),
  }).optional(),
});

// Schema pour une page complète
export const pageSchema = z.object({
  id: z.string(),
  title: z.string(),
  slug: z.string(),
  blocks: z.array(blockSchema),
  settings: z.object({
    theme: z.string().default('default'),
    primaryColor: z.string().default('#6366f1'),
    secondaryColor: z.string().default('#1f2937'),
    fontFamily: z.string().default('Inter'),
  }),
  isPublished: z.boolean().default(false),
  createdAt: z.string(),
  updatedAt: z.string(),
});

// Types dérivés
export type Block = z.infer<typeof blockSchema>;
export type Page = z.infer<typeof pageSchema>;

// Templates de blocs prédéfinis
export const blockTemplates = {
  hero: {
    type: 'hero' as const,
    content: {
      title: 'Passe au niveau supérieur avec une Landing Page qui fait tripler ton taux de conversion',
      subtitle: 'Livrée en 24h',
      description: 'Ton offre est géniale mais personne ne l\'achète ? Vends plus avec une landing page qui explique clairement ta valeur et pousse à l\'action.',
      buttonText: 'COMMANDER MON SITE',
      buttonLink: '#contact',
      backgroundImage: '',
    }
  },
  pricing: {
    type: 'pricing' as const,
    content: {
      title: 'Un prix unique, sans surprise',
      price: 499,
      currency: '€',
      description: 'Landing page complète • Livraison 24h',
      features: [
        'Maquette gratuite avant production',
        'Copywriting optimisé par IA',
        'Design UX/UI professionnel',
        'Formulaires de contact inclus',
        'Méthode nom de domaine 1€/an',
        'Optimisation mobile automatique',
        'SEO de base inclus',
        'Livraison garantie en 24h'
      ]
    }
  },
  contact: {
    type: 'contact' as const,
    content: {
      title: 'Prêt à scaler ton business ?',
      description: 'Parle-nous de ton projet en visioconférence.',
      email: 'contact@prolanding.fr',
      phone: '+33 6 27 59 63 76',
      whatsapp: 'https://wa.me/33627596376?text=Salut, je veux commander une landing page'
    }
  },
  testimonials: {
    type: 'testimonials' as const,
    content: {
      title: 'Ils nous font confiance',
      testimonials: [
        {
          name: 'Sarah Martin',
          company: 'E-commerce Fashion',
          text: '+300% de conversions en 2 semaines !',
          image: '/images/testimonial-1.jpg',
          rating: 5
        }
      ]
    }
  },
  gallery: {
    type: 'gallery' as const,
    content: {
      title: 'Nos réalisations',
      images: []
    }
  },
  text: {
    type: 'text' as const,
    content: {
      text: 'Votre contenu personnalisé ici...',
      alignment: 'left',
      fontSize: 'medium'
    }
  }
};