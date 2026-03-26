import okAppImg from '../assets/ok-app-display.jpg'
import portfolioImg from '../assets/SCR-20260306-ttkt.jpeg'
import pureGymImg from '../assets/puregym-display.jpg'
import okHjemImg from '../assets/ok-hjem-display.jpg'

const projects = [
    {
    img: okHjemImg,
    alt: 'OK Hjem rebranding',
    title: 'OK Hjem — Rebranding',
    desc: 'As part of OK\'s company-wide rebranding, I was responsible for redefining the design library inside the Hjem app — covering colours, typography, shadows, icons and all the UI changes that came with the new identity.',
    tags: ['Compose', 'Design System', 'Retrofit'],
    url: null,
    article: {
      intro: 'When OK A.M.B.A. went through a full company rebranding, the Hjem app needed to follow. I was the Android developer responsible for translating the new brand identity into the app\'s design system and rolling those changes out across the codebase.',
      sections: [
        {
          heading: 'Redefining the Design Library',
          body: 'The work started with the design library. Together with the design team I went through every token in the system — colours, typography scales, elevation and shadow values, iconography — and mapped them to the new brand guidelines. The goal was to make sure nothing was hardcoded and that future brand updates could flow through the token layer without touching individual components.',
        },
        {
          heading: 'Rolling Out the Changes',
          body: 'Once the library was in place the real work began: going through the app screen by screen and applying the updated tokens. Some components needed more than a colour swap — the new identity brought changes to corner radii, spacing rhythm and icon style that touched a lot of surfaces. Jetpack Compose\'s theming system made it manageable to apply changes consistently without duplicating logic.',
        },
      ],
    },
  },
  {
    img: portfolioImg,
    alt: 'A personal project build with passion in compose',
    title: 'A personal project build for friends',
    desc: 'A group of friends meet up to dine together. this app was build as a tool for us to plan our outings. read more about it on github.',
    tags: ['Compose', 'Firebase', 'nav-3', 'Hilt/ dagger', 'Material3'],
    url: 'https://github.com/Zlatans3/FlotMand',
    buttonText: 'View on GitHub',
    article: {
      intro: 'FlotMand is a personal side project I built for a group of friends who regularly meet up for dinners. The app makes it easy to plan, vote on venues, and settle the bill.',
      sections: [
        {
          heading: 'Why I Built It',
          body: 'The idea came out of a real problem — coordinating seven people over group chats was chaotic. I wanted an excuse to dive deeper into Compose and Firebase at the same time, and this felt like the perfect scope: small enough to ship fast, real enough to actually use.',
        },
        {
          heading: 'Stack',
          body: 'Built entirely in Jetpack Compose with Navigation 3. Firebase Firestore handles real-time sync so all users see updates instantly. Dependency injection is done via Hilt, keeping the ViewModels lean and testable. The UI follows Material 3 design tokens throughout.',
        },
        {
          heading: 'What I Learned',
          body: 'This project pushed me to think seriously about architecture and conflict resolution in Firestore. I also explored Compose\'s state hoisting patterns at a depth I hadn\'t needed in professional projects yet. this project was originally built in navigation 2 and was later migrated to navigation 3, which was a great opportunity to experience the benefits of the new API firsthand.',
        },
      ],
    },
  },
  {
    img: okAppImg,
    alt: 'OK Bilist',
    title: 'OK Bilist',
    desc: 'Official motorist application for OK A.M.B.A. Contributed across multiple releases — optimising features, adapting the UI for a range of screen sizes, and helping move the codebase from XML towards fully Compose-based development.',
    tags: ['Compose', 'XML', 'Retrofit'],
    url: 'http://framna.com/cases/ok',
    article: {
      intro: 'OK Bilist is the official motorist app for OK A.M.B.A., one of Denmark\'s largest energy companies. I contributed to the app across multiple releases during my time at Framna.',
      sections: [
        {
          heading: 'My Contribution',
          body: 'I was part of the team working on the app across several release cycles, picking up tasks that ranged from UI fixes to feature work. My focus was on making sure things worked well and felt right — both on newer devices and on older screens that needed a bit more attention.',
        },
        {
          heading: 'UI Optimisation',
          body: 'A good chunk of the work was making sure the UI held up across different screen sizes and resolutions. That meant going through existing screens, identifying where things broke or felt off, and making adjustments that worked reliably across the range of Android devices OK Bilist runs on.',
        },
        {
          heading: 'XML to Compose Migration',
          body: 'When I joined, the codebase was XML-based. Over time we bridged XML activities with Compose, gradually introducing it where it made sense. By the time of the more recent releases, all new features were being written fully in Compose — so part of the work was helping establish and follow that direction as the codebase modernised.',
        },
      ],
    },
  },
  {
    img: pureGymImg,
    alt: 'Helped PureGym refactor their physical access system to be app based',
    title: 'Helped PureGym refactor their physical access system to be app based',
    desc: 'As a part of their digital transformation, I helped PureGym refactor their physical access system to be app based. This involved integrating with their existing infrastructure. read about the feature here!',
    tags: ['XML', 'Retrofit', 'MLKit'],
    url: 'https://www.puregym.dk/adgang-via-appen',
    article: {
      intro: 'PureGym wanted to move away from physical key fobs and allow members to enter their gyms directly from the app. I was part of the team that designed and shipped this feature.',
      sections: [
        {
          heading: 'The Challenge',
          body: 'PureGym\'s existing access infrastructure was hardware-bound and required careful integration without disrupting live gym operations. We had to support both the old and new systems simultaneously during the rollout period.',
        },
        {
          heading: 'Implementation',
          body: 'The feature was built using XML-based views (the codebase predated a Compose migration). We integrated with PureGym\'s backend via Retrofit to fetch member access tokens, and used MLKit for QR code scanning as a fallback access method.',
        },
        {
          heading: 'Outcome',
          body: 'The feature launched across all Danish PureGym locations and was received well by members. The phased rollout approach meant zero disruption to access during the transition.',
        },
      ],
    },
  }
]

export default projects
