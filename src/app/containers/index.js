import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import LocalStore from '../util/localStore'
import { CITYNAME } from '../config/localStoreKey'
import * as userInfoActionsFromOtherFile from '../actions/userinfo'

class App extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.state = {
      initDone: false
    }
  }
  render() {
    return (
      <div>
        {
          this.state.initDone
          ? this.props.children
          : <div>loading...</div>
        }
      </div>
    )
  }
  componentDidMount() {
    let cityName = localStorage.getItem(CITYNAME)
    if (cityName == null) {
      cityName = '上海'
      console.log(cityName)
    }
    this.props.userinfoActions.update({
      cityName: cityName
    })
    this.setState({
      initDone: true
    })
  }
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    userinfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
