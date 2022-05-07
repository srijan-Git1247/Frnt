import Layout from "../components/Layout"
import Link from "next/link"
import Eligibility from "../components/Eligibility";
export default function HomePage({events}) {
  return (
    <Layout>
     <h1>Emergency Requests</h1>
      
      <div>
      
        <Link href="/requests">
          <a className="btn-secondary">View All Requests</a>
        </Link>
    
      </div>
      
      
      <Eligibility/>

    </Layout>
  )
}
/*
export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/events?_sort=date:ASC&_limit=5`);
   const events = await res.json();
 
   return {
     props: { events },
     revalidate: 1,


   };*/






 
