import React from 'react'
import '../css/Gallery.css'
import {Row, Col, Button} from 'react-bootstrap';
import Carousel from './Carousel';
import PageHeading from './PageHeading'
import unrealBladeOne from '../../images/Unreal/blade/bladeHighResolution_v2.png'
import unrealBladeTwo from '../../images/Unreal/blade/bladeHighResolution_v4.png'
import imageBladeOne from '../../images/Maya/blade/bladeOfChaos_High_Shaded.png'
import imageBladeTwo from '../../images/Maya/blade/bladeOfChaos_High_WireFrame.png'
import imageBladeThree from '../../images/Maya/blade/bladeOfChaos_Low_Shaded.png'
import imageBladeFour from '../../images/Maya/blade/bladeOfChaos_Low_WireFrame.png'
// Maps 
import bladeAOMap from '../../images/Maps/blade/bladesOfChaos_ambientOclusion.png'
import bladeColorMap from '../../images/Maps/blade/bladesOfChaos_Color.png'
import bladeMetalMap from '../../images/Maps/blade/bladesOfChaos_Metal.png'
import bladeNormalMap from '../../images/Maps/blade/bladesOfChaos_normalMap.png'
import bladedRoughMap from '../../images/Maps/blade/bladesOfChaos_Rough.png'

import unrealMonitorOne from '../../images/Unreal/monitor/monitorFront.png'
import unrealMonitorTwo from '../../images/Unreal/monitor/monitorBack.png'
import imageMonitorOne from '../../images/Maya/monitor/lowPolyMonitorFront.png'
import imageMonitorTwo from '../../images/Maya/monitor/lowPolyMonitorFrontMesh.png'
import imageMonitorThree from '../../images/Maya/monitor/lowPolyMonitorBack.png'
import imageMonitorFour from '../../images/Maya/monitor/lowPolyMonitorBackMesh.png'
// Maps
import monitorColorMap from '../../images/Maps/monitor/benQ_monitor_colorMapFinal.png'
import monitorUnwrap from '../../images/Maps/monitor/benQ_monitor_UVUnwrap.png'
import monitorAOMap from '../../images/Maps/monitor/benQMonitor_AmbientOcclusion.png'

import unrealBarrelOne from '../../images/Unreal/barrel/barrelUnreal.png'
import imageBarrelOne from '../../images/Maya/barrel/barrelHighPoly.png'
import imageBarrelTwo from '../../images/Maya/barrel/barrelHighPolyMesh.png'
import imageBarrelThree from '../../images/Maya/barrel/barrelLowPoly.png'
import imageBarrelFour from '../../images/Maya/barrel/barrelLowPolyMesh.png'
// Maps
import barrelColorMap from '../../images/Maps/barrel/barrel_color.png'
import barrelNormalMap from '../../images/Maps/barrel/barrel_normalMap.png'
import barrelRoughMap from '../../images/Maps/barrel/barrel_rough.png'
import barrelAOMap from '../../images/Maps/barrel/ambientOcclusion.png'



import LightBoxCarousel, { Modal, ModalGateway } from 'react-images';

