import React, { useState } from 'react';
import Form from '../components/Form';
import { v4 as uuid } from 'uuid';
import List from '../components/List';
import FormPopup from '../components/Popup';

export default function Home() {
  const [list, setList] = useState([]);
  const [popupName, setPopupName] = useState('');
  const [visible, setVisible] = useState(false);
  const [selectedId, setSelectedId] = useState();
  const [selectedItem, setSelectedItem] = useState();
  const handleSaveForm = (form) => {
    setList([...list, { ...form, id: uuid() }]);
  };
  const handleEdit = (priority) => {
    setList(
      list.map((item) =>
        item.id === selectedItem.id ? { ...item, priority } : item
      )
    );
    togglePopup();
  };

  function togglePopup() {
    setVisible(!visible);
  }
  function removeClicked(id) {
    setPopupName('delete');
    setVisible(true);
    setSelectedId(id);
  }
  const onRemove = () => {
    const newList = list.filter((item) => item.id !== selectedId);
    setList(newList);
    togglePopup();
  };
  function editClicked(item) {
    setSelectedItem({ ...item });
    setPopupName('edit');
    setVisible(true);
  }
  return (
    <div>
      <Form onSave={handleSaveForm} />
      <List
        removeClicked={removeClicked}
        list={list}
        editClicked={editClicked}
      />
      {visible && (
        <FormPopup
          popupName={popupName}
          onRemove={onRemove}
          togglePopup={togglePopup}
          name={selectedItem?.name}
          priority={selectedItem?.priority}
          onEdit={handleEdit}
        />
      )}
    </div>
  );
}
