export default function Button({ children, onClick, style, form, type }) {
  return (
    <button
      className={
        style
          ? style
          : " rounded-lg bg-orange-500 text-white p-2 px-5 font-semibold hover:bg-orange-300 transition duration-500"
      }
      onClick={onClick}
      type={type || "button"}
      form={form}
    >
      {children}
    </button>
  );
}
