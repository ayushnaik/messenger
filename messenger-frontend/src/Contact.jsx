import Avatar from "./Avatar.jsx";

export default function Contact({ id, username, onClick, selected, online }) {
  return (
    <div
      key={id}
      onClick={() => onClick(id)}
      className={
        "border-b border-gray-100 flex items-center rounded-s-xl gap-2 cursor-pointer " +
        (selected
          ? "bg-blue-100 border-l-4 shadow-md shadow-blue-400 border-blue-700"
          : "")
      }
    >
      {/* {selected && <div className="w-2 bg-blue-500 h-8 rounded-r-md"></div>} */}
      <div className="flex gap-2 py-2 pl-4 items-center">
        <Avatar online={online} username={username} userId={id} />
        <span className="text-gray-800">{username}</span>
      </div>
    </div>
  );
}
