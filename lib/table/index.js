const Table = React.createClass({
  render: function() {
    return (
      <div className="table">
        <Player name="Dealer" />
        <Shoe />
        <Player name="Player1" />
      </div>
    );
  }
});
