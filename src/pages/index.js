import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Translate, {translate} from '@docusaurus/Translate';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className="bg-[url('/img/Banner_01.png')]">
      
      <div className="w-full md:mx-auto sm:w-2/3 lg:1/2 lg:flex md:py-24 md:items-center">

          <div className="text-left p-8 md:p-0">
              <p className="text-5xl font-cubano"><Translate>LEARN GAMEDEV</Translate></p>
              <p className="text-2xl text-gray-300 font-sofiapro mt-2">
                <Translate>
                  Mystery Tin is a fast & fun way to level up your gamedev skills
                </Translate>
              </p>
          </div>

          <iframe className='w-full h-56 md:h-80'  src="https://www.youtube.com/embed/PzUO9fHIryg"></iframe>

      </div>

    </header>
  );
}


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Welcome Page">
      <HomepageHeader />
      <main>
        <div className="m-auto flex-1 md:flex md:w-1/2 md:space-x-8 content-center p-8">

          <div className='flex flex-col w-full'>
            <Link
              className="button button--secondary button--lg"
              to="/docs/start">
              Docs
            </Link>
            <p className='mt-2'><Translate>Litteral supplements to all content</Translate></p>
          </div>

          <div className='flex flex-col w-full'>
            <Link
              className="button button--secondary button--lg"
              to="">
              Youtube
            </Link>
            <p className='mt-2'><Translate>Level up your brain</Translate></p>
          </div>

          <div className='flex flex-col w-full'>
            <Link
              className="button button--secondary button--lg"
              to="">
              Github
            </Link>
            <p className='mt-2'><Translate>Access scripts and artefacts</Translate></p>
          </div>

        </div>
      </main>
    </Layout>
  );
}