const bladeImages = [{ src: bladeColorMap }, { src: bladeAOMap }, {src: bladeMetalMap}, {src: bladeNormalMap}, {src: bladedRoughMap}];
const monitorImages = [{ src: monitorColorMap }, { src: monitorAOMap }, {src: monitorUnwrap}];
const barrelImages = [{ src: barrelColorMap }, { src: barrelNormalMap }, {src: barrelRoughMap}, {src: barrelAOMap}];

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bladeModalIsOpen: false,
            monitorModalIsOpen: false,
            barrelModalIsOpen: false,
            bladeModelName: "Blade of Chaos",
            monitorCarouselCaptions: {
                modelName: "BenQ Monitor",
                unreal: "Unreal Render",
                one: "Low Poly Front",
                two: "Low Poly Front Mesh", 
                three: "Low Poly Back", 
                four: "Low Poly Back Mesh"
            },
            bladeItems: [
                {
                    id: 1,
                    image: unrealBladeOne,
                    caption: "Unreal Render Front"
                },
                {
                    id: 2,
                    image: unrealBladeTwo,
                    caption: "Unreal Render Back"
                },
                {
                    id: 3,
                    image: imageBladeOne,
                    caption: "High Poly"
                },
                {
                    id: 4,
                    image: imageBladeTwo,
                    caption: "High Poly Mesh"
                },
                {
                    id: 5,
                    image: imageBladeThree,
                    caption: "Low Poly"
                },
                {
                    id: 6,
                    image: imageBladeFour,
                    caption: "Low Poly Mesh"
                },
            ],
            monitorItems: [
                {
                    id: 1,
                    image: unrealMonitorOne,
                    caption: "Unreal Render Front"
                },
                {
                    id: 2,
                    image: unrealMonitorTwo,
                    caption: "Unreal Render Back"
                },
                {
                    id: 3,
                    image: imageMonitorOne,
                    caption: "Low Poly Front"
                },
                {
                    id: 4,
                    image: imageMonitorTwo,
                    caption: "Low Poly Front Mesh"
                },
                {
                    id: 5,
                    image: imageMonitorThree,
                    caption: "Low Poly Back"
                },
                {
                    id: 6,
                    image: imageMonitorFour,
                    caption: "Low Poly Back Mesh"
                }
            ],
            barrelItems: [
                {
                    id: 1,
                    image: unrealBarrelOne,
                    caption: "Unreal Render"
                },
                {
                    id: 2,
                    image: imageBarrelOne,
                    caption: "High Poly"
                },
                {
                    id: 3,
                    image: imageBarrelTwo,
                    caption: "High Poly Mesh"
                },
                {
                    id: 4,
                    image: imageBarrelThree,
                    caption: "Low Poly"
                },
                {
                    id: 5,
                    image: imageBarrelFour,
                    caption: "Low Poly Mesh"
                }
            ]
        }
    }

    toggleBladeModal = () => {
        this.setState(state => ({ bladeModalIsOpen: !state.bladeModalIsOpen }));
      };

      toggleMonitorModal = () => {
        this.setState(state => ({ monitorModalIsOpen: !state.monitorModalIsOpen }));
      };

      toggleBarrelModal = () => {
        this.setState(state => ({ barrelModalIsOpen: !state.barrelModalIsOpen }));
      };

    render() {
        const { bladeModalIsOpen, monitorModalIsOpen, barrelModalIsOpen } = this.state;
        return (
            <div id="gallery-container">
                <ModalGateway className="blade-modal">
                    {bladeModalIsOpen ? (
                    <Modal onClose={this.toggleBladeModal}>
                        <LightBoxCarousel views={bladeImages} />
                    </Modal>
                    ) : null}
                </ModalGateway>
                <ModalGateway className="monitor-modal">
                    {monitorModalIsOpen ? (
                    <Modal onClose={this.toggleMonitorModal}>
                        <LightBoxCarousel views={monitorImages} />
                    </Modal>
                    ) : null}
                </ModalGateway>
                <ModalGateway className="barrel-modal">
                    {barrelModalIsOpen ? (
                    <Modal onClose={this.toggleBarrelModal}>
                        <LightBoxCarousel views={barrelImages} />
                    </Modal>
                    ) : null}
                </ModalGateway>
                <PageHeading mainHeading="Gallery" subText="Feel free to browse around"/>
                <Row className="image-row">
                    <Col className="image-cover" lg={8}>
                        <Carousel length={this.state.bladeItems.length} items={this.state.bladeItems} />
                    </Col>
                    <Col className="project-info-div" lg={4}>
                        <Row>
                             <Col className="detail-column"> 
                                <h1 className="detail-heading">{this.state.bladeModelName}</h1>
                             </Col>
                        </Row>
                        <Row>
                            <h5 className="description-heading">Description</h5>
                        </Row>
                        <Row>
                            <p className="detail-description">
                                The Blade of Chaos is found in the popular gaming series God of War. 
                                I recreated the game model inside of Maya - designing a high and low poly model.
                                <br/><br/>
                                I baked a normal map in Maya and exported an AO map through the Arnold settings in Maya. 
                                I then created the color, roughness and metal maps in Photoshop. 
                                <br/><br/>
                                The maps applied to the model can be seen in the Unreal Render images to the left.
                            </p>
                        </Row>
                        <Row>
                            <Button onClick={this.toggleBladeModal} className="view-button" variant="success">View Textures</Button>
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
                        <Row>
                            <h5 className="description-heading">Description</h5>
                        </Row>
                        <Row>
                            <p className="detail-description">
                                This is my BenQ monitor that I look at every single day! I created this model
                                as my first project in Maya. I only made the low poly and a couple maps. 
                                <br/><br/>
                                I used the same technique in getting the AO map through the Arnold settings in Maya.
                                I also decided to add some small details to the color map to spruce it up. 
                                <br/><br/>
                                The couple maps that I used can be view through clicking the button below. 
                            </p>
                        </Row>
                        <Row>
                            <Button onClick={this.toggleMonitorModal} className="view-button" variant="success">View Textures</Button>
                        </Row>
                    </Col>
                    <Col className="image-cover" lg={8}>
                        <Carousel length={this.state.monitorItems.length} items={this.state.monitorItems}/>
                    </Col>
                </Row>
                <hr className="line-break"/>
                <Row className="image-row">
                    <Col className="image-cover" lg={8}>
                        <Carousel length={this.state.barrelItems.length} items={this.state.barrelItems} />
                    </Col>
                    <Col className="project-info-div" lg={4}>
                        <Row>
                             <Col className="detail-column"> 
                                <h1 className="detail-heading">{this.state.bladeModelName}</h1>
                             </Col>
                        </Row>
                        <Row>
                            <h5 className="description-heading">Description</h5>
                        </Row>
                        <Row>
                            <p className="detail-description">
                                This barrel is a silly old barrel. I created it to resonate the memory I have
                                of all the barrels I destroy in games I play!
                                <br/><br/>
                                This is a very simple model I made using Maya. I only created the low and high
                                poly version of the barrel as it was just a small fun asset! 
                                <br/><br/> 
                                I have created a couple of the maps which can be viewed below, none have been 
                                applied yet. Very excited though.
                            </p>
                        </Row>
                        <Row>
                            <Button onClick={this.toggleBarrelModal} className="view-button" variant="success">View Textures</Button>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Gallery;