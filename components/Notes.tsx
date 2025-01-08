"use client";
import React, { useEffect } from 'react'
import { useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

const Notes = () => {
    const [data, setData] = useState<{ content: string }[]>([]);

    useEffect(() => {
        const existingDataString = localStorage.getItem("myData");
        if (existingDataString) {
            const existingData = JSON.parse(existingDataString);
            setData(existingData);
        }
    }, []);
    return (
        <div className='max-w-6xl mx-auto px-5'>
            <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 750: 2, 1024: 3 }}>
                <Masonry gutter='20px'>
                    {data.map((item: { content: string }, idx: number) => (
                        < div key={idx}>
                            <div className="px-4 py-3 font-bold text-slate-">
                                Note - {idx + 1}
                            </div>
                            <div
                                className="text-white whitespace-pre-line border border-slate-700 px-6 py-4 rounded-lg"
                                dangerouslySetInnerHTML={{ __html: item.content }} />
                        </div>
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </div >
    )
}

export default Notes