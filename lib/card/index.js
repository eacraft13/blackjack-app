const Card = React.createClass({
  render: function() {
    return (
      <div className="card">
        <div>Suit: <span>{this.props.suit}</span></div>
        <div>Value: <span>{this.props.value}</span></div>
      </div>
    );
  }
});
