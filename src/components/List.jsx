import React, { useState } from 'react';
import Delete from '../assets/delete.png';
import Edit from '../assets/edit.png';
import '../App.css';
import PriorityText from './PriorityText';
export default function List({ removeClicked, editClicked, list }) {
  const [jobNameValue, setjobNameValue] = useState('');
  const [priorityValue, setPriorityValue] = useState('');

  const getFilteredItems = () => {
    if (jobNameValue) {
      return list.filter((item) =>
        item.name.toLowerCase().includes(jobNameValue.toLowerCase())
      );
    } else if (priorityValue) {
      return list.filter((item) =>
        item.priority.name.toLowerCase().includes(priorityValue.toLowerCase())
      );
    }
    return list;
  };
  return (
    <>
      <div className="col table-search-area">
        <div className="row m-2">
          <div className="col-7 job-name-search">
            <input
              type="text"
              className="icon-rtl"
              placeholder="Search Job Name"
              onChange={(e) => setjobNameValue(e.target.value)}
            />
          </div>
          <div className="col-5 priority-search">
            <input
              type="text"
              className="icon-rtl"
              placeholder="Priority (all)"
              onChange={(e) => setPriorityValue(e.target.value)}
            />
          </div>
        </div>
      </div>
      <table id="toDoTable">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Job Name</th>
            <th scope="col">Priority</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {getFilteredItems()
            .sort((a, b) => a.priority.order - b.priority.order)
            .map((item, i) => (
              <tr key={i}>
                <td scope="row" width="80px" style={{ textAlign: 'center' }}>
                  {i + 1}
                </td>
                <td width="600px" style={{ maxWidth: '600px' }}>
                  {item.name}
                </td>
                <td width="100px">
                  <PriorityText priority={item.priority.name} />
                </td>
                <td width="300px" style={{ textAlign: 'center' }}>
                  <button
                    className="table-button edit-button"
                    onClick={() => editClicked(item)}>
                    <img src={Edit} />
                  </button>

                  <button
                    className="table-button thrash-button"
                    type="button"
                    onClick={() => removeClicked(item.id)}>
                    <img src={Delete} />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
