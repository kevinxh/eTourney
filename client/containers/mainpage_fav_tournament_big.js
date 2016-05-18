import React, {Component} from 'react';
import {connect} from 'react-redux';
import TabContainer from 'react-bootstrap/lib/TabContainer';
import Tabs from 'react-bootstrap/lib/Tabs';
import Tab from 'react-bootstrap/lib/Tab';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Grid from 'react-bootstrap/lib/Grid';
import Image from 'react-bootstrap/lib/Image';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import Button from 'react-bootstrap/lib/Button';

class BigTournament extends Component{
  render(){
    if (!this.props.tournament){
      return <div>heheda</div>

    }

    return (


      <div>
      <Grid>
      <Row>
      <Col xs={12} md={9}>
        <Thumbnail  >
          <h3>{this.props.tournament.game}</h3>
        </Thumbnail>
      </Col>

      </Row>
      </Grid>
      </div>

    );
  }
}
function mapStateToProps(state){
  return{
    tournament:state.bigtournament
  };
}

export default connect(mapStateToProps)(BigTournament);
