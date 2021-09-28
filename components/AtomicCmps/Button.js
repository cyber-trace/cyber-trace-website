const Button = ({ label, action }) => {
  return (
    <button
      onClick={() => action()}
      className="bg-accentColor text-white rounded-md py-2 px-6"
    >
      <span>{label}</span>
    </button>
  );
};

export default Button;
