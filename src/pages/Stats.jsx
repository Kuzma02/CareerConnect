import React from 'react'
import { MdPendingActions } from "react-icons/md";
import { StatsCard } from '../components';
import { MdCheckBox } from "react-icons/md";
import { MdBugReport } from "react-icons/md";


const Stats = () => {
  return (
    <div className='flex justify-center gap-x-20 py-5 border-b mb-10 max-lg:flex-col'>
      <StatsCard number="24" text="Pending applications">
        <MdPendingActions />
      </StatsCard>

      <StatsCard number="27" text="Interviews Scheduled">
        <MdCheckBox />
      </StatsCard>

      <StatsCard number="24" text="Jobs Declined">
        <MdBugReport />
      </StatsCard>
    </div>
  )
}

export default Stats