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
              <div className="row m-2 justify-content-center m-2">
                <img src={Xred} style={{ width: '70px', height: '50px' }} />
              </div>
              <div className="row m-2" style={{ textAlign: 'center' }}>
                <h6>Are you sure you want to delete it?</h6>
              </div>
              <div className="row justify-content-center m-2">
                <div className="col" style={{ textAlign: 'center' }}>
                  <button
                    className="button gray-button"
                    onClick={() => togglePopup()}>
                    Cancel
                  </button>
                </div>
                <div className="col" style={{ textAlign: 'center' }}>
                  <button
                    className="button red-button"
                    onClick={() => onRemove()}>
                    Approve
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="row m-2">
                Job Name
                <input type="text" value={name} disabled />
              </div>
              <div className="row m-2">
                Job Priority
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
              </div>
              <div className="row justify-content-center m-2">
                <div className="col" style={{ textAlign: 'center' }}>
                  <button
                    className="button gray-button"
                    onClick={() => togglePopup()}>
                    Cancel
                  </button>
                </div>
                <div className="col" style={{ textAlign: 'center' }}>
                  <button
                    className="button red-button"
                    onClick={() => onEdit(selectedPriority)}>
                    Save
                  </button>
                </div>
              </div>
            </>
          )}
        </>
      </div>
    </div>
  );
};

export default Popup;
