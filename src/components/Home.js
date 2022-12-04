import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Choice from './Choice';
import PointList from './PointList';
import Map from './Map';
import axios from 'axios';
import {MAPS_API_KEY, BASE_URL} from '../constants';


class Home extends Component {
  showPointofInterest = setting =>{
    console.log("setting -> ", setting);
  }
  render() {
    return (
      <Row className='main'>
          <Col span={8} className="left-side">
              <Choice/>
              <PointList/>
          </Col>
          <Col span={16} className="right-side">
              <GoogleMap/>
          </Col>
      </Row>
    );
  }
}
export default Home