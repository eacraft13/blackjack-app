const Hand = React.createClass({

  render: function() {
    const cards = [ { key: 1, value: 10, suit: 'Hearts' }, { key: 2, value: 8, suit: 'Spades' } ];

    return (
      <div className="hand">
        {cards.map(card => <Card key={card.key} value={card.value} suit={card.suit} />)}
      </div>
    );
  }

});
