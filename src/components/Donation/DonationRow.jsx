



const DonationRow = ({ round, donations, transactionInfo, voted }) => {
  return (
    <tr className=' row-auto '>
      <td>
        <div className="round-info margin-r-2">
          <img src="/token.png" alt="Round Icon" className="round-icon" />
          <div>
            <div className="round-text">{round}</div>
            <div className="round-time">2 Weeks ago</div>
          </div>
        </div>
      </td>
      <td className=""><p className="ml-4">{donations}</p></td>
      <td>
        <div className="transaction-link">
          
        <img src="/etherium.png" alt="Round Icon" className="round-icon" />
          <a href="#">{transactionInfo}</a>
        </div>
      </td>
      <td>
        <button className={`vote-btn ${voted ? 'disabled' : ''}`} disabled={voted}>
          {voted ? 'Voted' : 'Vote now'}
        </button>
      </td>
    </tr>
  );
};

export default DonationRow;
