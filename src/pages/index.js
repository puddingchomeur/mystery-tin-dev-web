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
      <div className="p-8 md:mx-auto md:text-center md:py-24 md:grid grid-cols-2 md:gap-8 md:w-1/2 md:items-center">
          <div className="text-left">
              <p className="text-5xl font-cubano">LEARN GAMEDEV</p>
              <p className="text-2xl text-gray-300 font-sofiapro mt-2">Mystery Tin is a <b className='text-white'>fast</b> & <b className='text-white'>fun</b> way to level up your gamedev skills.</p>
          </div>
          <div className="">
              <iframe width="420" height="230" src="https://www.youtube.com/embed/PzUO9fHIryg"></iframe>
          </div>
      </div>
    </header>
  );
}

function LinkCard({name, desc, url}) {
  return (
    <div className='flex flex-col w-full'>
      <Link
        className="button button--secondary button--lg"
        to={url}>
        {name}
      </Link>
      <p className='mt-2'>{desc}</p>
    </div>
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
        <div className="m-auto sm:flex md:w-1/2 md:space-x-8 xs:ml-8 xs:mr-8 mt-8 mb-8 content-center">
          <LinkCard name="Docs" desc="Litteral supplements to all content" url="/docs/start"/>
          <LinkCard name="Youtube" desc="Level up your brain"/>
          <LinkCard name="Github" desc="Access scripts and artefacts"/>
        </div>
        

      </main>
    </Layout>
  );
}
