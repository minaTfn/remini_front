import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { validateToken } from "../../actions/users";
import ResetPasswordForm from "./ResetPasswordForm";
import { addFlashMessage } from "../../actions/flashMessages";

class ResetPasswordPage extends Component {
  submit = (data) =>
    this.props
      .validateToken(data)
      .then(() => {
        this.props.addFlashMessage({
          type: "success",
          text: "Your Password has changes successfully!",
        });
        this.props.history.push("/login");
      });

  render() {
    return (
      <div>
        <h1>Reset Your Password</h1>
        <ResetPasswordForm
          submit={this.submit}
          token={this.props.match.params.token}
        />
      </div>
    );
  }
}

ResetPasswordPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
  addFlashMessage: PropTypes.func.isRequired,
  validateToken: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      token: PropTypes.string.isRequired,
    }),
  }),
};

export default connect(null, { validateToken, addFlashMessage })(
  ResetPasswordPage
);
