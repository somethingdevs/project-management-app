import { useState } from 'react';

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState('');
  const [isError, setIsError] = useState(false);

  const baseCssClass =
    'w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-stone-500';
  const errorCssClass =
    'border-red-500 bg-red-100 text-red-700 placeholder-red-700 focus:ring-red-500';

  function handleChange(event) {
    setEnteredTask(event.target.value);
    if (isError) {
      setIsError(false); // Reset error state on input change
    }
  }

  function handleClick() {
    if (enteredTask.trim() === '') {
      setIsError((prevState) => true);
      return;
    }
    onAdd(enteredTask);
    setEnteredTask('');
  }

  return (
    <div className="flex items-center gap-4 p-4 bg-gray-100 rounded-lg shadow-md">
      <input
        type="text"
        className={`${baseCssClass} ${isError ? errorCssClass : ''}`}
        onChange={handleChange}
        value={enteredTask}
        placeholder="Enter a new task"
      />
      <button
        className="px-4 py-2 bg-stone-700 text-white rounded-md hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-stone-500"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
}
