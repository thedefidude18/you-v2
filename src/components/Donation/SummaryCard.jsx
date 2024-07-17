const SummaryCard = ({ title, value }) => {
    return (
      <div className="summary-card">
        <h2>{value}</h2>
        <p>{title}</p>
      </div>
    );
  };
  
  export default SummaryCard;
  