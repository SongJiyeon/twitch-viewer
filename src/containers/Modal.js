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
    onClick(event) {
      const modal = document.querySelector('.modal-container');
      const closeButton = document.querySelector('.modal-close');
      if (closeButton.contains(event.target) || !modal.contains(event.target)) {
        dispatch(closeModalAction());
      }
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
