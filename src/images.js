import beachOne from './Assets/beach_1.jpg'
import beachTwo from './Assets/beach_2.jpg'
import beachThreeLarge from './Assets/beach_3-large.jpg'
import beachThree from './Assets/beach_3.jpg'
import beachFour from './Assets/beach_4.jpg'
import beachFive from './Assets/beach_5.jpg'
import brick from './Assets/brick.jpg'
import dinner from './Assets/dinner.jpg'
import jacksonhole from './Assets/jacksonhole.jpg'
import matterhorn from './Assets/matterhorn.jpg'
import milian from './Assets/milian.jpg'
import netflix from './Assets/netflix.png'
import bar1 from './Assets/bar_1.jpg'
import bigSky1 from './Assets/big_sky_1.jpg'
import bigSky2 from './Assets/big_sky_2.jpg'
import covidLife from './Assets/covid_life.jpg'
import covidLife2 from './Assets/covid_life_2.jpg'
import dolphins1 from './Assets/dolphins_1.jpg'
import france1 from './Assets/france_1.jpg'
import jacksonhole2 from './Assets/jacksonhole_2.jpg'
import montreal from './Assets/montreal.jpg'
import wedding1 from './Assets/wedding_1.jpg'
import wedding2 from './Assets/wedding_2.jpg'
import wedding3 from './Assets/wedding_3.jpg'
import zermont from './Assets/zermont.jpg'

export const photos = {
  beachOne: { url: beachOne, description: 'ring on the beach' },
  beachTwo: { url: beachTwo, description: 'close up' },
  beachThreeLarge: { url: beachThreeLarge, description: 'piggy back large' },
  beachThree: { url: beachThree, description: 'piggy back' },
  beachFour: { url: beachFour, description: 'hand holding walk' },
  beachFive: { url: beachFive, description: 'pointing' },
  brick: { url: brick, description: 'scaffolding' },
  dinner: { url: dinner, description: 'engagement dinner' },
  jacksonhole: { url: jacksonhole, description: 'jackson hole' },
  matterhorn: { url: matterhorn, description: 'big mountain' },
  milian: { url: milian, description: 'sky daddy house' },
  netflix: { url: netflix, description: 'we famous' },
  bar1: { url: bar1, description: 'bar1' },
  bigSky1: { url: bigSky1, description: 'bigSky1' },
  bigSky2: { url: bigSky2, description: 'bigSky2' },
  covidLife: { url: covidLife, description: 'covidLife' },
  covidLife2: { url: covidLife2, description: 'covidLife2' },
  dolphins1: { url: dolphins1, description: 'dolphins1' },
  france1: { url: france1, description: 'france1' },
  jacksonhole2: { url: jacksonhole2, description: 'jacksonhole2' },
  montreal: { url: montreal, description: 'montreal' },
  wedding1: { url: wedding1, description: 'wedding1' },
  wedding2: { url: wedding2, description: 'wedding2' },
  wedding3: { url: wedding3, description: 'wedding3' },
  zermont: { url: zermont, description: 'zermont' }
}

export const coverPhotos = [photos.brick, photos.beachFive]

export const beachPhotos = [
  photos.beachOne,
  photos.beachTwo,
  photos.beachThreeLarge,
  photos.beachThree,
  photos.beachFour
]

export const otherPhotos = [
  photos.dinner,
  photos.jacksonhole,
  photos.matterhorn,
  photos.milian,
  photos.netflix,
  photos.bar1,
  photos.bigSky1,
  photos.bigSky2,
  photos.covidLife,
  photos.covidLife2,
  photos.dolphins1,
  photos.france1,
  photos.jacksonhole2,
  photos.montreal,
  photos.wedding1,
  photos.wedding2,
  photos.wedding3,
  photos.zermont
]

export const allExceptCover = [...beachPhotos, ...otherPhotos]
