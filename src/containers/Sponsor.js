import { connect } from 'react-redux'
import Sponsor from '../components/Activity/Sponsor/Index'

const mapStateToProps = state => ({
  step: state.step
})

const mapDispatchToProps = dispatch => ({
  increaseStep: () => dispatch({
    type: 'increaseStep'
  }),
  decreaseStep: () => dispatch({
    type: 'decreaseStep'
  })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sponsor)
