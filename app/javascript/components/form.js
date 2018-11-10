import React from "react"
import PropTypes from "prop-types"

const formContext = React.createContext({ for: '' });
export { formContext };

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { token: '' };
  }

  componentDidMount() {
    const token = document.querySelector('meta[name="csrf-token"]').content;
    this.setState({ token });
  }

  render () {
    const ctx = { for: this.props.for };

    return (
      <form method="POST" action={this.props.for}>
        <formContext.Provider value={ctx}>
          <input type="hidden" value={this.state.token} />
          {this.props.children}
        </formContext.Provider>
      </form>
    );
  }
}


export default Form

