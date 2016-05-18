import React, {Component} from 'react';
import  {connect}  from 'react-redux';
import {selectMainpageTournament} from '../actions/select_mainpage_tournament';
import {bindActionCreators} from 'redux';
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


class SubList extends Component{

  renderSubList(){
    return this.props.mainPageGames.map(
      (game)=>{
        return(
          <Col xs={6} md={3} key={game.game}>
            <Thumbnail  >
              <h3>{game.game}</h3>
              <p>{game.game}</p>
              <p>
                <Button onClick ={()=>this.props.selectTournament(game)} bsStyle="primary">Button</Button>&nbsp;
              </p>
            </Thumbnail>
          </Col>
        );
      }
    );
  }



  render(){

    return (
      <div>
      <Grid>
      <Row>
          {this.renderSubList()}

      </Row>  
      </Grid>
      </div>
    );

  }

}
function mapStateToProps(state){
  return {
    mainPageGames:state.mainPageGames
  };
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({selectTournament:selectMainpageTournament}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(SubList);
