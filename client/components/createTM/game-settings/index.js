import React, { Component } from 'react'
import HS from './HS'
import LOL from './LOL'
import OW from './OW'

export default class CreateTournamentSettings extends Component {
  static gamesWithPredefinedSettings = {
    // TODO: Do something with these ids so they can work on newly generated ids
    '5754ada0e38fa8652ba9c2ee': LOL,
    '5754ad9ce38fa8652ba9c2ed': HS,
    '5754adb5e38fa8652ba9c2f1': OW
  }
  
  constructor(props) {
    super(props)
    console.log(props);
  }


  componentWillReceiveProps(props){
    console.log(props);
  }
  static propTypes = {
    selectedGame: React.PropTypes.object,
  }
  chooseSettings() {
    // TODO:
    /*
      Algorirthm :
      First, find the game's id. If it belongs to a predefined set,
        grab the settings with the matching id.
      If it doesn't belong to a set, then check its genre
        Select predefined settings based on its genre
    */
    const PredefinedGame =
      CreateTournamentSettings.gamesWithPredefinedSettings[this.props.params.gameId]
    let settings
    console.log(PredefinedGame);
    if (PredefinedGame) {
      settings = <PredefinedGame />
    } else {
      settings = (<div></div>)
    }
    return settings
  }
  render() {
    return (
      <div>
        {this.chooseSettings()}
      </div>
    )
  }
}
