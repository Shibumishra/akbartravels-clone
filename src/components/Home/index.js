import React from 'react';
import './style.css';
import Slider from '../Slider/Slider';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

const index = () => {


  return (
    <div className='main-cont'>
      <div className='offers'>
        <img src='https://dhiz4uvf5rpaq.cloudfront.net/banner-files/banner-images/IN/zero-convenience-fees.jpg' alt='' />
      </div>
      <div style={{ background: '#fff', paddingBottom: '100px', borderBottom: '1px solid #e5e5e6' }}>
        <div className='exclusive-deals'>
          <div className='exclusive-container'>
            <div className='exclusive-heading'>
              <h2>Exclusive  <span>Deals</span></h2>
              <div className='exclusive-text'>
                <div style={{ display: 'block', width: 700, padding: 30 }}>
                  <Tabs defaultActiveKey="first">
                    <Tab eventKey="first" title="Hot Deal">

                    </Tab>
                    <Tab eventKey="second" title="Flight">

                    </Tab>
                    <Tab eventKey="third" title="Hotel">

                    </Tab>
                    <Tab eventKey="third" title="Holidays">

                    </Tab>
                    <Tab eventKey="third" title="Cruise">

                    </Tab>
                  </Tabs>
                </div>
              </div>
            </div>

            <div>
              <a className='view-all-deals'>View All Deals</a>
            </div>
          </div>
        </div>
        <Slider />
      </div>

      <div className='popular'>
        <div className='popular-heading'>
          <h1>Popular <span>Destinations</span></h1>
          <div className='popular-text'>
            <h4>All Destinations</h4>
            <h4>International</h4>
            <h4>Domestic</h4>
          </div>
          <div className='view-all_dest'>
            <a href='#'>View All Destinations</a>
          </div>
        </div>

        <div className='popular-destinations'>
          <div className='all-destinations'>
            <div className='scroll'>
              <div className='scroll-container'>
                <img src='https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/International/webp/maldives1222.webp' alt='' />
                <p>Maldives </p>
              </div>
              <div className='scroll-container'>
                <img src='https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/International/webp/Dubai.webp' alt='' />
                <p>Dubai</p>
              </div>
              <div className='scroll-container'>
                <img src='https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/International/webp/turkey1222.webp' alt='' />
                <p>Turkey</p>
              </div>
              <div className='scroll-container'>
                <img src='https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/Domestic/webp/kashmir70.webp' alt='' />
                <p>kashmir</p>
              </div>
              <div className='scroll-container'>
                <img src='https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/Domestic/webp/ladakh.webp' alt='' />
                <p>Ladakh</p>
              </div>
              <div className='scroll-container'>
                <img src='https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/Domestic/webp/Andaman.webp' alt='' />
                <p>Cordelia Cruises</p>
              </div>
              <div className='scroll-container'>
                <img src='https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/International/webp/mauritious70.webp' alt='' />
                <p>Mauritious</p>
              </div>
              <div className='scroll-container'>
                <img src='https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/International/webp/Srilanka.webp' alt='' />
                <p>Sri-Lanka</p>
              </div>
              <div className='scroll-container'>
                <img src='https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/International/webp/switz1222.webp' alt='' />
                <p>switzerland</p>
              </div>
              <div className='scroll-container'>
                <img src='https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/Domestic/webp/Andaman.webp' alt='' />
                <p>Andaman</p>
              </div>
              <div className='scroll-container'>
                <img src='https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/Domestic/webp/himachal11-11-21.webp' alt='' />
                <p>Himachal</p>
              </div>
            </div>
          </div>
          <div className="project-img-section">
            <div className="box">
              <div className="img-box">
                <a href="">
                  <img
                    src="https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/International/big/webp/europe11322.webp"
                    alt=""
                  />
                </a>
              </div>
              {/* <p>Europe </p> */}
            </div>
            <div className="box">
              <div className="img-box">
                <a href="">
                  <img
                    src="https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/International/big/webp/thailand1132022.webp"
                    alt=""
                  />
                </a>
              </div>
              {/* <p>Thailand </p> */}
            </div>
            <div className="box">
              <div className="img-box">
                <a href="">
                  <img
                    src="https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/Domestic/big/webp/Himachal.webp"
                    alt=""
                  />
                </a>
              </div>
              {/* <p>Himachal</p> */}
            </div>
            <div className="box">
              <div className="img-box">
                <a href="">
                  <img
                    src="https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/Domestic/big/webp/Ladakh12-3-21.webp"
                    alt=""
                  />
                </a>
              </div>
              {/* <p>Ladakh</p> */}
            </div>
          </div>
        </div>

        <div className='travel-stories'>
          <h2>Travel  <span>Stories</span></h2>
         
        </div>
      </div>
    </div>
  )
}

export default index