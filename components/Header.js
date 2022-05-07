import Link from "next/link";
import styles from "../styles/Header.module.css";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <a>
            <Image
              src="/images/heart-attack.png"
              alt=""
              width="32"
              height="32"
            />
            Sikkim
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
        <ul
          className={
            isOpen === false
              ? styles.navmenu
              : styles.navmenu + " " + styles.active
          }
        >
          <li>
            <Link href="/about">
              <a
                className={
                  isOpen === false
                    ? styles.navlink
                    : styles.navlink + " " + styles.active
                }
                onClick={openMenu}
              >
                About
              </a>
            </Link>
          </li>
          <li>
            <Link href="/requests">
              <a
                className={
                  isOpen === false
                    ? styles.navlink
                    : styles.navlink + " " + styles.active
                }
                onClick={openMenu}
              >
                Active Requirements
              </a>
            </Link>
          </li>
          <li>
            <Link href="/camps">
              <a
                className={
                  isOpen === false
                    ? styles.navlink
                    : styles.navlink + " " + styles.active
                }
                onClick={openMenu}
              >
                Blood Donation Camps
              </a>
            </Link>
          </li>
          <li>
            <Link href="/requests/add">
              <a
                className={
                  isOpen === false
                    ? styles.navlink
                    : styles.navlink + " " + styles.active
                }
                onClick={openMenu}
              >
                Put a Request
              </a>
            </Link>
          </li>
          <li>
            <Link href="/account/profile">
              <a
                className={
                  isOpen === false
                    ? styles.navlink
                    : styles.navlink + " " + styles.active
                }
                onClick={openMenu}
              >
                <FaUserCircle className={styles.ico} />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/requests/add">
              <button
                className={
                  isOpen === false
                    ? "btn-secondary" + " " + "btn-icon"
                    : styles.navlink +
                      " " +
                      styles.active +
                      " " +
                      "btn-secondary " +
                      " " +
                      "btn-icon"
                }
                onClick={openMenu}
                id="main"
              >
                <FaSignOutAlt></FaSignOutAlt>Sign Out
              </button>
            </Link>
          </li>
          <li>
            <Link href="/account/login">
              <button
                className={
                  isOpen === false
                    ? "btn-secondary" + " " + "btn-icon"
                    : styles.navlink +
                      " " +
                      styles.active +
                      " " +
                      "btn-secondary " +
                      " " +
                      "btn-icon"
                }
                onClick={openMenu}
                id="main"
              >
                <FaSignInAlt />
                Sign In
              </button>
            </Link>
          </li>
        </ul>
        <button
          className={
            isOpen === false
              ? styles.hamburger
              : styles.hamburger + " " + styles.active
          }
          onClick={openMenu}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      </nav>
    </header>
  );
}
