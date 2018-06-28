import { connect } from 'react-redux'
import Staff from '../components/General/Staff/Index'

const mapStateToProps = state => ({
  add: state.addStaff,
  assign: state.assign
})

const mapDispatchToProps = dispatch => ({
  changeAddStatus: () => dispatch({
    type: 'changeAddStatus'
  }),
  changeAssignStatus: () => dispatch({
    type: 'changeAssignStatus'
  })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Staff)
