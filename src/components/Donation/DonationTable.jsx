import DonationRow from './DonationRow';

const DonationTable = ({ donations }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Round</th>
          <th>Total Donations</th>
          <th>Transaction Information</th>
          <th>Voting options</th>
        </tr>
      </thead>
      <tbody>
        {donations.map((donation, index) => (
          <DonationRow key={index} {...donation} />
        ))}
      </tbody>
    </table>
  );
};

export default DonationTable;
