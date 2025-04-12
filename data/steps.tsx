import { Steps } from "@/types/model";

import Link from "next/link";

export const steps: Steps = [
  {
    title: "Bienvenue",
    description:
      "Vous êtes des hackers d’élite 🎭. Votre objectif : infiltrer les réseaux et retrouver une information ultra-confidentielle sur un certain, OSINT",
  },
  {
    title: "Une image laissée par le hacker",
    description: (
      <>
        <span>
          Lors de l’investigation, les administrateurs ont découvert une{" "}
          <Link
            href="/ahah_bienfait_2.jpeg"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 text-primary hover:text-secondary transition-colors"
          >
            image
          </Link>{" "}
          laissée par le cybercriminel.
        </span>
        <span>
          Peut-être contient-elle des indices permettant d’identifier les
          hackers ?
        </span>
        <span>
          <a
            href="https://online-metadata.com/fr"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-primary transition-colors"
          >
            {`Vous pouvez analyser les métadonnées de l'image en vous aidant de ce site.`}
          </a>
        </span>
      </>
    ),
    inputs: [
      {
        label: "Quel est le pseudo du hacker ?",
        shortLabel: "Pseudo twitch",
        validResponses: ["frz_tom64"],
        hint: {
          title: "Besoin d'un coup de pouce ?",
          description: (
            <>
              <span>
                {`Cela ne sert à rien de regarder la photo pendant 1000 ans... la réponse n'est pas SUR la photo mais DANS la photo.`}
              </span>
              <span>
                Un indice pourrait bien se cacher dans ses métadonnées… rien
                n’est laissé au hasard.
              </span>
              <span>
                {`Télécharge la photo et `}{" "}
                <a
                  href="https://online-metadata.com/fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-primary transition-colors"
                >
                  {`va sur le site online-metadata.com.`}
                </a>
              </span>
            </>
          ),
        },
      },
    ],
  },
  {
    title: "Une erreur fatale...",
    description: (
      <div className="flex flex-col gap-4 text-justify">
        <span>
          D’après nos analyses, ce pseudo aurait également été utilisé sur
          Twitch (https://twitch.tv/frz_tom64/).
        </span>
        <span>
          {`Si vous n'avez pas de téléphone ou d'accès à Twitch, `}
          <Link href="/twitch.png" target="_blank" rel="noopener noreferrer">
            cliquez-ici
          </Link>{" "}
          {`pour télécharger la capture d'écran du profil de Tom`}.
        </span>
      </div>
    ),
    inputs: [
      {
        label: "Quel est le nom de famille de Tom ?",
        shortLabel: "Nom de famille",
        validResponses: ["fraize"],
        responseFormat: "Format de réponse : ******",
        hint: {
          description: (
            <>
              <span>
                Le nom de famille pourrait être indiqué dans la page /about ou
                dans la bio de son profil Twitch (https://twitch.tv/frz_tom64/).
              </span>
              <span>
                {`Si vous n'avez pas de téléphone ou d'accès à Twitch, `}
                <Link
                  href="/twitch.png"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  cliquez-ici
                </Link>{" "}
                {`pour télécharger la capture d'écran du profil de Tom`}.
              </span>
            </>
          ),
        },
      },
      {
        label:
          "Quel est l'email de Tom (qui a l'air d'avoir été emprunté par une de ses proches) ?",
        shortLabel: "Mail de Tom",
        validResponses: ["clemencefrz@gmail.com"],
        responseFormat: "Format de réponse : ***********@*****.***",
        hint: {
          title: "Besoin d'un coup de pouce ?",
          description: (
            <>
              <span>
                {`Si vous n'avez pas de téléphone ou d'accès à Twitch, `}
                <Link
                  href="/twitch.png"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  cliquez-ici
                </Link>{" "}
                {`pour télécharger la capture d'écran du profil de Tom`}.
              </span>
              <span>
                {`Il est possible que l'email de Tom apparaisse dans les
                informations liées à ses contacts ou ses partenariats.`}
              </span>
              <span>
                {`Cette adresse pourrait également être liée à un autre membre de
                sa famille, alors ne t'étonne pas si ce n’est pas son propre
                mail !`}
              </span>
            </>
          ),
        },
      },
      {
        label: "Quel est le compte Instagram de Tom ?",
        shortLabel: "Compte instagram",
        validResponses: [
          "@tom_fraize",
          "instagram.com/tom_fraize",
          "tom_fraize",
        ],
        hint: {
          title: "Besoin d'un coup de pouce ?",
          description: (
            <>
              <span>
                {`Si vous n'avez pas de téléphone ou d'accès à Twitch, `}
                <Link
                  href="/twitch.png"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  cliquez-ici
                </Link>{" "}
                {`pour télécharger la capture d'écran du profil de Tom`}.
              </span>
              <span>
                {`Souvenez-vous de l’indice laissé dans la bio de Tom sur son compte Twitch. Il mentionnait un lien vers son Instagram.`}
              </span>
            </>
          ),
        },
      },
    ],
  },
  {
    title: "Vérifier la fuite de données",
    description: (
      <div className="flex flex-col gap-4 text-justify">
        <span>{`Super ! Vous avez trouvé l’adresse mail de Tom.`}</span>
        <span>
          {`Peut-être qu’elle a été retrouvée dans une fuite de données sur Internet ?`}
        </span>
        <span>
          👉 Allez sur le site{" "}
          <a
            href="https://haveibeenpwned.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Have I Been Pwned
          </a>
          {". "}
        </span>
        <span>
          {`Entrez l’adresse mail de Tom pour voir si elle a été exposée dans un ancien incident (comme un site qui a eu un bug ou une faille).`}
        </span>
      </div>
    ),
    inputs: [
      {
        label: "Est-ce que Tom a été victime d'une fuite de donnée ?",
        shortLabel: "Est-ce que Tom a été victime d'une fuite de donnée ?",
        validResponses: ["oui"],
        responseFormat: "Format de réponse : Oui ou Non",
      },
      {
        label: "Quel est le site concerné ?",
        shortLabel: "Site où il y a eu fuite de données",
        validResponses: [
          "le slip français",
          " le slip français",
          "leslipfrancais",
          " leslipfrancais",
          "leslipfrançais",
          "   le slip français",
          " le slip francais ",
        ],
        hint: {
          description: (
            <div className="flex flex-col gap-4">
              <span>
                {`Va sur le site Have I Been Pwned, entre l'adresse mail de Tom et regarde les résultats en bas de la page.

                `}
              </span>
              <span>
                {`Un site particulièrement intéressant pourrait être celui d'une
                marque de vêtements.`}
              </span>
            </div>
          ),
        },
      },
      {
        label: "Donnez une des informations qui a fuité.",
        shortLabel: "Informations compromises dans la fuite de données",
        validResponses: [
          "L'adresse email, le nom, le numéro de téléphone, l'adresse postale",
          "numéro de telephone",
          "Les adresses emails, les noms, les numéros de téléphone, les adresses postales",
          "numéros de telephone",
          "numéro de téléphone",
          "téléphone",
          "telephones",
          "téléphones",
          "tel",
          "phone",
          "adresse",
          "adresses",
          "noms",
          "adresses emails",
          "adresse postale",
          "adresse email",
          "email",
          "emails",
          "numéros de téléphone",
          "adresses physiques",
          "adresses e-mail",
          "adresses e-mail, noms, numéros de téléphone, adresses physiques",
          "mail",
          "mails",
          "adresses mails",
          "nom",
          "nom de famille",
          "email addresses",
          "names",
          "phone numbers",
          "physical addresses",
          "email addresses, names, phone numbers, physical addresses",
          "compromised data: email addresses, names, phone numbers, physical addresses",
          " email addresses, names, phone numbers, physical addresses",
          "data: email addresses, names, phone numbers, physical addresses",
        ],
      },
    ],
  },
  {
    title: "Localisez la plage de la photo postée par Tom sur Insta",
    description: (
      <>
        <span>
          {`Tom nous a fait la gentillesse de rendre son profil public.  Nous pouvons maintenant avoir accès à des informations personnelles.`}
        </span>
        <span>
          Sur son Insta,
          {`Tom a posté `}
          une photo où il est en train de profiter du soleil.
        </span>
        <span>
          <Link
            href="/image_insta_2.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Lens pourrait vous êtes utile.
          </Link>
        </span>
      </>
    ),
    inputs: [
      {
        label: "Quel est le nom de la plage visible sur la photo de Tom ?",
        shortLabel: "Lieu où il a l'habitude d'aller",
        validResponses: [
          "plage de marinella",
          "plage des sables d'or",
          "sables d'or",
          "La plage des sables d'or",
          "sable d'or",
          "sable dor",
          "plage de sable dor",
          "sables d'or",
          "sables dor",
          "marinella",
          "plage marinella",
          "plage de la marinella",
          "la marinella",
          "la plage de marinella",
          "marinela",
          "plage de marinela",
          "la plage marinela",
          "plagemarinella",
          "plagemarinela",
        ],

        hint: {
          title: "Besoin d'un coup de pouce ?",
          description: (
            <>
              <span>
                {`Si vous n'avez pas de téléphone, ou que vous ne savez pas utiliser`}{" "}
                Google Lens
                {", "}
                <Link
                  href="/image_insta_2.png"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  cliquez-ici
                </Link>{" "}
                pour voir le résultat de la recherche sur Google Lens.
              </span>
            </>
          ),
        },
      },
    ],
  },
  {
    title: "Les habitudes de Tom",
    description: (
      <>
        <span>
          {`Tom, c'est ce pote qui partage beaucoup (trop ?) de sa vie sur
         `}{" "}
          <a
            href="https://www.instagram.com/tom_fraize/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Instagram
          </a>
          {". "}
        </span>
        <span>
          Mais ce qu’il ne réalise pas, c’est que ces infos, même anodines,
          peuvent en dire beaucoup sur sa vie privée.
        </span>
        Scrollez le profil de Tom et notez les infos qu’il dévoile sans s’en
        rendre compte.
      </>
    ),
    inputs: [
      {
        label: "Donner l'une des passions de Tom.",
        shortLabel: "Passions de Tom",

        validResponses: [
          "streaming, jeux vidéos, moto et surf",
          "moto",
          "surf",
          "le surf",
          "la moto",
          "les jeux vidéos",
          "ride",
          "gaming",
          "jeux vidéos",
          "jeux videos",
          "jeu video",
          "jeuvidéo",
          "jeuvideo",
          "jeu vidéo",
          "streaming",
          "fifa",
          "valorant",
          "fortnite",
        ],
        description:
          "Cherchez un indice sur ses passions dans son profil instagram.",
      },
      {
        label: "Comment s'appelle son chat ?",
        shortLabel: "Chat de Tom",
        hint: {
          description: (
            <span>
              Regardez attentivement les stories du profil{" "}
              <a
                href="https://www.instagram.com/tom_fraize/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Insta
              </a>{" "}
              de Tom.
            </span>
          ),
        },
        validResponses: [
          "henriette",
          "henriette",
          "henrite",
          "henriete",
          "henriet",
          "henriete",
        ],
      },
      {
        label: "Comment s'appelle sa cousine ?",
        shortLabel: "Cousine de Tom",
        hint: {
          description: (
            <span>
              La réponse se trouve sur{" "}
              <a
                href="https://www.instagram.com/tom_fraize/p/DIFDblEI8MW/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                cette publication Insta
              </a>
              .
            </span>
          ),
        },
        validResponses: ["clémence", "clemence", "clmnce", "clemnce", "clem"],
      },
    ],
  },
  {
    title: "Vous y êtes presque ! Trouvez le mot de passe de Tom.",
    description: (
      <>
        <span>
          {`Avec toutes ces données, vous avez une chance d'accéder à son compte bancaire.. `}
        </span>
        <span>
          {`Avec la fuite de donnée constatée sur le site Have I Been Pwned, vous avez récupéré son numéro de téléphone.`}
        </span>
        <span>Vous devez maintenant trouver son mot de passe.</span>

        <span>
          Une grande partie des mots de passe contient des informations
          personnelles simples.
        </span>
      </>
    ),
    inputs: [
      {
        label: "Quel est le mot de passe de Tom ?",
        shortLabel: "Mot de passe",
        validResponses: [
          "henriette64!",
          "64henriette!",
          "henriette64!",
          "henriette64@",
          "henriette64.",
          "henriette64-",
          "henriette!64",
          "!64henriette",
          "64!henriette",
        ],
        description:
          "Le mot de passe contient 12 caractères, dont deux chiffres et un caractère spécial.",
        responseFormat: "************",
        hint: {
          description: (
            <>
              <span>
                {`En général, les personnes incluent le nom de leur animal de compagnie.`}
              </span>
              <span>
                Essayez une combinaison de ces informations simples avec des
                chiffres, comme beaucoup de gens le font pour leurs mots de
                passe.
              </span>
            </>
          ),
        },
      },
    ],
  },
  {
    title: "🎉 Mission accomplie !",
    description: "Bravo ! Vous avez terminé la mission avec succès !",
  },
];
