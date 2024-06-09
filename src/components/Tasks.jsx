import NewTask from './NewTask';

export default function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className="text-stone-800 my-4">
          This project does not have any tasks yet.
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="mt-4">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between items-center py-2 border-b border-stone-300"
            >
              <span className="text-stone-700">{task.text}</span>
              <button
                className="px-2 py-1 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                onClick={() => onDelete(task.id)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
