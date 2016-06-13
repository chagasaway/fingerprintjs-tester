var FingerPrintTester = React.createClass({
  getInitialState: function() {
    return {
      fingerprint: 'Generating...',
      fingerprint2: 'Generating...',
    };
  },

  componentDidMount: function() {
    this._generateFingerprint();
    this._generateFingerprint2();
  },

  _generateFingerprint: function() {
    var fingerprint = new Fingerprint({
      canvas: true, ie_activex: true, screen_resolution: true
    }).get();
    this.setState({ fingerprint: fingerprint });
  },

  _generateFingerprint2: function() {
    new Fingerprint2().get(function (result) {
      this.setState({ fingerprint2: result });
    }.bind(this));
  },

  render: function() {
    return (
      <div>
        <h2>Version 1</h2>
        <h3>{this.state.fingerprint}</h3>
        <h2>Version 2</h2>
        <h3>{this.state.fingerprint2}</h3>
      </div>
    );
  },
});

ReactDOM.render(
  <FingerPrintTester />, document.getElementById('container')
);
