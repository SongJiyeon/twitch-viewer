import { connect } from 'react-redux';
import { closeModalAction } from '../actions';
import Modal from '../components/layouts/Modal';

const mapDispatchToProps = dispatch => {
  return {
    onClose() {
      dispatch(closeModalAction());
    }
  }
};

export default connect(null, mapDispatchToProps)(Modal);
