import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {}

const Header = (props: Props) => {
  return (
    <nav className="navbar row justify-content-center sticky-top">
      <div className="container">
        <div className="col-3 p-0">
          <div className="navbar-brand">
            <Link href="/" passHref>
              <div style={{ cursor: "pointer" }}>
                <Image
                  src="/images/bookit_logo.png"
                  alt="BookIT"
                  height={50}
                  width={150}
                />
              </div>
            </Link>
          </div>
        </div>

        <div className="col-3 mt-3 mt-md-0 text-center">
          <div className="ml-4 dropdown d-line">
            <a
              className="btn dropdown-toggle mr-4"
              id="dropDownMenuBtn"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <figure className="avatar avatar-nav">
                {/* <img
                  src={user.avatar && user.avatar.url}
                  alt={user && user.name}
                  className="rounded-circle"
                /> */}
              </figure>
              {/* <span>{user && user.name}</span> */}
            </a>
            <div className="dropdown-menu" aria-labelledby="dropDownMenuBtn">
              <Link href="/bookings/me">
                <a className="dropdown-item">My Bookings</a>
              </Link>
              <Link href="/me/update">
                <a className="dropdown-item">Profile</a>
              </Link>
              <Link href="/">
                <a
                  className="dropdown-item text-danger"
                  //   onClick={logoutHandler}
                >
                  Logout
                </a>
              </Link>
            </div>
          </div>

          <Link href="/login">
            <a className="btn btn-danger px-4 text-white login-header-btn float-right">
              Login
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
