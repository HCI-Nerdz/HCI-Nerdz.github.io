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
    'principles.intro': 'Discoverable surfaces. Lower cognitive tax.',
    'principles.body_1':
      'Human-Computer Interaction (HCI) and User Interface/User Experience (UI/UX) design principles are foundational to how computers fit into our lives.',
    'principles.body_2':
      'Software should be respectful of our cognitive limitations and attentional resources, and intuitively take advantage of mental models that already exist, or teach the user new mental models that are superior.',
    'principles.body_3':
      'Features and usage should follow the principles of discoverability and least surprise.',
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
    'principles.intro': 'Superficies descubribles. Menor carga cognitiva.',
    'principles.body_1':
      'Los principios de interacción persona-computadora (HCI) y de diseño de interfaz y experiencia de usuario (UI/UX) son la base de cómo encajan las computadoras en nuestras vidas.',
    'principles.body_2':
      'El software debería respetar nuestros límites cognitivos y nuestros recursos atencionales, y aprovechar de forma intuitiva los modelos mentales que ya existen, o enseñar al usuario modelos nuevos que sean mejores.',
    'principles.body_3':
      'Las funciones y el uso deberían seguir los principios de descubribilidad y de mínima sorpresa.',
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
    'principles.intro': 'Surfaces découvrables. Moins de charge cognitive.',
    'principles.body_1':
      'Les principes d’interaction humain-ordinateur (HCI) et de conception d’interface et d’expérience utilisateur (UI/UX) sont fondamentaux dans la façon dont les ordinateurs s’insèrent dans nos vies.',
    'principles.body_2':
      'Les logiciels devraient respecter nos limites cognitives et nos ressources attentionnelles, et s’appuyer intuitivement sur les modèles mentaux déjà présents, ou enseigner à l’utilisateur des modèles nouveaux et meilleurs.',
    'principles.body_3':
      'Les fonctions et l’usage devraient suivre les principes de découvrabilité et de moindre surprise.',
    'theme.switch_to_dark': 'Passer en mode sombre',
    'theme.switch_to_light': 'Passer en mode clair',
    'lang.label': 'Langue',
    'lang.en': 'Anglais',
    'lang.es': 'Espagnol',
    'lang.fr': 'Français',
  },
};

