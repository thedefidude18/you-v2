import { getEllipsisTxt } from "@/utils";
import { chainLogos, contriTokenLogosByAddress, contriTokens, tokenDecimals, txBaseLink } from "@/utils/constant";
import { formatUnits } from "viem";
import { useAccount } from "wagmi";

const DonationRow = ({ donation }) => {
  const { chainId } = useAccount();
  return (
    <tr className=' row-auto '>
      <td>
        <div className="round-info margin-r-2">
          <img src={donation.project.coverURL} alt="Round Icon" className="round-icon" />
          <div>
            <div className="round-text">{donation.project.title}</div>
            <div className="round-time">{Math.ceil((Math.floor((new Date()).getTime() / 1000) - donation.time) / 86400)} Days Ago</div>
          </div>
        </div>
      </td>
      <td className="flex flex-row gap-4">{formatUnits(donation.amount, tokenDecimals[chainId][donation.token])} <img className="round-icon" src={contriTokenLogosByAddress[chainId][donation.token]}/></td>
      <td>
        <div className="transaction-link">
          <img src={chainLogos[chainId]} alt="Round Icon" className="round-icon" />
          <a href={`${txBaseLink[chainId]}${donation.txHash}`} target="_new">{getEllipsisTxt(donation.txHash, 10)}</a>
        </div>
      </td>
    </tr>
  );
};

export default DonationRow;
