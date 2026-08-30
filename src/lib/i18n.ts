export type Lang = 'en' | 'es' | 'fr';

export const LANGS: Lang[] = ['en', 'es', 'fr'];

export const I18N: Record<Lang, Record<string, string>> = {
  en: {
    'nav.blog': 'Blog',
    'nav.demos': 'Demos',
    'nav.news': 'News',
    'nav.docs': 'Docs',
    'nav.philosophy': 'Philosophy',
    'nav.menu': 'Open menu',
    'nav.close': 'Close menu',
    'hero.tagline':
      'Human-Computer Interaction, User Interface, and User Experience think tank.',
    'hero.note_prefix': 'Shell and CLI standards live at our sibling org,',
    'hero.note_org': 'openshellorg.',
    'principles.heading': 'What we care about',
    'principles.intro':
      'We advocate for and invest in demonstrating discoverable surfaces that lower cognitive tax. Human-Computer Interaction (HCI) and User Interface/User Experience (UI/UX) design are foundational to how computers fit into our lives: software should respect our cognitive limits and attentional resources, lean on mental models people already have or teach better ones, and keep features and usage on the path of discoverability and least surprise.',
    'theme.switch_to_dark': 'Switch to dark mode',
    'theme.switch_to_light': 'Switch to light mode',
    'lang.label': 'Language',
    'lang.en': 'English',
    'lang.es': 'Español',
    'lang.fr': 'Français',
  },
  es: {
    'nav.blog': 'Blog',
    'nav.demos': 'Demos',
    'nav.news': 'Noticias',
    'nav.docs': 'Docs',
    'nav.philosophy': 'Filosofía',
    'nav.menu': 'Abrir menú',
    'nav.close': 'Cerrar menú',
    'hero.tagline':
      'Think tank de interacción persona-computadora, interfaz de usuario y experiencia de usuario.',
    'hero.note_prefix': 'Las normas de Shell y CLI viven en nuestra organización hermana,',
    'hero.note_org': 'openshellorg.',
    'principles.heading': 'Lo que nos importa',
    'principles.intro':
      'Abogamos por — e invertimos en demostrar — superficies descubribles que bajan la carga cognitiva. La interacción persona-computadora (HCI) y el diseño de interfaz y experiencia de usuario (UI/UX) son la base de cómo encajan las computadoras en nuestras vidas: el software debería respetar nuestros límites cognitivos y atencionales, apoyarse en modelos mentales que ya existen o enseñar mejores, y mantener funciones y uso en el camino de la descubribilidad y la mínima sorpresa.',
    'theme.switch_to_dark': 'Cambiar a modo oscuro',
    'theme.switch_to_light': 'Cambiar a modo claro',
    'lang.label': 'Idioma',
    'lang.en': 'Inglés',
    'lang.es': 'Español',
    'lang.fr': 'Francés',
  },
  fr: {
    'nav.blog': 'Blog',
    'nav.demos': 'Démos',
    'nav.news': 'Actualités',
    'nav.docs': 'Docs',
    'nav.philosophy': 'Philosophie',
    'nav.menu': 'Ouvrir le menu',
    'nav.close': 'Fermer le menu',
    'hero.tagline':
      'Think tank en interaction humain-ordinateur, interface utilisateur et expérience utilisateur.',
    'hero.note_prefix': 'Les standards Shell et CLI vivent dans notre organisation sœur,',
    'hero.note_org': 'openshellorg.',
    'principles.heading': 'Ce qui nous tient à cœur',
    'principles.intro':
      'Nous défendons et investissons dans la démonstration de surfaces découvrables qui réduisent la charge cognitive. L’interaction humain-ordinateur (HCI) et la conception d’interface et d’expérience utilisateur (UI/UX) sont fondamentales dans la façon dont les ordinateurs s’insèrent dans nos vies : les logiciels devraient respecter nos limites cognitives et attentionnelles, s’appuyer sur les modèles mentaux déjà présents ou en enseigner de meilleurs, et garder fonctions et usage sur la voie de la découvrabilité et de la moindre surprise.',
    'theme.switch_to_dark': 'Passer en mode sombre',
    'theme.switch_to_light': 'Passer en mode clair',
    'lang.label': 'Langue',
    'lang.en': 'Anglais',
    'lang.es': 'Espagnol',
    'lang.fr': 'Français',
  },
};

