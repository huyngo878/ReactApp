import Button from "./Button.jsx";

export default function ProjectSidebar({ onStartAddTask }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Task Reminder
      </h2>
      <div>
        <Button onClick={onStartAddTask}>+ Add Task</Button>
      </div>
      <ul></ul>
    </aside>
  );
}
