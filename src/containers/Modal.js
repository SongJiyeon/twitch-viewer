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
      const closeButton = document.querySelector('.stream-modal-close');
      console.log(event.target);
      if (closeButton.contains(event.target) || !modal.contains(event.target)) {
        dispatch(closeModalAction());
      }
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
