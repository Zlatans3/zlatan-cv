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
        {
          heading: 'Keeping It Consistent',
          body: 'One of the trickier parts was making sure the rebrand felt coherent across both the Hjem and Bilist apps, which share some underlying patterns but are maintained separately. I worked closely with the design team to flag inconsistencies early and keep the two apps aligned throughout the rollout.',
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
    desc: 'Official motorist application for OK A.M.B.A. At my time in Framna, I was responsible for the development of the OK Bilist app. I worked on a variety of features, including the integration of the app with the company\'s backend systems, and the implementation of new features such as front page and a redesigned refuel flow. read the case study from Framna here!',
    tags: ['Compose', 'Retrofit'],
    url: 'http://framna.com/cases/ok',
    article: {
      intro: 'OK Bilist is the official motorist app for OK A.M.B.A., one of Denmark\'s largest energy companies. I worked on this project during my time at Framna.',
      sections: [
        {
          heading: 'My Role',
          body: 'I was the lead Android developer on the project, responsible for architecting and implementing key features in Jetpack Compose. I collaborated closely with designers and the backend team at OK to deliver a seamless refuelling experience.',
        },
        {
          heading: 'Refuel Flow Redesign',
          body: 'One of the core contributions was a complete redesign of the refuel flow. The previous flow was spread across multiple screens with unnecessary friction. We consolidated it into a guided, single-purpose experience with real-time price updates and station availability via Retrofit.',
        },
        {
          heading: 'Tech & Architecture',
          body: 'The app is built entirely in Jetpack Compose with a clean MVVM architecture. Network calls are handled through Retrofit with a custom interceptor for OK\'s auth tokens. We also introduced a shared ViewModel pattern across the refuel flow to reduce state management complexity.',
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
