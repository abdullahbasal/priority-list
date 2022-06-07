import React, { useState } from 'react';
import Delete from '../assets/delete.png';
import Edit from '../assets/edit.png';
import '../App.css';
export default function List({ removeClicked, editClicked, list }) {
  const [searchValue, setSearchValue] = useState('');
  const getFilteredItems = () => {
    if (searchValue) {
      return list.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
      );
    }
    return list;
  };
  return (
    <div className="container">
      <input
        type="text"
        className="icon-rtl"
        placeholder="Search Job Name"
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <input
        type="text"
        className="icon-rtl"
        placeholder="Priority (all)"
        onChange={(e) => setSearchValue(e.target.value)}
      />
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
                <td scope="row">{i + 1}</td>
                <td>{item.name}</td>
                <td>{item.priority.name}</td>
                <td>
                  <button onClick={() => editClicked(item)}>
                    <img src={Edit} />
                  </button>

                  <button type="button" onClick={() => removeClicked(item.id)}>
                    <img src={Delete} />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
