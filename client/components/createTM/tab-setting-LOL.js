import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
export const fields = ['Organization', 'gamemap', 'TournamentName',
'OpenRegistration', 'CappedRegistration', 'GameMap', 'RegistrationType', 'Region'];
import Col from 'react-bootstrap/lib/Col';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import Button from 'react-bootstrap/lib/Button';
import { createTM } from '../../actions/createTM-actions';
import { bindActionCreators } from 'redux';
import { LEAGUEOFLEGEND } from '../../constants/games';


class LOLSigninForm extends Component {
  constructor(props) {
    super(props);
    this.myfunction = this.myfunction.bind(this);
  }

  myfunction(form) {
    this.props.createTM(form, LEAGUEOFLEGEND);
  }
  render() {
    const {
      fields: { Organization, TournamentName, OpenRegistration,
      CappedRegistration, GameMap, RegistrationType, Region },
      handleSubmit,
      resetForm,
      submitting
    } = this.props;
    return (
      <div>
        <Col sm={8}>
          <form onSubmit={handleSubmit(this.myfunction)}>
            <FormGroup controlID="formControlsText">
              <ControlLabel>Organization</ControlLabel>
                <FormControl type="text" placeholder="PLease Enter Your Organization Name" {...Organization} />
            </FormGroup>
            <FormGroup controlID="formControlsText">
              <ControlLabel>Tournament Name</ControlLabel>
                <FormControl type="text" placeholder="PLease Enter Your Tournament Name" {...TournamentName} />
            </FormGroup>
            <FormGroup>
              <Checkbox inline  {...OpenRegistration}>
                 Open Registration
              </Checkbox>
                    {' '}
              <Checkbox inline {...CappedRegistration}>
                 Capped Registration with waitlist
              </Checkbox>
            </FormGroup>
            <Col sm={6}>
            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Game Map</ControlLabel>
              <FormControl componentClass="select" placeholder="select" {...GameMap}>
                <option value="select" disabled>select</option>
                <option value="Summoner's Rift">Summoner's Rift</option>
                <option value="The Twisted Treeline">The Twisted Treeline</option>
                <option value="Howling Abyss">Howling Abyss</option>
              </FormControl>
            </FormGroup>
            </Col>
            <Col sm={6}>
            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Game Mode</ControlLabel>
              <FormControl componentClass="select" placeholder="select" {...GameMap}>
                <option value="select" disabled>select</option>
                <option value="Draft Pick">Draft Pick</option>
                <option value="Blind Pick">Blind Pick</option>
                <option value="Random Pick">Random Pick</option>
              </FormControl>
            </FormGroup>
            </Col>
            <Col sm={6}>
            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Registration Type</ControlLabel>
              <FormControl componentClass="select" placeholder="select" {...RegistrationType}>
                <option value="select" disabled>select</option>
                <option value="1v1">1v1</option>
                <option value="Pre-Made Team">Pre-Made Team</option>
                <option value="Free Agent Draft">Free Agent Draft</option>
              </FormControl>
            </FormGroup>
            </Col>
            <Col sm={6}>
            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Region</ControlLabel>
              <FormControl componentClass="select" placeholder="select" {...Region}>
                <option value="select" disabled>select</option>
                <option value="CN">China</option>
                <option value="NA">North America</option>
                <option value="EU">Europe West</option>
              </FormControl>
            </FormGroup>
            </Col>
            <Button type="submit" disabled={submitting}>
                  {submitting ? <i/> : <i/>}Submit
            </Button>
            <Button type="button" disabled={submitting} onClick={resetForm}>
                Clear Values
            </Button>
          </form>
        </Col>
        <Col sm={4}>
          <h>Instruction</h>
        </Col>
      </div>
  );
  }
}

LOLSigninForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createTM }, dispatch);
}

export default reduxForm({
  form: 'lolcreateform',
  fields
}, null, mapDispatchToProps)(LOLSigninForm);
