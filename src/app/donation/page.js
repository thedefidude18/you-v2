import React from 'react'
import '../../styles/styles.css';
import SummaryCard from '@/components/Donation/SummaryCard';
import DonationTable from '@/components/Donation/DonationTable';
import Banner from '@/components/Banner/Banner';
const page = () => {
    const donations = [
        { round: 'GAMEION', donations: '25.43532 ARB / $356', transactionInfo: '0xXDGET46RG37FD...', voted: false },
        { round: 'GAMEION', donations: '25.43532 ARB / $356', transactionInfo: '0xXDGET46RG37FD...', voted: true },
        { round: 'GAMEION', donations: '25.43532 ARB / $356', transactionInfo: '0xXDGET46RG37FD...', voted: false },
      ];
  return (
    <div>
         <Banner
       text="Check Out Your <br/> Contributed projects "
        image="/svgs/proj/BannerSvg.svg"
      />
      <div className="summary-cards">
        <SummaryCard title="Total Donations" value="$50" />
        <SummaryCard title="Total Donations" value="7" />
        <SummaryCard title="Projects Funded" value="7" />
      </div>
      <DonationTable donations={donations} />
    </div>
  )
}

export default page
