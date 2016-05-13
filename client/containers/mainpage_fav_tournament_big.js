import React, {Component} from 'react';
import {connect} from 'react-redux';

class BigTournament extends Component{
  render(){
    if (!this.props.tournament){
      return <div>heheda</div>

    }

    return (
      <div>{this.props.tournament.game}</div>
    );
  }
}
function mapStateToProps(state){
  return{
    tournament:state.bigtournament
  };
}

export default connect(mapStateToProps)(BigTournament);
