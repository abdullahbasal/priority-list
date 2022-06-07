import '../Styles/Popup.css';
import Xred from '../assets/Xred.png';
import React, { useEffect, useState } from 'react';
const PRIORITY_ORDER_MAP = {
  Urgent: 1,
  Regular: 2,
  Trivial: 3,
};
const Popup = ({
  popupName,
  onRemove,
  togglePopup,
  name,
  priority,
  onEdit,
}) => {
  const [selectedPriority, setSelectedPriority] = useState(priority);
  useEffect(() => {
    if (priority) {
      setSelectedPriority(priority);
    }
  }, [priority]);

  return (
    <div className="popup-box">
      <div className="box">
        <>
          {popupName === 'delete' ? (
            <>
              <img src={Xred} alt="" srcset="" />
              <h4>Are you sure you want to delete it?</h4>
              <button onClick={() => togglePopup()}>Cancel</button>
              <button onClick={() => onRemove()}>Approve</button>
            </>
          ) : (
            <>
              Job Edit
              <input type="text" value={name} disabled />
              <select
                required
                value={selectedPriority.name}
                onChange={(e) =>
                  setSelectedPriority({
                    name: e.target.value,
                    order: PRIORITY_ORDER_MAP[e.target.value],
                  })
                }>
                <option value="Urgent">Urgent</option>
                <option value="Regular">Regular</option>
                <option value="Trivial">Trivial</option>
              </select>
              <button onClick={() => togglePopup()}>Cancel</button>
              <button onClick={() => onEdit(selectedPriority)}>Save</button>
            </>
          )}
        </>
      </div>
    </div>
  );
};

export default Popup;
