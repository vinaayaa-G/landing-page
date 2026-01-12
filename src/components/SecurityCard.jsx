const SecurityCard = ({ icon, title, desc }) => {
  return (
    <div className="security-card">
      <div className="security-icon">{icon}</div>

      <div className="security-text">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default SecurityCard;
