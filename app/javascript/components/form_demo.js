import React from "react"
import PropTypes from "prop-types"
import Form, { formContext } from './form.js';
import TextField from './text_field.js';

class FormDemo extends React.Component {
  render () {
    return (
      <div>
        <Form for="user">
          <TextField name="name" />
        </Form>
      </div>
    );
  }
}

export default FormDemo

