import React from "react";
import { MDBCarousel, MDBCarouselInner} from
"mdbreact";
import '../css/Carousel.css'
import {Image} from 'react-bootstrap'
import CarouselItem from "./CarouselItem";


class CarouselPage extends React.Component {
    componentDidMount() {
      console.log(this.props.items)
      this.props.items.map((item, i) => {
        console.log(item)
      })
      
    }

    carouselItems = () => {

    }

    render() {
      let carouselItems = [];
      {this.props.items.map((item, i) => {
        carouselItems.push(<CarouselItem key={i} item={item}/>)
      })}
        return (
            <div id="carousel-container">
              <MDBCarousel
              activeItem={1}
              length={this.props.length}
              showControls={true}
              showIndicators={true}
              interval="6000"
              className="z-depth-1"
              onHoverStop={true}
            >
              <MDBCarouselInner>
                {carouselItems}
              </MDBCarouselInner>
                
              {/* <MDBCarouselItem itemId="1">
                  <MDBView>
                    <Image
                      className="d-block w-100"
                      src={this.props.unrealImageOne}
                      alt="First slide"
                      thumbnail
                    />
                  <MDBMask overlay="black-light" />
                  </MDBView>
                  <MDBCarouselCaption>
                    <p>{this.props.captionList.unreal}</p>
                  </MDBCarouselCaption>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="2">
                  <MDBView>
                    <Image
                      className="d-block w-100"
                      src={this.props.imageOne}
                      alt="First slide"
                      thumbnail
                    />
                  <MDBMask overlay="black-light" />
                  </MDBView>
                  <MDBCarouselCaption>
                    <p>{this.props.captionList.one}</p>
                  </MDBCarouselCaption>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="3">
                  <MDBView>
                    <Image
                      className="d-block w-100"
                      src={this.props.imageTwo}
                      alt="Second slide"
                      thumbnail
                    />
                  <MDBMask overlay="black-strong" />
                  </MDBView>
                  <MDBCarouselCaption>
                    <p>{this.props.captionList.two}</p>
                  </MDBCarouselCaption>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="4">
                  <MDBView>
                    <Image
                      className="d-block w-100"
                      src={this.props.imageThree}
                      alt="Third slide"
                      thumbnail
                    />
                  <MDBMask overlay="black-slight" />
                  </MDBView>
                  <MDBCarouselCaption>
                    <p>{this.props.captionList.three}</p>
                  </MDBCarouselCaption>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="5">
                  <MDBView>
                    <Image
                      className="d-block w-100"
                      src={this.props.imageFour}
                      alt="Third slide"
                      thumbnail
                    />
                  <MDBMask overlay="black-slight" />
                  </MDBView>
                  <MDBCarouselCaption>
                    <p>{this.props.captionList.four}</p>
                  </MDBCarouselCaption>
                </MDBCarouselItem> */}
              {/* </MDBCarouselInner> */}
            </MDBCarousel>
            </div>
          );
    }
}

export default CarouselPage;