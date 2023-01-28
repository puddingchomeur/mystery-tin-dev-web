import React from "react";
import Link from '@docusaurus/Link';

export default function Thumbnail({name, imgFile, link}) {
    return (
      <div className="w-1/4">
        <Link
            className=""
            to={link}>
            <div className="object-fill flex-col items-center p-2 bg-neutral-900">
                <img src={`/img/${imgFile}`} width="200"/>
                <p className="">{name}</p>
            </div>
        </Link>
        
      </div>
    );
  }