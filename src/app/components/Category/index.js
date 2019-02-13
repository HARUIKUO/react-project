import React from 'react'
import ReactSwipe from 'react-swipe';
import PureRenderMixin from 'react-addons-pure-render-mixin'

class Category extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }
  render() {
    const opt = {
      auto: 2500,
      callback: function (index) {
        this.setState({index: index});
      }.bind(this)
    }
    return (
      <div id="home-category">
        <ReactSwipe swipeOptions={opt}>
          <div>PANE 1</div>
          <div>PANE 2</div>
          <div>PANE 3</div>
        </ReactSwipe>
      </div>
    )
  }
}

export default Category
