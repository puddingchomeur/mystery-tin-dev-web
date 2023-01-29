import React from "react";
import Link from '@docusaurus/Link';

export default function Thumbnail({name, imgFile, link}) {
    return (
      <div>
        <div className="rounded-lg bg-neutral-900 pb-2 p-6">
          <div className="flex space-x-6">

            <div className="flex-col items-center content-center align-middle">
              <img src={`/img/${imgFile}`} width="300"/>
            </div>

            <div className="">
              <p className="text-2xl text-white mb-0">{name}</p>
              <p className="text-md text-gray-600 mb-16">🕔 2 min 📆 2023-01-29</p>
              <Link className="text-xl rounded-md bg-slate-200 text-gray-800 py-2 px-8 font-sofiapro">Watch on Youtube</Link>
              <Link className="text-xl rounded-md bg-slate-200 text-gray-800 py-2 px-8 font-sofiapro ml-2">Get on Github</Link>
            </div>

          </div>
          <br/>
          <div className="mt-6 mb-0 flex">
            <img src="/img/Profile_Picture_00.png" width="50" height="50"></img>
            <p className="ml-4">This tutorial is actually my first one ever, I hope you will like how the pagination is done, I'd love to hear your comments on the discord page!</p>
          
          
          </div>
        </div>
        <p className="text-2xl text-center mt-12"></p>

        <p className="text-6xl text-white mt-12">📍Start Here </p>
      </div>
      
    );
  }