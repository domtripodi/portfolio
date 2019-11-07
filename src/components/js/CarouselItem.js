import React from 'react'
import {MDBCarouselItem, MDBView, MDBMask, MDBCarouselCaption} from 'mdbreact'
import {Image} from 'react-bootstrap'

class CarouselItem extends React.Component {
    render() {
        return (
            <MDBCarouselItem itemId={this.props.item.id}>
                <MDBView>
                <Image
                    className="d-block w-100"
                    src={this.props.item.image}
                    alt="First slide"
                    thumbnail
                />
                <MDBMask overlay="black-light" />
                </MDBView>
                <MDBCarouselCaption>
                    <p>{this.props.item.caption}</p>
                </MDBCarouselCaption>
            </MDBCarouselItem>
        )
    }
}
export default CarouselItem;