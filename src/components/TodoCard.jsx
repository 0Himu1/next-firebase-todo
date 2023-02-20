import React from 'react';
import {} from 'react-icons';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { FaCheck, FaPencilAlt } from 'react-icons/fa';

export default function TodoCard({
  todo,
  edit,
  handeleAddEdit,
  index,
  editedValue,
  setEditedValue,
  handelEditTodo,
  handelDelete,
}) {
  return (
    <div className="p-2 border border-white flex items-stretch w-full max-w-sm">
      {!(edit === index) ? (
        <p className="flex-1">{todo}</p>
      ) : (
        <input
          type="text"
          className="bg-inherit text-white outline-none flex-1"
          value={editedValue}
          onChange={(e) => setEditedValue(e.target.value)}
        />
      )}
      <div className="flex items-center text-lg font-bold">
        {!(edit === index) ? (
          <FaPencilAlt
            onClick={() => handeleAddEdit(index)}
            className="mr-2 cursor-pointer duration-300 hover:rotate-45"
          />
        ) : (
          <FaCheck
            onClick={() => handelEditTodo()}
            className="cursor-pointer duration-300 hover:scale-125 mr-2"
          />
        )}

        <RiDeleteBin6Fill
          className="cursor-pointer duration-300 hover:scale-125"
          onClick={() => handelDelete(index)}
        />
      </div>
    </div>
  );
}
