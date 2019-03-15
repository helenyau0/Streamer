import React from 'react';
import Modal from '../Modal';
import history from '../../history';

class StreamDelete extends React.Component {
  renderActions() {
    return (
      <React.Fragment>
        <button onSubmit={this.onSubmit} className="ui button negative">
          Delete
        </button>
        <button className="ui button">Cancel</button>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.stream) {
      return 'Are you sure you want to delete this stream?';
    }

    return `Are you sure you want to delete this stream with title: ${
      this.props.stream.title
    }?`;
  }

  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    );
  }
}

export default StreamDelete;
