import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
  faCoffee,
  faCog,
  faSpinner,
  faQuoteLeft,
  faSquare,
  faCheckSquare
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(
  fab,
  faCoffee,
  faCog,
  faSpinner,
  faQuoteLeft,
  faSquare,
  faCheckSquare
)

class HomeHeader extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.state = {
      value: ''
    }
  }
  render() {
    return (
      <div id="home-header" className="clear-fix">
        <div className="home-header-left float-left">
          <span>{this.props.cityName}</span>
          &nbsp;
          <FontAwesomeIcon icon={faCog} size="4x" />
        </div>
        <div className="home-header-right float-right">
          <FontAwesomeIcon icon={faCog} size="4x" />
        </div>
        <div className="home-header-middle">
          <div className="search-container">
            <FontAwesomeIcon icon={faCog} size="4x" />
            <input
              className="search-input"
              type="text"
              placeholder="请输入关键字"
              onChange={this.ChangeHandle.bind(this)}
              onKeyUp={this.KeyUpHandle.bind(this)}
              value={this.state.value}/>
          </div>
        </div>
      </div>
    )
  }
  componentDidMount() {
    this.setState({
      value: this.props.value || ''
    })
  }
  ChangeHandle(e) {
    this.setState({
      value: e.target.value
    })
  }
  KeyUpHandle(e) {
    if (e.keyCode !== 13) {
      return
    }
    this.props.enterHandle(e.target.value)
  }
}

export default HomeHeader
