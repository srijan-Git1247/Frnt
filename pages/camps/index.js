import React from "react";
import Layout from "../../components/Layout";

import Link from "next/link";

import BloodCamps from "../../components/BloodCamps";
const PER_PAGE=4;

export default function CampsPage({ events,page,total}) {
    



  //const lastPage=Math.ceil(total/PER_PAGE);
  
  return (
    <Layout>
      
      <h1>Upcoming Blood Donation Camps</h1>
    
     
      <div><br></br><Link href="/">&lt;Home</Link></div>
      
      
      
      
    </Layout>
  );
}
/*
export async function getServerSideProps({query:{page=1}}) {


  const start=+page===1?0:(+page-1)*PER_PAGE
//fetching count
const totalRes = await fetch(`${API_URL}/blood-donation-camps/count`);
  

  const total = await totalRes.json();


  //fetching requests
  const requestRes = await fetch(`${API_URL}/blood-donation-camps?_sort=date:ASC&_limit=${PER_PAGE}&_start=${start}`);
  
  
  const events = await requestRes.json();

  return {
    props: { events,page:+page,total},
  };
}*/