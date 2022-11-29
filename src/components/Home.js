import React, {Component} from 'react';
import { Row, Col } from 'antd';
import Choice from './Choice';
import PointList from './PointList';
import GoogleMap from './GoogleMap';


class Home extends Component {
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