/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Jumbotron from './jumbotron'
import SubHeader from './sub_header'
import LeftContent from './right_image_left_content'
import RightContent from './left_image_rigth_content'
import FadeInSection from './fadein'
import { splitarray } from '../util'
import { coverPhotos, allExceptCover } from '../images'
import PasswordDialog from './password_dialog'

const images = splitarray(allExceptCover, allExceptCover.length / 4)
console.log(images)

const Main = styled('main', { shouldForwardProp: prop => prop !== 'open' })(
  ({ theme, open, drawerWidth }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginRight: 0
    })
  })
)

const MainContent = ({ open }) => (
  <>
    <Main open={open} id="Main">
      <PasswordDialog />
      <Jumbotron pics={coverPhotos} />
      <div id={'ourstory-div'} />
      <FadeInSection>
        <div>
          <SubHeader title="Our Story" />
          <Paper elevation={3} className="card">
            <LeftContent pics={images[0]}>
              <div className="story">
                <p>
                  Sometimes a job.. is just a job. Sometimes though, when you
                  least expect it, a job becomes more than that. That's where
                  our story begins, at a place of employment, working on the
                  same team, building something{' '}
                  <a href="https://www.stash.com/stock-back">fun</a>. What
                  started as work meetings turned into work happy hours turned
                  into work dinners and eventually just into dinners. Funny how
                  drastically things can change over such a short amount of
                  time.. from building software to building a life together.
                </p>
              </div>
            </LeftContent>
          </Paper>
        </div>
      </FadeInSection>
      <div id={'weddingday-div'} />
      <FadeInSection>
        <div>
          <SubHeader title="Wedding Day" />
          <Paper elevation={3} className="card">
            <RightContent pics={images[1]}>
              <div className="wedding">
                <p>
                  <h2>
                    Ceremony
                    <hr></hr>
                  </h2>
                  14:00
                  <br></br>
                  <a
                    href="https://www.google.com/maps/place/Holy+Trinity+Greek+Orthodox+Cathedral/@40.7697635,-73.9562265,15z/data=!4m2!3m1!1s0x0:0x98ddc98e5d9273f1?sa=X&ved=2ahUKEwjq69WZnpb1AhVBj4kEHaQHC8MQ_BJ6BAg7EAU"
                    rel="noopener"
                    aria-label="Holy Trinity Greek Orthodox Cathedral"
                  >
                    Holy Trinity Greek Orthodox Cathedral
                  </a>
                  <br></br>
                  <br></br>
                  <h2>
                    Reception<hr></hr>
                  </h2>
                  18:00
                  <br></br>
                  <a
                    href="https://www.google.com/maps/place/Ravel+Hotel,+Trademark+Collection+by+Wyndham/@40.7538562,-73.9516326,17z/data=!3m1!4b1!4m8!3m7!1s0x89c2598de86a3b3b:0x1918f3a5466f7603!5m2!4m1!1i2!8m2!3d40.7538245!4d-73.9493865"
                    rel="noopener"
                    aria-label="Ravel Hotel"
                  >
                    Ravel Hotel
                  </a>
                  <br></br>
                  <br></br>
                  <i id="ceremony">
                    
                  </i>
                </p>
              </div>
            </RightContent>
          </Paper>
        </div>
      </FadeInSection>
      <div id={'accomodations-div'} />
      <FadeInSection>
        <SubHeader title="Accomodations" />
        <Paper elevation={3} className="card">
          <LeftContent pics={images[2]}>
            <div className="accom">
              <p>
                <div className="intro">
                  NYC has a variety of options that suits everyone's needs. We
                  set up room blocks at two convenient locations near the
                  reception, however please feel free to stay wherever you'd
                  like.
                  <hr></hr>
                </div>
                <br></br>
                <a
                  href="https://www.wyndhamhotels.com/trademark/long-island-city-new-york/ravel-hotel-trademark-collection-by-wyndham/rooms-rates?brand_id=TQ&checkInDate=10/8/2022&checkOutDate=10/9/2022&useWRPoints=false&children=0&groupCode=100822DIV&adults=1&rooms=1&loc=ChIJWbG6xytZwokRMY7uxcRsFVY&sessionId=1635866456"
                  rel="noopener"
                  aria-label="Ravel Hotel"
                >
                  Ravel Hotel*
                </a>
                <br></br>
                <div className="code">
                  <b>Code: </b>
                  100822DIV
                </div>
                <br></br>
                <a
                  href="https://thehoxton.com/?channel=ppc&gclid=Cj0KCQiAw9qOBhC-ARIsAG-rdn4tS9oZMazgLXiPDMLJ1kSG47kxE0e2WYJWdmUP63arrO9qSL92cV4aAvOmEALw_wcB&gclsrc=aw.ds"
                  rel="noopener"
                  aria-label="The Hoxton"
                >
                  The Hoxton
                </a>
                <div className="code">
                  <b>Code: </b>
                  HITCHED1022
                </div>
                <br></br>
                <i id="reception">
                  *Our wedding reception will be held at the Ravel Hotel
                </i>
              </p>
            </div>
          </LeftContent>
        </Paper>
      </FadeInSection>
      <div id={'registry-div'} />
      <FadeInSection>
        <div>
          <SubHeader title="Registry" />
          <Paper elevation={3} className="card">
            <RightContent pics={images[3]}>
              <div className="reg">
                <p>
                  <div className="intro">
                    While celebrating together on our big day means the most, if
                    you want to help us celebrate with a gift, we've provided
                    some inspiration below.
                    <hr></hr>
                  </div>
                  <br></br>
                  <a
                    href="https://www.zola.com/registry/marryvino"
                    rel="noopener"
                    aria-label="Bloomingdale's"
                  >
                    Bloomingdale's
                  </a>
                  <br></br>
                  <a
                    href="https://www.zola.com/registry/marryvino"
                    rel="noopener"
                    aria-label="Zola"
                  >
                    Zola
                  </a>
                  <br></br>
                  <a
                    href="https://food52.com/shop/registry/12981-silvino-and-maryalexa"
                    rel="noopener"
                    aria-label="Food 52"
                  >
                    Food 52
                  </a>
                  <br></br>
                  <a
                    href="https://ilargentoregistry.com/apps/giftregistry/registry/193514"
                    rel="noopener"
                    aria-label="il'argento"
                  >
                    il'argento
                  </a>
                </p>
              </div>
            </RightContent>
          </Paper>
        </div>
      </FadeInSection>
    </Main>
  </>
)

MainContent.propTypes = {
  open: PropTypes.bool
}

export default MainContent
