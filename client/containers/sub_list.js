import React, {Component} from 'react';
import  {connect}  from 'react-redux';


class SubList extends Component{

  renderSubList(){
    return this.props.mainPageGames.map(
      (game)=>{
        return(
          <a key={game.game}> {game.game}</a>
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
export default connect(mapStateToProps)(SubList);
