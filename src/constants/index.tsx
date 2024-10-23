import { CustomBr } from "@/components/atoms/custom-br";
import { Mail } from "@/components/svgs/mail";
import { Phone } from "@/components/svgs/phone";
import { WifiIcon } from "@/components/svgs/wifi";
import { mediaMaxWidth } from "@/utils/media-query";

export const Data = {
  navigation: [
    { title: "Home", href: "/" },
    { title: "Dienstleistungen", href: "/dienstleistungen" },
    { title: "Über uns", href: "/uber-uns" },
    { title: "Kontakt", href: "/kontakt" },
  ],
  footer: {
    categories_text: "Navigation",
    logo_text: (
      <>
        Über ein Jahrzehnt Expertise in
        <br /> Netzwerkinstallationen und
        <br /> Tiefbauarbeiten.
      </>
    ),
    text: "Kontakt Informationen",
    copy: "Copyright © 2024 Ha-Tech GmbH",
    agency: (
      <>
        Mit 💚 entwickelt von{" "}
        <span>
          <a href="https://www.fiberweb.ch/" target="_blank" rel="noreferrer">
            FiberWeb.ch
          </a>
        </span>
      </>
    ),
  },
  contact: [
    {
      text: "Telefon",
      content: "044 930 75 80",
      link: "tel:+0449307580",
      icon: Phone,
    },
    {
      text: "E-Mail",
      content: "ha-tech@ha-tech.ch",
      link: "mailto:ha-tech@ha-tech.ch",
      icon: Mail,
    },
  ],
  services: [
    {
      bg: {
        src: "/imgs/content-services/img1.png",
        alt: "bg",
      },
      icon: {
        src: "/svgs/services/netzwerkinstallationen.svg",
        alt: "netzwerkinstallationen",
      },
      title: "Netzwerkinstallationen",
      list: [
        <>
          Netz- und CATV-
          <br />
          Installationen
        </>,
        <>Hausinstallationsanlagen</>,
        <>
          Modernisierung und
          <CustomBr byViewport="mobile" /> Störungsbehebung
          <CustomBr byViewport="desktop" /> von
          <CustomBr byViewport="mobile" /> Netzwerken
        </>,
      ],
    },
    {
      bg: {
        src: "/imgs/content-services/img2.png",
        alt: "bg",
      },
      icon: {
        src: "/svgs/services/tiefbau.svg",
        alt: "tiefbau",
      },
      title: "Tiefbau",
      list: [
        <>Tiefbauarbeiten</>,
        <>Kabelzug und LWL-Spleissarbeiten</>,
        <>Grabenbau & Kabelverlegung</>,
      ],
    },
    {
      bg: {
        src: "/imgs/content-services/img3.png",
        alt: "bg",
      },
      icon: {
        src: "/svgs/services/catv-netzinstallationen.svg",
        alt: "catv-netzinstallationen",
      },
      title: "CATV-Netzinstallationen",
      list: [
        <>
          Anfertigung und Umbau von
          <br /> Verteilerkabinen
        </>,
        <>
          Anschluss & Spleissen von
          <br /> Glasfaserkabeln
        </>,
        <>
          Installation von
          <br /> Verteilerkabinen
        </>,
      ],
    },
    {
      bg: {
        src: "/imgs/content-services/img4.png",
        alt: "bg",
      },
      icon: {
        src: "/svgs/services/service-und-wartung.svg",
        alt: "service-und-wartung",
      },
      title: "Service und Wartung",
      list: [
        <>
          Regelmässige Wartung und
          <br /> Pikettdienste
        </>,
        <>
          Überprüfung &<CustomBr byViewport="mobile" /> Fehlerdiagnose
        </>,
        <>
          Kabelmanagement &<br /> Austausch von Komponenten
        </>,
      ],
    },
  ],
  button: {
    contact: { title: "Kontakt", href: "/kontakt", text: "Kontaktieren Sie uns" },
    services: { title: "Mehr dazu", href: "/kontakt", text: "Mehr dazu" },
  },
};

