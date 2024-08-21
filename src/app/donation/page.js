"use client";
import React, { useEffect, useState } from 'react';
import '../../styles/styles.css';
import SummaryCard from '@/components/Donation/SummaryCard';
import DonationTable from '@/components/Donation/DonationTable';
import Banner from '@/components/Banner/Banner';
import DonationRow from '@/components/Donation/DonationRow';
import { useAccount } from 'wagmi';
import { getDonations } from '@/utils';

const Page = () => {

  const { chainId, address } = useAccount();
  const [donation, setDonation] = useState([]);
  // const donations = [
  //   { round: 'GAMEION', donations: '25.43532 ARB / $356', transactionInfo: '0xXDGET46RG37FD...' },
  //   { round: 'GAMEION', donations: '25.43532 ARB / $356', transactionInfo: '0xXDGET46RG37FD...' },
  //   { round: 'GAMEION', donations: '25.43532 ARB / $356', transactionInfo: '0xXDGET46RG37FD...' },
  // ];

  const initDonations = async () => {
    const data = await getDonations(chainId, address);
    setDonation(data);
  }

  useEffect(() => {
    if (chainId) {
      initDonations();
    }
  }, [chainId])

  return (
    <div className="w-full overflow-x-hidden">
      <Banner
        text="Check Out Your <br/> Contributed projects "
        image="/svgs/proj/BannerSvg.svg"
      />
      <div className="grid sm:grid-cols-3 gap-4 w-full grid-cols-1 p-4">
        <SummaryCard title="Total Donations" value={+donation?.totalContribution / 10 ** 5} />
        <SummaryCard title="Total Donations" value={donation?.numOfDonation} />
        <SummaryCard title="Projects Funded" value={donation?.numOfProjects} />
      </div>

      <div className="p-4 w-[400px]  sm:w-full mx-auto">
        <div className="overflow-x-auto">
          <table className="table border min-w-full">
            <thead>
              <tr>
                <th>Projects</th>
                <th>Donations</th>
                <th>Transaction Information</th>
              </tr>
            </thead>
            <tbody>
              { donation?.contributions?.map((donation, index) => (
                <DonationRow key={index} donation={donation} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Page;
