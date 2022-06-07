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
      <form onSubmit={handleSave}>
        <div className="row m-3">
          <b className="m-2" style={{ textAlign: 'center' }}>
            Create New Job
          </b>
          <div className="col-7 job-name-div">
            <input
              required
              type="text"
              name="name"
              value={form[FORM_KEYS.NAME]}
              onChange={(e) => handleChangeForm(FORM_KEYS.NAME, e.target.value)}
              placeholder="Job Name"
              pattern="[a-zA-Z0-9\s]+"
              maxLength="255"
            />
          </div>
          <div className="col-3 priority-div">
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
          </div>
          <div className="col create-button-div">
            <input
              type="submit"
              value="Create"
              className="create-button button"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
