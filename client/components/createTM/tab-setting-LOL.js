import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
export const fields = ['Organization', 'gamemap'];

class SimpleForm extends Component {
  myfunction() {
      console.log("myfunction");
  }
  render() {
    const {
      fields: { Organization, gamemap },
      handleSubmit,
      resetForm,
      submitting
    } = this.props;
    return (<form onSubmit={handleSubmit(this.myfunction)}>
      <div>
        <label>Organization</label>
        <div>
          <input type="text" placeholder="Organization" {...Organization} />
        </div>
      </div>
      <div>
        <label>Game Map</label>
        <div>
          <select
            {...gamemap}
              // required syntax for reset form to work
              // undefined will not change value to first empty option
              // when resetting
            value={gamemap.value || ''}>
            <option></option>
            <option value="Rift">Summoner's Rift</option>
            <option value="Crystal">Crystal Something</option>
          </select>
        </div>
      </div>
      <div>
        <button type="submit" disabled={submitting}>
          {submitting ? <i/> : <i/>} Submit
        </button>
        <button type="button" disabled={submitting} onClick={resetForm}>
            Clear Values
        </button>
      </div>
    </form>
  );
  }
}

SimpleForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
}

export default reduxForm({
  form: 'simple',
  fields
})(SimpleForm)
