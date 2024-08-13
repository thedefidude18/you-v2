const SummaryCard = ({ title, value }) => {
    return (
      <div className="summary-card shadow-xl">
        <h2>{value}</h2>
        <p>{title}</p>
      </div>
    );
  };
  
  export default SummaryCard;
  