import React from 'react'
import '../css/Gallery.css'
import {Row, Col} from 'react-bootstrap';
import Carousel from './Carousel';
import PageHeading from './PageHeading'
import imageBladeOne from '../../images/Maya/blade/bladeOfChaos_High_Shaded.png'
import imageBladeTwo from '../../images/Maya/blade/bladeOfChaos_High_WireFrame.png'
import imageBladeThree from '../../images/Maya/blade/bladeOfChaos_Low_Shaded.png'
import imageBladeFour from '../../images/Maya/blade/bladeOfChaos_Low_WireFrame.png'

import imageMonitorOne from '../../images/Maya/monitor/lowPolyMonitorFront.png'
import imageMonitorTwo from '../../images/Maya/monitor/lowPolyMonitorFrontMesh.png'
import imageMonitorThree from '../../images/Maya/monitor/lowPolyMonitorBack.png'
import imageMonitorFour from '../../images/Maya/monitor/lowPolyMonitorBackMesh.png'


class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bladeCarouselCaptions: {
                modelName: "Blade of Chaos",
                one: "High Poly",
                two: "High Poly Mesh",
                three: "Low Poly", 
                four: "Low Poly Mesh"
            },
            monitorCarouselCaptions: {
                modelName: "BenQ Monitor",
                one: "Low Poly Front",
                two: "Low Poly Front Mesh", 
                three: "Low Poly Back", 
                four: "Low Poly Back Mesh"
            }
        }
    }

    render() {
        return (
            <div id="gallery-container">
                <PageHeading mainHeading="Gallery" subText="Feel free to browse around"/>
                <Row className="image-row">
                    <Col className="image-cover" lg={8}>
                        <Carousel captionList={this.state.bladeCarouselCaptions} 
                        imageOne={imageBladeOne} 
                        imageTwo={imageBladeTwo} 
                        imageThree={imageBladeThree}
                        imageFour={imageBladeFour}
                        />
                    </Col>
                    <Col className="project-info-div" lg={4}>
                        <Row>
                             <Col className="detail-column"> 
                                <h1 className="detail-heading">{this.state.bladeCarouselCaptions.modelName}</h1>
                             </Col>
                        </Row>
                    </Col>
                </Row>
                <hr className="line-break"/>
                <Row className="image-row">
                <Col className="project-info-div" lg={4}>
                        <Row>
                             <Col className="detail-column"> 
                                <h1 className="detail-heading">{this.state.monitorCarouselCaptions.modelName}</h1>
                             </Col>
                        </Row>
                    </Col>
                <Col className="image-cover" lg={8}>
                    <Carousel captionList={this.state.monitorCarouselCaptions} 
                        imageOne={imageMonitorOne} 
                        imageTwo={imageMonitorTwo} 
                        imageThree={imageMonitorThree}
                        imageFour={imageMonitorFour}
                        />
                    </Col>

                </Row>
            </div>
        )
    }
}

export default Gallery;