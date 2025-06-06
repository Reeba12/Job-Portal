import React from 'react';
import { JobCardProps } from '../../utils/interfaces/interface';

const JobCard: React.FC<JobCardProps> = (props) => {
    return (
        <div key={props.job.id}
            className="w-auto bg-white rounded-xl border border-[#E4E6EB] py-4 px-3 flex flex-col"
        >
            {props.job.promoted && <span className="text-xs font-bold text-[#000000] mb-3">Promoted</span>}
            <div className="flex items-center gap-2 mb-2">
                <img src="/team.svg" alt="Company Logo" width={35} height={28} />
                <div>
                    <div className="text-sm font-medium text-[#333333] leading-tight mb-1">{props.job.title}</div>
                    <div className="text-xs text-[#585D6E] leading-tight mb-1">{props.job.company}</div>
                </div>
            </div>
            <div className="flex items-center gap-1 text-[12px] text-[#585D6E] mb-1">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24"><path d="M12 12.75a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" stroke="#737A91" strokeWidth="1.5" /><path d="M19.5 10.5c0 7-7.5 10.5-7.5 10.5S4.5 17.5 4.5 10.5a7.5 7.5 0 1 1 15 0Z" stroke="#737A91" strokeWidth="1.5" /></svg>
                <span>{props.job.location}</span>
            </div>
            <div className="flex items-center text-[10px] text-[#585D6E] mb-3 gap-1">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" stroke="#737A91" strokeWidth="1.5" /><path d="M12 7.5v4.25l2.5 2.5" stroke="#737A91" strokeWidth="1.5" strokeLinecap="round" /></svg>
                <span>{props.job.time}</span>
                <span className="mx-1">|</span>
                <a href="#" className="text-custom-blue font-normal hover:underline">{props.job.applicants} applicants</a>
            </div>
            <div className="flex items-center justify-between">
                <button className="bg-custom-blue text-white text-[12px] font-thin rounded-lg py-2 px-8 hover:bg-blue-700 transition-colors" onClick={() => props.onApply(props.job.id.toString())}>Apply Now</button>
                <button className="self-center text-custom-gray hover:text-custom-blue">
                    <img src="/SaveVector.svg" alt="eye" width={15} height={15} />
                </button>
            </div>
        </div>
    );
};

export default JobCard;