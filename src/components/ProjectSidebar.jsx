import Button from './Button';

export default function ProjectSidebar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-lg shadow-lg">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button
          onClick={onStartAddProject}
          className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          + Add Project
        </Button>
      </div>
      <ul className="mt-8 space-y-2">
        {projects.map((project) => {
          let highlightCssClass =
            'w-full text-left px-4 py-2 rounded-md transition-colors duration-200';

          if (project.id === selectedProjectId) {
            highlightCssClass += ' bg-stone-800 text-stone-200';
          } else {
            highlightCssClass +=
              ' text-stone-400 hover:text-stone-200 hover:bg-stone-800';
          }

          return (
            <li key={project.id}>
              <button
                className={highlightCssClass}
                onClick={() => onSelectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
