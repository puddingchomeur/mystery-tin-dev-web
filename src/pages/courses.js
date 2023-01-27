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
    <header className="bg-[url('/img/Banner_01.png')] items-center content-center text-center p-20">
      <div className="container">
        <h1 className="hero__title font-cubano text-white">Courses</h1>
        <p className="hero__subtitle text-gray-300">Here you'll find anything you want to grow in the gamedev world</p>
        <div className="rounded-md mt-8">
          <Link
            className="button button--secondary button--lg"
            to="/docs/start">
            Notify Me!
          </Link>
        </div>
      </div>
    </header>
  );
}

function CourseCard({name, desc}){
    return(
        <div className="rounded-md bg-neutral-800 w-60 m-8 overflow-hidden">
            <img className='' src='img/realistic-tank.png' />
            <div class="p-6">
                <p className='text-xl font-cubano text-white'>{name}</p>
                <p className='text-md text-gray-300'>{desc}</p>
            </div>
        </div>
    );
}


export default function Courses() {
  return (
    <Layout
      title="hello"
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <div className={styles.centerTwoThird}>
        <div className={styles.courseHolder}>
            <CourseCard name="Realistic Tank" desc="Build a tank controller entirely in Unity"/>
            <CourseCard name="Realistic Tank" desc="Build a tank controller entirely in Unity"/>
            <CourseCard name="Realistic Tank" desc="Build a tank controller entirely in Unity"/>
            <CourseCard name="Realistic Tank" desc="Build a tank controller entirely in Unity"/>
            <CourseCard name="Realistic Tank" desc="Build a tank controller entirely in Unity"/>
            <CourseCard name="Realistic Tank" desc="Build a tank controller entirely in Unity"/>
            <CourseCard name="Realistic Tank" desc="Build a tank controller entirely in Unity"/>
            <CourseCard name="Realistic Tank" desc="Build a tank controller entirely in Unity"/>
        </div>
        </div>
        
      
    </Layout>
  );
}
