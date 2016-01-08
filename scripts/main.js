var React = require('react');
var ReactDOM = require('react-dom');

/*
  StorePicker
  This will let us make <StorePicker/>
*/

var StorePicker = React.createClass({
  render: function() {
    return (
      <form className="store-selector">
       <h2>Please enter a store</h2>
       <input type="text" ref="storeId" required="true" />
       <input type="submit" />
      </form>
    )
  }
});


ReactDOM.render(<StorePicker/>, document.querySelector('#main'));
