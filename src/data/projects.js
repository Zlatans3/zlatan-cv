import okAppImg from '../assets/ok-app-display.jpg'
import portfolioImg from '../assets/SCR-20260306-ttkt.jpeg'

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
    desc: 'A group of friends meet up to dine together. this app was build as a tool for us to plan our outings.',
    tags: ['Compose', 'Firebase', 'nav-3', 'Hilt/ dagger', 'Material3'],
    url: 'https://github.com/Zlatans3/FlotMand',
  },
  // Add more projects here
]

export default projects
