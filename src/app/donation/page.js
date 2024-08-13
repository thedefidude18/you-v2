"use client";
import React from 'react';
import '../../styles/styles.css';
import SummaryCard from '@/components/Donation/SummaryCard';
import DonationTable from '@/components/Donation/DonationTable';
import Banner from '@/components/Banner/Banner';
import DonationRow from '@/components/Donation/DonationRow';

const Page = () => {
  const donations = [
    { round: 'GAMEION', donations: '25.43532 ARB / $356', transactionInfo: '0xXDGET46RG37FD...', voted: false },
    { round: 'GAMEION', donations: '25.43532 ARB / $356', transactionInfo: '0xXDGET46RG37FD...', voted: true },
    { round: 'GAMEION', donations: '25.43532 ARB / $356', transactionInfo: '0xXDGET46RG37FD...', voted: false },
  ];

  return (
    <div className="w-full overflow-x-hidden">
      <Banner
        text="Check Out Your <br/> Contributed projects "
        image="/svgs/proj/BannerSvg.svg"
      />
      <div className="grid sm:grid-cols-3 gap-4 w-full grid-cols-1 p-4">
        <SummaryCard title="Total Donations" value="$50" />
        <SummaryCard title="Total Donations" value="7" />
        <SummaryCard title="Projects Funded" value="7" />
      </div>

      <div className="p-4 w-[400px]  sm:w-full mx-auto">
        <div className="overflow-x-auto">
          <table className="table border min-w-full">
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
        </div>
      </div>
    </div>
  );
};

export default Page;
