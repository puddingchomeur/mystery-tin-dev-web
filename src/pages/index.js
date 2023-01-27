import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className="bg-[url('/img/Banner_01.png')]">
      <div className="container mx-auto text-center py-24 grid grid-cols-2 gap-8 w-1/2 font-mono items-center">
          <div className="text-left">
              <p className="text-5xl font-cubano">LEARN GAMEDEV</p>
              <p className="text-2xl text-gray-300 font-sofiapro">Mystery Tin is a fast & amusing way to level up your gamedev skills.</p>
          </div>
          <div className="">
              <iframe width="420" height="230" src="https://www.youtube.com/embed/PzUO9fHIryg"></iframe>
          </div>
      </div>
    </header>
  );
}


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <div className="w-1/2 m-auto content-center">
          <button className='bg-gray-200 px-4 py-2 mt-8 text-black rounded-md text-xl self-center'>Documentation</button>
        </div>
        

      </main>
    </Layout>
  );
}
