
import Layout from "../../components/Layout"
import Link from "next/link"
import Search from "../../components/Search"
import RequestItem from "../../components/RequestItem";

export default function RequestsPage({ events,page,total}) {



   // const lastPage=Math.ceil(total/PER_PAGE);
  return (
    <Layout>
        <h1>
            Active Requirements
        </h1>
        <Search/>


        <div><br></br><Link href="/camps">&lt;Donate Via a Blood Donation Camp</Link></div>
      
      <div><br></br><Link href="/">&lt;Home</Link></div>


    </Layout>
  )
}/*
export async function getServerSideProps({query:{page=1}}) {


  const start=+page===1?0:(+page-1)*PER_PAGE
//fetching count
const totalRes = await fetch(`${API_URL}/events/count`);
  

  const total = await totalRes.json();


  //fetching requests
  const requestRes = await fetch(`${API_URL}/events?_sort=date:ASC&_limit=${PER_PAGE}&_start=${start}`);
  
  
  const events = await requestRes.json();

  return {
    props: { events,page:+page,total},
  };
}


*/
