import React, { useState, useEffect } from 'react';

export default function PriorityText({ priority }) {
  const [first, setfirst] = useState('');

  useEffect(() => {
    if (priority === 'Urgent') {
      return setfirst('#E83D6D');
    } else if (priority === 'Regular') {
      return setfirst('#F1A824');
    } else {
      return setfirst('#2277E0');
    }
  }, [priority]);

  return (
    <>
      <div className="priority-container" style={{ backgroundColor: first }}>
        {priority}
      </div>
    </>
  );
}
