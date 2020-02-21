import { connect } from 'react-redux';
import { closeModalAction } from '../actions';
import Modal from '../components/layouts/Modal';

const mapStateToProps = state => {
  return {
    stream: state.stream
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClose() {
      dispatch(closeModalAction());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
