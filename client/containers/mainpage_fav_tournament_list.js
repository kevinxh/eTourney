import React, {Component} from 'react';
import  {connect}  from 'react-redux';
import {selectMainpageTournament} from '../actions/select_mainpage_tournament';
import {bindActionCreators} from 'redux';


class SubList extends Component{

  renderSubList(){
    return this.props.mainPageGames.map(
      (game)=>{
        return(
          <a key={game.game}
          onClick ={()=>this.props.selectTournament(game)}
          > {game.game}</a>
        );
      }
    );
  }



  render(){

    return (
      <div>
          {this.renderSubList()}
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
