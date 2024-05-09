import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData()

    return (
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">GitHub Followers: {data.followers}
        <img src={data.avatar_url} alt="Git Picture" width={300} />
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/shaptrshi')
    return response.json()
}
