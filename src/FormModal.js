import React from 'react'
import Modal from 'react-modal';

Modal.setAppElement('#root');

function FormModal({ data, isOpen, onRequestClose  }) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Успешно зарегистрировано</h2>
      <h2>Данные формы в JSON:</h2>
      {console.log(data)}
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button onClick={onRequestClose} >Закрыть</button>
    </Modal>
  );
}
export default FormModal;