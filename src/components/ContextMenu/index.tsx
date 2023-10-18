import "./styles.css";

const ContextMenu = ({ visible, x, y, options, onClose }) => {
  if (!visible) return null;

  const style = {
    position: "absolute",
    top: y,
    left: x,
    zIndex: 100,
    backgroundColor: "white",
    border: "1px solid #ccc",
    boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)"
  };

  const handleOptionClick = (e, option) => {
    e.preventDefault();
    e.stopPropagation();
    option.handler && option.handler(option.label);
    onClose();
  };

  return (
    <div className="context-menu" style={style}>
      {options.map((option, index) => (
        <div
          className="context-menu-item"
          key={index}
          onClick={(e) => handleOptionClick(e, option)}
        >
          {option.label}
        </div>
      ))}
    </div>
  );
};

export default ContextMenu;
