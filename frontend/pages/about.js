import React from 'react'
import Featured from '../components/Featured'
import { sanityClient } from "../lib/sanity.server";


const about = ({sections}) => {

  return (
    <>
    <h1 className='text-center mt-20 text-indigo-600 text-3xl font-bold lg:text-5xl'>About Us</h1>
      <Featured sections={sections} />
    </>
  )
};


export const getStaticProps = async () => {
  const query = '*[_type == "about"]';
  const sections = await sanityClient.fetch(query);

  return {
    props: { sections }
  }
};


export default about;
