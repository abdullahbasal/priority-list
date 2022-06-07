import '../Styles/Popup.css';
import React, { useState } from 'react';
const PRIORITY_ORDER_MAP = {
  Urgent: 1,
  Regular: 2,
  Trivial: 3,
};
const FORM_KEYS = {
  NAME: 'name',
  PRIORITY: 'priority',
};

const INITIAL_FORM = {
  [FORM_KEYS.NAME]: '',
  [FORM_KEYS.PRIORITY]: { name: 'Urgent', order: PRIORITY_ORDER_MAP.Urgent },
};

const Form = ({ onSave }) => {
  const [form, setForm] = useState(INITIAL_FORM);

  const handleChangeForm = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <>
      <b>Create New Job</b>
      <form onSubmit={handleSave}>
        <input
          required
          type="text"
          name="name"
          value={form[FORM_KEYS.NAME]}
          onChange={(e) => handleChangeForm(FORM_KEYS.NAME, e.target.value)}
          placeholder="Form Name"
          pattern="[a-zA-Z0-9]+"
          maxLength="255"
        />
        <label htmlFor="job Priority">Job Priority</label>
        <select
          name="Priority"
          id="Priority"
          onChange={(e) =>
            handleChangeForm(FORM_KEYS.PRIORITY, {
              name: e.target.value,
              order: PRIORITY_ORDER_MAP[e.target.value],
            })
          }>
          <option defaultValue="Urgent">Urgent</option>
          <option value="Regular">Regular</option>
          <option value="Trivial">Trivial</option>
        </select>

        <input type="submit" value="Save" />
      </form>
    </>
  );
};

export default Form;
