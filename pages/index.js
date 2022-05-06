import Layout from "../components/Layout"
import Link from "next/link"
import Image from "next/image"
import styles from "../styles/honeycomb.module.css"
export default function HomePage({events}) {
  return (
    <Layout>
     <h1>Emergency Requests</h1>
      
      <div>
      
        <Link href="/requests">
          <a className="btn-secondary">View All Requests</a>
        </Link>
    
      </div>
      <div className={styles.outer}>
    <ul className={styles.honeycomb}>
    <li className={styles.honeycombcell } datahover="One should be between the age of 18 and 65 in order to donate blood">
       
        <div className={styles.honeycombcell_title}>18+</div>
    </li>
   <li className={styles.honeycombcell}  datahover="">
       
        <div className={styles.honeycombcell_title}>Web Design</div>
    </li>
    <li className={styles.honeycombcell}  datahover="">
       
        <div className={styles.honeycombcell_title}>Web Design</div>
    </li>
    <li className={styles.honeycombcell}  datahover="">
       
        <div className={styles.honeycombcell_title}>Web Design</div>
    </li>
    <li className={styles.honeycombcell}  datahover="">
       
        <div className={styles.honeycombcell_title}>Web Design</div>
    </li>
    <li className={styles.honeycombcell}  datahover="">
       
        <div className={styles.honeycombcell_title}>Web Design</div>
    </li>
    <li className={styles.honeycombcell} datahover="">
       
        <div className={styles.honeycombcell_title}>Web Design</div>
    </li>
    <li className={styles.honeycombcell}  datahover="">
       
        <div className={styles.honeycombcell_title}>Web Design</div>
    </li>
    
    <li className={styles.honeycombcell}  datahover="">
       
        <div className={styles.honeycombcell_title}>Web Design</div>
    </li>
   
    <li className={styles["honeycombcell"]+""+styles["honeycomb_Hidden"]}>


    </li>
    <li>
      
    </li>

</ul>
<div>

  <br></br>
  <br></br>
  <br></br>
</div>
</div>












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






 
