const Player = React.createClass({

  render: function() {
    return (
      <div className="player">
        <div>{this.props.name}</div>
        <div className="player-total">Total: <span>?</span></div>
        <Hand />
      </div>
    );
  }

});
