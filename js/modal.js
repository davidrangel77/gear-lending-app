import React from 'react';

export default React.createClass({

  render() {
    return (
      <div className="modalPosition">
        <div className={this.props.isModalOpen() ? "visible" : "hidden"}>
          <div className="modalBackground">
            <p><button className="clickhere_button" onClick={() => this.props.closeModal()}>Close</button></p>
          </div>
        </div>
      </div>
    )
  }
})
