import { connect } from 'react-redux'
import User from '../components/Info/User/Index'

const mapStateToProps = state => ({
  status: state.addUser
})

const mapDispatchToProps = dispatch => ({
  changeAddStatus: () => dispatch({
    type: 'changeAddStatus'
  })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User)
