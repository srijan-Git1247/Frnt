import styles from "../styles/honeycomb.module.css";
import {MdOutlinePregnantWoman} from "react-icons/Md"
import {BsSuitHeart} from "react-icons/Bs"
import {GiChestnutLeaf,GiWeightScale, GiMedicalPackAlt, GiSyringe,GiFly,GiMedicines,GiChocolateBar} from "react-icons/Gi"


export default function Eligibility() {
  return (
    <div>
        
        <div className={styles.outer}>
        <h1>Donor Eligibility</h1>
    <ul className={styles.honeycomb}>
      
    <li className={styles.honeycombcell } >
      
       
      
        <div className={styles.honeycombcell_title} datahover="One should be between the age of 18 and 65 in order to donate blood"><p size={32}>18+</p></div>
    </li>
   <li className={styles.honeycombcell}>
       
        <div className={styles.honeycombcell_title } datahover="Donor shouldn't weigh less than 45 kgs"><p><GiWeightScale size={32}/></p></div>
    </li>
    <li className={styles.honeycombcell} >
       
        <div className={styles.honeycombcell_title} datahover="Should not have delivered 1 year ago and stopped lactation"><p ><MdOutlinePregnantWoman size={32}/></p></div>
    </li>
    <li className={styles.honeycombcell}  >
       
        <div className={styles.honeycombcell_title} datahover="Shouldn't be treated for malaria before 3 weeks or 3 years"><p><GiFly size={32}/></p></div>
    </li>
    <li className={styles.honeycombcell} >
       
        <div className={styles.honeycombcell_title} datahover="Should not have any heart diseases"><p><BsSuitHeart size={32}/></p></div>
    </li>
    <li className={styles.honeycombcell} >
       
        <div className={styles.honeycombcell_title} datahover="Say No to Drugs if you're a donor"><p><GiChestnutLeaf size={32}/></p></div>
    </li>
    <li className={styles.honeycombcell}>
       
        <div className={styles.honeycombcell_title} datahover="The systolic and diastolic blood pressures are within normal limits"><p><GiMedicalPackAlt size={32}/></p></div>
    </li>
    <li className={styles.honeycombcell} >
       
        <div className={styles.honeycombcell_title} datahover="Under medication not allowed"><p><GiMedicines size={32}/></p></div>
    </li>
    
    <li className={styles.honeycombcell} >
       
        <div className={styles.honeycombcell_title} datahover="Immunized and Vaccinated people should not be prohibited"><p><GiSyringe size={32}/></p></div>
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
    </div>
  )
}