export default {
  hero: {
    bg: {
      src: "/imgs/hero/bg.png",
      alt: "Hero background",
    },
    container: {
      img: {
        src: "/imgs/hero/hero.png",
        alt: "Hero image",
      },
      contact: {
        icon: Mail,
        text: "Kontakt",
        info: Data.contact,
      },
    },
    content: {
      title: (
        <>
          Die besten
          <br /> Netzwerkinstallate
          <CustomBr byViewport="mobile" />
          ure <CustomBr byViewport="desktop" /> der <CustomBr byViewport="mobile" />
          Deutschschweiz
        </>
      ),
      description: (
        <>
          Schweizer Qualität in
          <CustomBr byViewport="mobile" /> Netzwerkinstallationen: Präzise,
          <br /> zuverlässig und mit jahrzehntelanger
          <CustomBr byViewport="mobile" /> Erfahrung.
        </>
      ),
      button: {
        title: "Kontaktieren Sie uns",
        href: "/kontakt",
      },
    },
    deals: {
      text: (
        <>
          Jahrelanges Vertrauen
          <br /> unserer Partner
        </>
      ),
      clients: [
        {
          src: "/imgs/hero/clients/1.png",
          alt: "Client 1",
          $css: `
            height: 4.7rem;
            
            ${mediaMaxWidth("mobile")`
              display: block;
              height: 5.6rem;
            `}
          `,
        },
        {
          src: "/imgs/hero/clients/2.png",
          alt: "Client 2",
          $css: `
            height: 4.7rem;
            
            ${mediaMaxWidth("mobile")`
              display: block;
              height: 5.6rem;
            `}
          `,
        },
        {
          src: "/imgs/hero/clients/3.png",
          alt: "Client 3",
          $css: `
            height: 5.9rem;
            
            ${mediaMaxWidth("mobile")`
              display: block;
              height: 7.1rem;
            `}
          `,
        },
        {
          src: "/imgs/hero/clients/4.png",
          alt: "Client 4",
          $css: `
            height: 2.7rem;

            ${mediaMaxWidth("mobile")`
              display: block;
              height: 2.9rem;
            `}
          `,
        },
      ],
    },
  },
  services: {
    img: {
      src: "/imgs/services/quality.png",
      alt: "Quality",
    },
    title: (
      <>
        Das sind unsere
        <br /> Spezialgebiete
      </>
    ),
    description: (
      <>
        Wir sind spezialisiert auf
        <CustomBr byViewport="mobile" /> Netzwerkinstallationen,
        <br /> Tiefbauarbeiten und Kabelzug.
        <CustomBr byViewport="mobile" /> Darüber hinaus bieten
        <CustomBr byViewport="desktop" /> wir Ihnen eine
        <CustomBr byViewport="mobile" /> Vielzahl weiterer Dienstleistungen an
      </>
    ),
    container: {
      img_big: {
        src: "/imgs/services/bg-big.png",
        alt: "bg big",
      },
      img_small: {
        src: "/imgs/services/bg-small.png",
        alt: "bg small",
      },
      slide: Data.services,
    },
  },
  about_us: {
    title: (
      <>
        Lernen Sie die
        <CustomBr byViewport="mobile" /> HA-Tech
        <CustomBr byViewport="desktop" /> GmbH
        <CustomBr byViewport="mobile" /> besser kennen
      </>
    ),
    description: (
      <>
        Die HA-Tech Gmbh umfasst ein
        <CustomBr byViewport="mobile" /> mittlerweile 14-
        <CustomBr byViewport="desktop" />
        köpfiges Team
        <CustomBr byViewport="mobile" /> und ist tätig in der gesamten
        <br /> Deutschschweiz.
      </>
    ),
    list: [
      {
        icon: "/svgs/about-us/location.svg",
        text: (
          <>
            <strong>Hauptsitz:</strong> Zürich
          </>
        ),
      },
      {
        icon: "/svgs/about-us/location.svg",
        text: (
          <>
            <strong>Servicegebiet:</strong> Gesamte Deutschschweiz
          </>
        ),
      },
    ],
    link: {
      href: "/#",
      title: "Mehr dazu",
    },
    container: {
      bg: {
        src: "/imgs/about-us/bg.png",
        alt: "bg",
      },
      img: {
        src: "/imgs/about-us/img.png",
        alt: "img",
      },
      project: {
        icon: "+",
        number: 12000,
        text: "Abgeschlossene Projekt",
      },
    },
  },
  why_choose_us: {
    title: (
      <>
        Was uns speziell
        <br /> macht
      </>
    ),
    description: (
      <>
        Eine Kombination aus
        <CustomBr byViewport="mobile" /> aussergewöhnlicher
        <CustomBr byViewport="desktop" /> Kundenzufriedenheit, Präzision,
        <CustomBr byViewport="mobile" /> jahrzehntelanger Erfahrung und
        <br /> modernster Ausstattung, die uns
        <CustomBr byViewport="mobile" /> von der Konkurrenz abhebt
      </>
    ),
    img: {
      src: "/imgs/why-choose-us/img.png",
      alt: "img",
    },
    list: [
      {
        icon: {
          src: "/svgs/why-choose-us/langjahrige.svg",
          alt: "List",
        },
        title: <>Langjährige Erfahrung</>,
        text: (
          <>
            Jahrzehntelange Expertise in
            <CustomBr byViewport="desktop" /> der <CustomBr byViewport="mobile" />
            Netzwerktechnik und
            <CustomBr byViewport="desktop" /> Installation.
          </>
        ),
      },
      {
        icon: {
          src: "/svgs/why-choose-us/hochste.svg",
          alt: "hochste",
        },
        title: <>Höchste Präzision:</>,
        text: (
          <>
            Sorgfältige und präzise Ausführung
            <br /> aller Arbeiten, um höchste
            <br /> Qualitätsstandards zu erfüllen.
          </>
        ),
      },
      {
        icon: {
          src: "/svgs/why-choose-us/hervorragende.svg",
          alt: "Hervorragende",
        },
        title: (
          <>
            Hervorragende
            <br /> Kundenzufriedenheit
          </>
        ),
        text: (
          <>
            Unsere Kunden sind äusserst zufrieden,
            <br /> was sich in der geringen Anzahl an
            <br /> Beschwerden widerspiegelt.
          </>
        ),
      },
      {
        icon: {
          src: "/svgs/why-choose-us/modernste.svg",
          alt: "modernste",
        },
        title: <>Modernste Ausstattung</>,
        text: (
          <>
            Sorgfältige und präzise Ausführung
            <br /> aller Arbeiten, um höchste
            <br /> Qualitätsstandards zu erfüllen.
          </>
        ),
      },
    ],
  },
  contact: {
    span: {
      icon: WifiIcon,
      text: "Starten Sie Ihr Projekt",
    },
    title: (
      <>
        Kostenlose
        <CustomBr byViewport="mobile" /> Beratung
        <br /> anfordern
      </>
    ),
    form: {
      inputs: [
        { label: "Ihr Name", type: "text", name: "name", placeholder: "z.B. Jonn Wyss" },
        {
          label: "Ihre Telefonnummer ",
          type: "text",
          name: "phone",
          placeholder: "+41 00 000 00 00",
        },
        {
          label: "Ihre E-Mail-Adresse",
          name: "email",
          placeholder: "Jhon@gmail.com",
          type: "email",
        },
        {
          label: "Ihre Nachricht",
          name: "message",
          placeholder: "Gewünschter Service",
          type: "textarea",
        },
      ],
      button: "Senden",
    },
    info: Data.contact,
  },
  banner: {
    services: {
      breadcrumb: "Dienstleistungen",
      bg: {
        src: "/imgs/banner/services/bg.png",
        alt: "bg",
      },
      title: (
        <>
          Unsere
          <CustomBr byViewport="mobile" /> Dienstleistungen
        </>
      ),
      text: (
        <>
          Ihre verlässlichen und erfahrenen <CustomBr byViewport="mobile" />
          Experten für präzise,
          <CustomBr byViewport="desktop" /> hochwertige und <CustomBr byViewport="mobile" />
          beständige Arbeit, die Ihre <CustomBr byViewport="mobile" />
          Erwartungen
          <CustomBr byViewport="desktop" /> übertreffen wird.
        </>
      ),
    },
    contact: {
      breadcrumb: "Kontakt",
      bg: {
        src: "/imgs/banner/contact/bg.png",
        alt: "bg",
      },
      title: <>Kontakt</>,
    },
    about: {
      breadcrumb: "Über uns",
      bg: {
        src: "/imgs/banner/about/bg.png",
        alt: "bg",
      },
      title: (
        <>
          Erfahrung, <CustomBr byViewport="mobile" />
          Vertrauen, Qualität
          <br /> und Innovation
        </>
      ),
    },
  },
  gallery: {
    bg: {
      src: "/imgs/gallery/bg.png",
      alt: "bg",
    },
    title: (
      <>
        Unsere Projekte im
        <CustomBr byViewport="mobile" /> Überblick
      </>
    ),
    description: (
      <>
        Einblicke in unsere erfolgreich <CustomBr byViewport="mobile" />
        abgeschlossenen Arbeiten – <CustomBr byViewport="desktop" />
        Qualität, <CustomBr byViewport="mobile" />
        die überzeugt.
      </>
    ),
    list: [
      { src: "/imgs/gallery/slider1.jpg", alt: "Gallery 1" },
      { src: "/imgs/gallery/slider2.jpg", alt: "Gallery 2" },
      { src: "/imgs/gallery/slider3.jpg", alt: "Gallery 3" },
      { src: "/imgs/gallery/slider4.jpg", alt: "Gallery 4" },
      { src: "/imgs/gallery/slider5.jpg", alt: "Gallery 5" },
      { src: "/imgs/gallery/slider6.jpg", alt: "Gallery 6" },
      { src: "/imgs/gallery/slider7.jpg", alt: "Gallery 7" },
      { src: "/imgs/gallery/slider8.jpg", alt: "Gallery 8" },
      { src: "/imgs/gallery/slider9.jpg", alt: "Gallery 9" },
      { src: "/imgs/gallery/slider10.jpg", alt: "Gallery 10" },
      { src: "/imgs/gallery/slider11.jpg", alt: "Gallery 11" },
      { src: "/imgs/gallery/slider12.jpg", alt: "Gallery 12" },
      { src: "/imgs/gallery/slider13.jpg", alt: "Gallery 13" },
      { src: "/imgs/gallery/slider14.jpg", alt: "Gallery 14" },
      { src: "/imgs/gallery/slider15.jpg", alt: "Gallery 15" },
      { src: "/imgs/gallery/slider16.jpg", alt: "Gallery 16" },
      { src: "/imgs/gallery/slider17.jpg", alt: "Gallery 17" },
      { src: "/imgs/gallery/slider18.jpg", alt: "Gallery 18" },
      { src: "/imgs/gallery/slider19.jpg", alt: "Gallery 19" },
      { src: "/imgs/gallery/slider20.jpg", alt: "Gallery 20" },
      { src: "/imgs/gallery/slider21.jpg", alt: "Gallery 21" },
      { src: "/imgs/gallery/slider22.jpg", alt: "Gallery 22" },
      { src: "/imgs/gallery/slider23.jpg", alt: "Gallery 23" },
      { src: "/imgs/gallery/slider24.jpg", alt: "Gallery 24" },
      { src: "/imgs/gallery/slider25.jpg", alt: "Gallery 25" },
      { src: "/imgs/gallery/slider26.jpg", alt: "Gallery 26" },
      { src: "/imgs/gallery/slider27.jpg", alt: "Gallery 27" },
      { src: "/imgs/gallery/slider28.jpg", alt: "Gallery 28" },
      { src: "/imgs/gallery/slider29.jpg", alt: "Gallery 29" },
      { src: "/imgs/gallery/slider30.jpg", alt: "Gallery 30" },
      { src: "/imgs/gallery/slider31.jpg", alt: "Gallery 31" },
      { src: "/imgs/gallery/slider32.jpg", alt: "Gallery 32" },
      { src: "/imgs/gallery/slider33.jpg", alt: "Gallery 33" },
      { src: "/imgs/gallery/slider34.jpg", alt: "Gallery 34" },
      { src: "/imgs/gallery/slider35.jpg", alt: "Gallery 35" },
      { src: "/imgs/gallery/slider36.jpg", alt: "Gallery 36" },
      { src: "/imgs/gallery/slider37.jpg", alt: "Gallery 37" },
      { src: "/imgs/gallery/slider38.jpg", alt: "Gallery 38" },
      { src: "/imgs/gallery/slider39.jpg", alt: "Gallery 39" },
      { src: "/imgs/gallery/slider40.jpg", alt: "Gallery 40" },
      { src: "/imgs/gallery/slider41.jpg", alt: "Gallery 41" },
      { src: "/imgs/gallery/slider42.jpg", alt: "Gallery 42" },
      { src: "/imgs/gallery/slider43.jpg", alt: "Gallery 43" },
      { src: "/imgs/gallery/slider44.jpg", alt: "Gallery 44" },
      { src: "/imgs/gallery/slider45.jpg", alt: "Gallery 45" },
      { src: "/imgs/gallery/slider46.jpg", alt: "Gallery 46" },
      { src: "/imgs/gallery/slider47.jpg", alt: "Gallery 47" },
      { src: "/imgs/gallery/slider48.jpg", alt: "Gallery 48" },
      { src: "/imgs/gallery/slider49.jpg", alt: "Gallery 49" },
      { src: "/imgs/gallery/slider50.jpg", alt: "Gallery 50" },
      { src: "/imgs/gallery/slider51.jpg", alt: "Gallery 51" },
      { src: "/imgs/gallery/slider52.jpg", alt: "Gallery 52" },
    ],
  },
  info_container: [
    {
      title: <>seit 2011</>,
      text: (
        <>
          Über ein Jahrzehnt
          <br /> Expertise in
          <br /> Netzwerkinstallationen
          <CustomBr byViewport="mobile" /> und
          <CustomBr byViewport="desktop" /> Tiefbauarbeiten.
        </>
      ),
    },
    {
      title: (
        <>
          100% zufriedene
          <br /> Kunden
        </>
      ),
      text: (
        <>
          In all diesen Jahren nahezu 0<br /> Reklamationen dank
          <CustomBr byViewport="mobile" /> unseres <CustomBr byViewport="desktop" /> Engagements für
          <CustomBr byViewport="mobile" />
          höchste
          <CustomBr byViewport="desktop" /> Qualität.
        </>
      ),
    },
    {
      title: (
        <>
          <span>12.000</span>+ <br />
          abgeschlossene
          <br /> Projekte
        </>
      ),
      text: (
        <>
          Mehr als 12.000 erfolgreich
          <br /> realisierte Projekte
          <CustomBr byViewport="mobile" /> sprechen
          <CustomBr byViewport="desktop" /> für unsere
          <CustomBr byViewport="mobile" /> Kompetenz.
        </>
      ),
    },
  ],
  team: {
    title: (
      <>
        Unser erfahrenes
        <CustomBr byViewport="mobile" /> und
        <CustomBr byViewport="desktop" /> engagiertes
        <CustomBr byViewport="mobile" /> Team
      </>
    ),
    description: (
      <>
        Engagierte Experten, die mit
        <CustomBr byViewport="mobile" /> Leidenschaft und
        <CustomBr byViewport="desktop" /> Fachwissen
        <CustomBr byViewport="mobile" /> gemeinsam an Ihren Projekten
        <CustomBr byViewport="mobile" /> arbeiten.
      </>
    ),
    list: [
      {
        name: "Hasan Isufi",
        position: "Geschäftsleiter",
        signature: {
          src: "/imgs/team/signature-hasan.png",
          alt: "Signature Hasan Isufi",
        },
        img: {
          src: "/imgs/team/hasan.png",
          alt: "Hasan Isufi",
        },
      },
      {
        name: "Agron Jusufi",
        position: "Geschäftsleiter",
        signature: {
          src: "/imgs/team/signature-agron.png",
          alt: "Signature Agron Jusufi",
        },
        img: {
          src: "/imgs/team/agron.png",
          alt: "Agron Jusufi",
        },
      },
      {
        name: "Arijan Isufi",
        position: "Stellvertretender Geschäftsleiter",
        signature: {
          src: "/imgs/team/signature-arijan.png",
          alt: "Signature Arijan Isufi",
        },
        img: {
          src: "/imgs/team/arijan.png",
          alt: "Arijan Isufi",
        },
      },
    ],
  },
  content_block: [
    {
      img: {
        src: "/imgs/content-block/img1.png",
        alt: "img1",
      },
      title: <>Unsere Geschichte</>,
      text: (
        <>
          Die Ha-Tech GmbH wurde 2011 von Hasan
          <CustomBr byViewport="desktop" /> und Agron gegründet, die als CATV-
          <CustomBr byViewport="desktop" />
          Techniker im Koaxialbereich begannen.
          <CustomBr byViewport="desktop" /> Durch Partnerschaften mit Isen Tiefbau
          <CustomBr byViewport="desktop" /> sowie Instakom AG und Cablex AG wuchs
          <CustomBr byViewport="desktop" /> das Unternehmen schnell. Heute gehört
          <CustomBr byViewport="desktop" /> die HA-Tech GmbH zu den führenden
          <CustomBr byViewport="desktop" /> Firmen in der Deutschschweiz, bekannt für
          <CustomBr byViewport="desktop" /> höchste Qualität und doppelte Kontrolle
          <CustomBr byViewport="desktop" /> jeder Arbeit, um den Kunden die besten
          <CustomBr byViewport="desktop" /> Ergebnisse zu bieten.
        </>
      ),
    },
    {
      img: {
        src: "/imgs/content-block/img2.png",
        alt: "img2",
      },
      title: <>„Wer nicht vorwärts geht, geht rückwärts“</>,
      text: (
        <>
          Die HA-Tech GmbH steht für stetige Verbesserung und
          <CustomBr byViewport="desktop" /> solide Elektroarbeiten von höchster Qualität. Unser
          <CustomBr byViewport="desktop" /> Bestreben ist es, die an uns gestellten Erwartungen
          <CustomBr byViewport="desktop" /> konsequent zu erfüllen und das Vertrauen unserer
          <CustomBr byViewport="desktop" /> bestehenden Kunden in der Deutschschweiz zu
          <CustomBr byViewport="desktop" /> bewahren. Mit Arijan Isufi, der eine immer wichtigere
          <CustomBr byViewport="desktop" /> Rolle im Familienbetrieb übernimmt, ehren wir unsere
          <CustomBr byViewport="desktop" /> langjährige Tradition der Zuverlässigkeit und tragen
          <CustomBr byViewport="desktop" /> weiterhin zum Wohl der Gemeinschaft bei.
        </>
      ),
    },
  ],
  cta_banner: {
    bg: {
      src: "/imgs/cta-banner/bg.png",
      alt: "bg",
    },
    title: (
      <>
        Wir feuen uns
        <CustomBr byViewport="mobile" /> von Ihnen zu
        <br /> hören!
      </>
    ),
    description: (
      <>
        Haben Sie Fragen oder
        <CustomBr byViewport="mobile" /> benötigen Sie eine Offerte?
        <br /> Kontaktieren Sie uns schell
        <CustomBr byViewport="mobile" /> und einfach.
      </>
    ),
    button: {
      title: "Kontaktieren Sie uns",
      href: "/kontakt",
    },
  },
  maps: {
    img: {
      src: "/imgs/maps/img.png",
      alt: "img",
    },
    location: {
      text: "Location",
      address: "Lerchenstrasse 22, 8754 Netstal",
      link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2718.277361095125!2d9.049289477659498!3d47.05440927114459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47852d0ad5690bd1%3A0xadb75cd9252317d6!2sLerchenstrasse%2022%2C%208754%20Netstal%2C%20Su%C3%AD%C3%A7a!5e0!3m2!1spt-BR!2sbr!4v1727842798690!5m2!1spt-BR!2sbr",
    },
  },
};
