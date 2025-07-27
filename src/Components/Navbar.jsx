/**
 *
 * Navbar Components
 *
 */

import { useRef, useEffect } from "react";

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef();
  const activeBox = useRef();

  const initActiveBox = (event = null) => {
    /**
     * Assign une Refference
     */
    event = lastActiveLink;

    activeBox.current.style.top = event.current.offsetTop + "px";
    activeBox.current.style.left = event.current.offsetLeft + "px";
    activeBox.current.style.width = event.current.offsetWidth + "px";
    activeBox.current.style.height = event.current.offsetHeight + "px";
  };

  useEffect(initActiveBox, []);

  /**
   *
   * RESET WINDOW
   */

  window.addEventListener("resize", initActiveBox);

  /**
   *
   * ACTIVE LINK
   */
  const activeCurrentLink = (e) => {
    lastActiveLink.current?.classList.remove("active");
    let target = e.currentTarget;
    target.classList.add("active");
    lastActiveLink.current = target;

    //   BOX ACTIVE

    initActiveBox(target);
  };

  const navItems = [
    {
      label: "Home",
      link: "#home",
      className: "nav-link active",
      ref: lastActiveLink,
    },
    {
      label: "About",
      link: "#about",
      className: "nav-link",
    },
    {
      label: "Work",
      link: "#work",
      className: "nav-link",
    },
    {
      label: "Reviews",
      link: "#reviews",
      className: "nav-link",
    },
    {
      label: "Contact",
      link: "#contact",
      className: "nav-link nav-link-hidden md:hidden",
    },
  ];

  return (
    <nav className={`navbar ${navOpen ? "active" : ""}`}>
      {navItems.map(({ label, link, className, ref }, key) => (
        <a
          href={link}
          className={className}
          ref={ref}
          key={key}
          onClick={activeCurrentLink}
        >
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

export default Navbar;
