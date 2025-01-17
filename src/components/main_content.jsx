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

const images = splitarray(allExceptCover, allExceptCover.length / 5)
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

const Card = styled(Paper)(() => ({
  maxWidth: '1200px',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingBottom: '2rem',
  paddingTop: '2rem'
}))

const MainContent = ({ open }) => {
  return (
    <>
      <Main open={open} id="Main">
        <Jumbotron pics={coverPhotos} />
        <div id={'ourstory-div'} />
        <FadeInSection>
          <div>
            <SubHeader title="Our Story" />
            <Card elevation={3}>
              <LeftContent pics={images[0]}>
                <div className="story">
                  <p>
                    Sometimes a job.. is just a job. Sometimes though, when you
                    least expect it, a job becomes more than that. That's where
                    our story begins, at a place of employment, working on the
                    same team, building something{' '}
                    <a href="https://www.stash.com/stock-back">fun</a>. What
                    started as work meetings turned into work happy hours turned
                    into work dinners and eventually just into dinners. Funny
                    how drastically things can change over such a short amount
                    of time.. from building software to building a life
                    together.
                  </p>
                </div>
              </LeftContent>
            </Card>
          </div>
        </FadeInSection>
        <div id={'weddingday-div'} />
        <FadeInSection>
          <div>
            <SubHeader
              title="Wedding Day"
              subTitle="Saturday, October 8th, 2022"
            />
            <Card elevation={3}>
              <RightContent pics={images[1]}>
                <div className="wedding">
                  <p>
                    <h2>
                      Ceremony
                      <hr></hr>
                    </h2>
                    <div>3:30 p.m.</div>

                    <a
                      href="https://www.google.com/maps/place/Holy+Trinity+Greek+Orthodox+Cathedral/@40.7697635,-73.9562265,15z/data=!4m2!3m1!1s0x0:0x98ddc98e5d9273f1?sa=X&ved=2ahUKEwjq69WZnpb1AhVBj4kEHaQHC8MQ_BJ6BAg7EAU"
                      rel="noopener"
                      aria-label="Holy Trinity Greek Orthodox Cathedral"
                    >
                      Holy Trinity Greek Orthodox Cathedral
                    </a>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h2>
                      Reception<hr></hr>
                    </h2>
                    <div>6:30 p.m.</div>
                    <a
                      href="https://www.google.com/maps/place/Ravel+Hotel,+Trademark+Collection+by+Wyndham/@40.7538562,-73.9516326,17z/data=!3m1!4b1!4m8!3m7!1s0x89c2598de86a3b3b:0x1918f3a5466f7603!5m2!4m1!1i2!8m2!3d40.7538245!4d-73.9493865"
                      rel="noopener"
                      aria-label="Ravel Hotel"
                    >
                      Ravel Hotel
                    </a>
                    <br></br>
                  </p>
                </div>
              </RightContent>
            </Card>
          </div>
        </FadeInSection>
        <div id={'dayafter-div'} />
        <FadeInSection>
          <div>
            <SubHeader
              title='Farewell "Brunch"'
              subTitle="Sunday, October 9th, 2022"
            />
            <Card elevation={3}>
              <LeftContent pics={images[2]}>
                <div className="wedding">
                  <p>
                    <div className="intro">
                      We all know fall weddings can be controversial. Smack dab,
                      in the middle of the best season of the year, football
                      season. We too, participate in this glorious time of the
                      year, and so we thought of no better way to end our
                      wedding than to say farewell to our favorite people at our
                      favorite football Sunday bar.
                      <hr></hr>
                    </div>
                    <br></br>
                    <br></br>
                    <div>11:30 a.m.</div>

                    <a
                      href="https://g.page/KentAleHouse?share"
                      rel="noopener"
                      aria-label="Kent Ale House"
                    >
                      Kent Ale House
                    </a>
                    <br></br>
                  </p>
                </div>
              </LeftContent>
            </Card>
          </div>
        </FadeInSection>
        <div id={'accomodations-div'} />
        <FadeInSection>
          <SubHeader title="Accomodations" />
          <Card elevation={3}>
            <RightContent pics={images[3]}>
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
            </RightContent>
          </Card>
        </FadeInSection>
        <div id={'registry-div'} />
        <FadeInSection>
          <div>
            <SubHeader title="Registry" />
            <Card elevation={3}>
              <LeftContent pics={images[4]}>
                <div className="reg">
                  <p>
                    <div className="intro">
                      While celebrating together on our big day means the most,
                      if you want to help us celebrate with a gift, we've
                      provided some inspiration below.
                      <hr></hr>
                    </div>
                    <br></br>
                    <a
                      href="https://www.bloomingdales.com/registry/wedding/guest/MARYALEXA-DIVVER-SILVINO-BARREIROS/?registryId=7313959"
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
                  </p>
                </div>
              </LeftContent>
            </Card>
          </div>
        </FadeInSection>
      </Main>
    </>
  )
}

MainContent.propTypes = {
  open: PropTypes.bool
}

export default MainContent
