import React, { useContext } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { ContentContext } from '../../../helpers/contexts'
import { WithScrollUp } from '../../../helpers/HOC'
import Website from './Website'
import KeyWest from './KeyWest'
import Container from '../../../styles/pages/about'
import Links from '../../../styles/links'


const About = ({ page }) => {
  const { about } = useContext(ContentContext)
  const item = about.links.find((i) => i.param === page)
  if(!item) return <Redirect to={ `/about/${ about.links[0].param }` }/>

  return(
    <Container className="page-container">
      <h2>{ item.label }</h2>
      {
        about.links[0] === item
          ? <KeyWest data={ about.keyWest }/>
          : <Website data={ about.website }/>
      }
      <Links> 
        {
          about.links[0] === item
            ? (
                <Link 
                  to={`/about/${ about.links[1].param }`}
                  id="right"
                >
                  { about.links[1].label }
                </Link>
              )
            : (
                <Link to={`/about/${ about.links[0].param }`}>
                  { about.links[0].label }
                </Link>
              )
        }
      </Links>
    </Container>
  )
}

export default WithScrollUp(About)