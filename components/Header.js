import Link from "next/link";
import styles from "../styles/Header.module.css";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
        
          <a>
            <Image src="/images/heart-attack.png" alt="" width="32" height="32" />Sikkim Blood

         
          </a>
        </Link>
      </div>
      <div className={styles.help}>
        <div className={styles.callButton}>
          <Image src="/images/telephone.png" alt="" width="32" height="25" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>HelpLine</div>
          <div className={styles.text}>0092-84985-95094</div>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/requests">
              <a>Active Requirements</a>
            </Link>
          </li>
          <li>
            <Link href="/camps">
              <a>Blood Donation Camps</a>
            </Link>
          </li>
          <li>
            <Link href="/requests/add">
              <a>Put a Request</a>
            </Link>
          </li>
          <li>
          
            <Link href="/account/profile">
              <a>
              < FaUserCircle className={styles.ico}/>
              </a>
            
             
            
            </Link>
          </li>
          <li>
            <button
              onClick={() => logout()}
              className="btn-secondary btn-icon"
              id="main"
            >
              <FaSignOutAlt></FaSignOutAlt>Sign Out
            </button>
          </li>
          <li>
            <Link href="/account/login">
              <a className="btn-secondary btn-icon" id="main">
                <FaSignInAlt />
                Sign In
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
