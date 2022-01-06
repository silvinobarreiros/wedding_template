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
              <p>Coming soon...</p>
            </LeftContent>
          </Paper>
        </div>
      </FadeInSection>
      <div id={'itinerary-div'} />
      <FadeInSection>
        <div>
          <SubHeader title="Itinerary" />
          <Paper elevation={3} className="card">
            <RightContent pics={images[1]}>
              <div className="itin">
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
                    aria-label="Holy Trinty Greek Orthodox Cathedral"
                  >
                    Holy Trinty Greek Orthodox Cathedral
                  </a>
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
            <p>
              NYC has a variety of options that can suit everyone's needs. Below
              are some options with group codes.
              <a
                href="https://www.wyndhamhotels.com/trademark/long-island-city-new-york/ravel-hotel-trademark-collection-by-wyndham/rooms-rates?brand_id=TQ&checkInDate=10/8/2022&checkOutDate=10/9/2022&useWRPoints=false&children=0&groupCode=100822DIV&adults=1&rooms=1&loc=ChIJWbG6xytZwokRMY7uxcRsFVY&sessionId=1635866456"
                rel="noopener"
                aria-label="Ravel Hotel"
              >
                Ravel Hotel
              </a>
              <br></br>
              100822DIV<br></br>
              <i>Our wedding reception will be held at the Ravel Hotel</i>
              <br></br><br></br>
              <b>The Hoxton</b><br></br>
              HITCHED1022
            </p>
          </LeftContent>
        </Paper>
      </FadeInSection>
      <div id={'registry-div'} />
      <FadeInSection>
        <div>
          <SubHeader title="Registry" />
          <Paper elevation={3} className="card">
            <RightContent pics={images[3]}>
              <p>
                While celebrating together on our big day means the most, if you want to help us celebrate with a gift, we've provided some inspiration below. 
                <br></br><br></br>
                  <a
                    href="https://www.zola.com/registry/marryvino"
                    rel="noopener"
                    aria-label="Zola"
                  >
                    Zola
                  </a>
                  <br></br>
                  <a
                    href="https://www.zola.com/registry/marryvino"
                    rel="noopener"
                    aria-label="Zola"
                  >
                    Food 52
                  </a>
              </p>
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
