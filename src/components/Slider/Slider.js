import React, { Component } from "react";
import Slider from "react-slick";
import Card from "./Card";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="Sliders">
        <Slider {...settings}>
          <div>
            <Card
              pic='https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/webp/convineance40722.webp'
              name='Flight'
              fee='Zero Convenience Fee'
              title='Enjoy Zero Convenience Fee + Save up to Rs 4,000 on each flight booking.'
            />
          </div>
          <div>
            <Card
              pic='https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/webp/say-yes.webp'
              name='Flight'
              fee='Say YES to International Travel'
              title='Enjoy up to Rs. 5000* off on International Flights'
            />
          </div>
          <div>
            <Card
              pic='https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/webp/Long-weekend.webp'
              name='Holidays'
              fee='Long weekend holidays'
              title='Starting from ₹ 31,999* Book online now and get exciting offers'
            />
          </div>
          <div>
            <Card
              pic='https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/webp/MobiKwik-flight.webp'
              name='Flight'
              fee='Save Flat Rs. 450 on Flights'
              title='Get flat Rs 200* off on flights + pay through MobiKwik wallet and get flat Rs 250* MobiKwik Cashback'
            />
          </div>
          <div>
            <Card
              pic='https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/webp/monsoon-special.webp'
              name='Holidays'
              fee='Monsoon special'
              title='Starting from ₹ 10,999 * Book online now and get exciting offers'
            />
          </div>
          <div>
            <Card
              pic='https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/webp/group-tour29.webp'
              name='Holidays'
              fee='International group tour'
              title='Starting from ₹ 10,999 * Book online now and get exciting offers'
            />
          </div>
        </Slider>
      </div>
    );
  }
}