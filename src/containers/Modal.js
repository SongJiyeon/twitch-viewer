import { connect } from 'react-redux';
import { closeModalAction } from '../actions';
import Modal from '../components/Modal';

const mapStateToProps = state => {
  return {
    isModalOpen: state.isModalOpen,
    stream: state.stream
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClick(event) {
      const modal = document.querySelector('.modal-container');
      if (!modal.contains(event.target)) {
        dispatch(closeModalAction());
      }
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
