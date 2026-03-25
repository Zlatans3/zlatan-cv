import okAppImg from '../assets/ok-app-display.jpg'
import portfolioImg from '../assets/SCR-20260306-ttkt.jpeg'
import pureGymImg from '../assets/puregym-display.jpg'

const projects = [
  {
    img: okAppImg,
    alt: 'OK Bilist',
    title: 'OK Bilist',
    desc: 'Official motorist application for OK.dk. High-performance station search and loyalty integration.',
    tags: ['Compose', 'Retrofit'],
    url: '#',
  },
  {
    img: portfolioImg,
    alt: 'A personal project build with passion in compose',
    title: 'A personal project build for friends',
    desc: 'A group of friends meet up to dine together. this app was build as a tool for us to plan our outings. read more about it on github.',
    tags: ['Compose', 'Firebase', 'nav-3', 'Hilt/ dagger', 'Material3'],
    url: 'https://github.com/Zlatans3/FlotMand',
  },
  {
    img: pureGymImg,
    alt: 'Helped PureGym refactor their physical access system to be app based',
    title: 'Helped PureGym refactor their physical access system to be app based',
    desc: 'As a part of their digital transformation, I helped PureGym refactor their physical access system to be app based. This involved integrating with their existing infrastructure. read about the feature here!',
    tags: ['XML', 'Retrofit', 'MLKit'],
    url: 'https://www.puregym.dk/adgang-via-appen',
  }
]

export default projects
