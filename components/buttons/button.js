export default function Button({
  children,
  color,
  textColor,
  margin,
  width,
  hover,
}) {
  return (
    <button className="rounded-lg bg-orange-500 text-white p-2 px-5 font-semibold">
      {children}
    </button>
  );
}
