export type Language = 'en' | 'fr';

export const translations = {
  en: {
    nav: {
      languageSelector: 'Select language',
      english: 'English',
      french: 'French'
    },
    hero: {
      title: 'DÉJÀ VU',
      subtitle: 'In the fabric of time, some stories refuse to end.',
      buyButton: 'BUY THE BOOK NOW',
      storyButton: 'THE STORY'
    },
    reviews: {
      items: [
        {
          text: "Cristello's debut novel is a revelation—a meditation on love, grief, and the mysterious ways our souls recognize one another across time. A stunning achievement.",
          author: "The Literary Times",
          rating: 5
        },
        {
          text: "Equal parts romance and philosophical exploration, Déjà Vu will have readers questioning the very nature of time, fate, and the choices that define us.",
          author: "Book Review Weekly",
          rating: 5
        }
      ]
    },
    story: {
      authorButton: 'ABOUT THE AUTHOR',
      title: 'THE STORY',
      content: [
        "In the swinging bars of 1960's New York, two souls brush against eternity. June and Claude's passion burns bright, a supernova of possibility; however, as their careers soar and the realities of long distance settle in, their connection wanes, leaving them to wonder: what if they had seized their moment?",
        "Challenged by transatlantic letters and fate's cruel hand, their story should end there, lost to time's relentless march but some bonds refuse to be severed.",
        "Decades later, in a Parisian brasserie, Matilda locks eyes with Yves. In that moment, time hiccups. Memories that don't belong to them flood their senses. As they fall in love, they're haunted by the ghosts of lives unlived, choices unmade.",
        "This is not merely a love story, but an exploration of existence itself. It asks: Can we break free from our past lives, or are we destined to dance the same steps across eternity? Set against the vibrant backdrop of jazz-filled Manhattan and the timeless streets of Paris, it blurs the line between fiction and reality, challenging our perception of which experiences are new and which ones are a true case of DÉJÀ VU."
      ]
    },
    author: {
      title: 'ABOUT THE AUTHOR',
      description: 'Audriana is an acclaimed author known for weaving intricate narratives that blur the lines between reality and fiction with a biography-style approach to fiction. With a unique perspective on storytelling, she creates immersive experiences that challenge readers to question where one memory ends and another begins—creating overlap in time. DÉJÀ VU is her debut novel, inspired by her personal connections with unexplained connections, the malleability of time, and the power of second chances. Audriana is an American author living in Paris with her husband—the man who deeply encouraged this novel and inspired it to life.',
      role: 'Author • Writer',
      newsletter: {
        title: 'STAY UPDATED',
        description: 'Be the first to get updates on my new releases, events, and exclusive sneak peeks. No spam, promise! 💌 ',
        placeholder: 'Enter your email',
        button: 'LET\'S STAY IN TOUCH!',
        toast: {
          title: 'Thank you for subscribing!',
          description: 'You\'ll receive updates about new releases and events. No spam, promise! 💌'
        }
      }
    },
    purchase: {
      title: 'GET YOUR COPY',
      description: 'Experience the timeless journey of love and fate.',
      platforms: {
        amazon: 'Buy on Amazon',
        appleBooks: 'Available on Apple Books',
        barnesNoble: 'Get it at Barnes & Noble'
      }
    }
  },
  fr: {
    nav: {
      languageSelector: 'Choisir la langue',
      english: 'Anglais',
      french: 'Français'
    },
    hero: {
      title: 'DÉJÀ-VU',
      subtitle: 'Dans le tissu du temps, certaines histoires refusent de s\'achever.',
      buyButton: 'ACHETER LE LIVRE',
      storyButton: 'L\'HISTOIRE'
    },
    reviews: {
      items: [
        {
          text: "Le premier roman de Cristello est une révélation—une méditation sur l'amour, le deuil et les façons mystérieuses dont nos âmes se reconnaissent à travers le temps. Une réussite remarquable.",
          author: "The Literary Times",
          rating: 5
        },
        {
          text: "À la fois romance et exploration philosophique, Déjà-Vu amènera les lecteurs à s'interroger sur la nature même du temps, du destin et des choix qui nous définissent.",
          author: "Book Review Weekly",
          rating: 5
        }
      ]
    },
    story: {
      authorButton: 'À PROPOS DE L\'AUTRICE',
      title: 'L\'HISTOIRE',
      content: [
        "Dans les bars animés de New York des années 60, deux âmes frôlent l'éternité. La passion de June et Claude brûle intensément, supernova de possibilités ; pourtant, alors que leurs carrières s'envolent et que les réalités de la distance s'installent, leur lien s'estompe, les laissant se demander : et s'ils avaient saisi leur instant ? ",
        "Mise à l'épreuve par des lettres transatlantiques et la main cruelle du destin, leur histoire devrait s'arrêter là, perdue dans la marche implacable du temps, mais certains liens refusent d'être brisés.",
        "Des décennies plus tard, dans une brasserie parisienne, Matilda croise le regard d'Yves. À cet instant, le temps trébuche. Des souvenirs qui ne leur appartiennent pas envahissent leurs sens. Alors qu'ils tombent amoureux, ils sont hantés par les fantômes de vies non vécues, de choix non faits.",
        "Ce n'est pas simplement une histoire d'amour, mais une exploration de l'existence même. Elle pose la question : Pouvons-nous nous libérer de nos vies antérieures, ou sommes-nous destinés à danser les mêmes pas à travers l'éternité ? Se déroulant dans le décor vibrant de Manhattan baigné de jazz et des rues intemporelles de Paris, elle brouille la frontière entre fiction et réalité, remettant en question notre perception de ce qui est nouveau et ce qui n'est qu'un véritable cas de Déjà-Vu."
      ]
    },
    author: {
      title: 'À PROPOS DE L\'AUTRICE',
      description: "Audriana est une auteure reconnue pour ses récits qui brouillent les frontières entre réalité et fiction avec une approche de la fiction semblable à celle d'une biographie. Avec sa perspective unique sur l'art du récit, elle crée des expériences immersives qui amènent les lecteurs à s'interroger sur le moment où un souvenir s'achève et où un autre commence—créant ainsi un chevauchement dans le temps. Déjà-Vu est son premier roman, inspiré par ses connexions personnelles avec des liens inexpliqués, la malléabilité du temps et le pouvoir des secondes chances. Audriana est une auteure américaine qui vit à Paris avec son mari—celui qui a profondément encouragé ce roman et l'a inspiré à prendre vie.",
      role: 'Autrice • Écrivaine',
      newsletter: {
        title: 'RESTE INFORMÉ(E)',
        description: 'Sois le/la premier(e) à recevoir les mises à jour sur les sorties de mes prochain livres, événements et aperçus exclusifs. Pas de spam, promis ! 💌',
        placeholder: 'Entre ton email',
        button: 'RESTONS EN CONTACT !',
        toast: {
          title: 'Merci pour ton inscription !',
          description: 'Tu recevras des mises à jour sur les nouvelles sorties et événements. Pas de spam, promis ! 💌'
        }
      }
    },
    purchase: {
      title: 'ACHETER LE LIVRE',
      description: 'Vis ce voyage intemporel d\'amour et de destin.',
      platforms: {
        amazon: 'Acheter sur Amazon',
        appleBooks: 'Disponible sur Apple Books',
        barnesNoble: 'Commander chez Barnes & Noble'
      }
    }
  }
} as const;

export type TranslationKey = keyof typeof translations.en;
