import React from 'react';
import PageHeading from './PageHeading';
import AboutHeading from './AboutHeading';
import AboutSubtext from './AboutSubtext';
import { Container, Col, Row, Image } from 'react-bootstrap';
import photoOfMe from '../../images/linkedinImage.jpeg'
import mayaLogo from '../../images/logos/maya_logo.png'
import photoshopLogo from '../../images/logos/photoshop_logo.jpeg'
import unrealLogo from '../../images/logos/unreal_logo.png'

class About extends React.Component {
    
    render() {
        return (
            <Container id="about-container">
                <PageHeading mainHeading="About" subText="Are you reading my journal?" />
                <a target="_blank" href="https://www.linkedin.com/in/dom-tripodi-371665138/">
                    <Image style={{marginBottom: 10}} src={photoOfMe} roundedCircle/>
                </a>
                
                <AboutHeading heading="Name"/>
                <AboutSubtext text="Dom Tripodi"/>
                
                <AboutHeading heading="Title"/>
                <AboutSubtext text="Software Engineer"/>

                <AboutHeading heading="City & Country Residence"/>
                <AboutSubtext text="Adelaide, South Australia"/>

                <AboutHeading heading="Who am I?"/>
                <AboutSubtext text="I am a graduating Software Engineering student who 
                has taken an elective in Game Asset Creation. I have developed this portfolio of assets over a 
                6 month period whilst balancing other courses also. It has been an exciting prospect to
                understand the details and particularities found in the Gaming industry - only the tip of the iceburg it seems.
                This will not be the last time I create a Game Asset, however, the forcasted date for the next 
                is yet to be determined. Feel free to contact me by going to the contact page in the top right corner. 
                I am always up for a chat."/>

                <AboutHeading heading="Software Proficiency"/>
                <Row>
                    <Col>
                        <Image style={{width: 100}} src={mayaLogo} />
                    </Col>
                    <Col>
                        <Image style={{width: 100}} src={photoshopLogo} />
                    </Col>
                    <Col>
                        <Image style={{width: 100}} src={unrealLogo} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Novice</p>
                    </Col>
                    <Col>
                        <p>Proficient</p>
                    </Col>
                    <Col>
                        <p>Amateur</p>
                    </Col>
                </Row>
                
            </Container>
        )
    }
}

export default About;