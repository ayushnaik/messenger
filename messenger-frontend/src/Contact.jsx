import Avatar from "./Avatar.jsx";

export default function Contact({ id, username, onClick, selected, online }) {
  return (
    <div
      key={id}
      onClick={() => onClick(id)}
      className={
        "border-b border-gray-100 flex items-center rounded-s-2xl gap-2 cursor-pointer " +
        (selected
          ? "bg-blue-100 border-l-[7px] shadow-md shadow-blue-400 border-blue-700"
          : "")
      }
    >
      <div className="flex gap-2 py-2 pl-4 items-center">
        <Avatar online={online} username={username} userId={id} />
        <span className="text-gray-800">{username}</span>
      </div>
    </div>
  );
}
