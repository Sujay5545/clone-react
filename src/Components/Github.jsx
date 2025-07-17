import { useEffect, useState } from 'react';
import { Link, useParams, useLoaderData } from 'react-router-dom';

export default function Github() {
    const data = useLoaderData();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white p-4">
            <div className="bg-gray-900 border border-gray-700 rounded-3xl shadow-xl p-6 w-full max-w-lg transition-all hover:scale-105 duration-300 hover:shadow-purple-500/50">
                <div
                    className="flex flex-col items-center text-center space-y-4"
                    onClick={() => {
                        window.open(`https://codeforces.com/profile/${data.handle}`, '_blank');
                    }}
                >
                    <img
                        src={data.titlePhoto}
                        alt="Profile"
                        className="w-32 h-32 rounded-full border-4 border-purple-500 shadow-md hover:shadow-purple-400/60 transition"
                    />
                    <h1 className="text-3xl font-bold tracking-wide text-purple-400">
                        {data.handle}
                    </h1>

                    {data.organization && (
                        <p className="text-sm text-gray-300 italic">
                            {data.organization}
                        </p>
                    )}

                    <p className="text-gray-400 text-sm">Friends: {data.friendOfCount}</p>
                    <p className="text-white text-lg">
                        Rank: <span className="capitalize text-green-400">{data.rank}</span> •
                        Max Rating: <span className="text-yellow-400">{data.maxRating}</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export const getLoaderData = async ({ params }) => {
    const response = await fetch(
        `https://codeforces.com/api/user.info?handles=${params.handleName}`
    );
    const data = await response.json();
    return data.result[0];
};
