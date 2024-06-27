"use client";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FaqItem = ({ ques, ans }) => {
    const [vis, setVis] = useState(false);

    return (
        <>
            <div className="flex flex-col cursor-pointer bg-[#101010] mt-2 rounded-lg p-4 border-white py-7" onClick={() => setVis(!vis)}>
                <div className="flex justify-between items-center">
                    <span className="font-dmmono text-base text-white font-lato ">{ques}</span>
                    <i className="text-white">
                        {vis ? <FaChevronUp /> : <FaChevronDown />}
                    </i>
                </div>
                {vis && (
                    <div className="mt-3 font-dmmono text-sm text-gray-300 font-lato">
                        {ans.split('\n').map((line, ind) => (
                            <React.Fragment key={ind}>
                                {line} <br />
                            </React.Fragment>
                        ))}
                    </div>
                )}
                {/* <div className="w-full h-0 bg-gradient-to-r to-soft-pink from-soft-cyan"></div> */}
            </div>
        </>
    );
};

export default FaqItem;
