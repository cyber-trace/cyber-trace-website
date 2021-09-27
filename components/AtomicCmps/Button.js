const Button = ({ label }) => {
  return (
    <button className="bg-red-600 text-white rounded-lg py-3 px-10">
      <span>{label}</span>
    </button>
  );
};

export default Button;
