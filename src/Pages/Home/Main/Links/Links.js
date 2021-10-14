import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
    return (
        <div className="text-center d-flex justify-content-center mt-5">
            <NavLink
                className="mx-2 text-decoration-none text-black fw-bold text-capitalize"
                activeStyle={{
                    color: "red",
                    borderBottom: '1px solid red'
                  }}
                to="/breakfast">
                breakfast
            </NavLink>
            <NavLink
                className="mx-2 text-decoration-none text-black fw-bold text-capitalize"
                activeStyle={{
                    color: "red",
                    borderBottom: '1px solid red'
                  }}
                to="/lunch">
                lunch
            </NavLink>
            <NavLink
                className="mx-2 text-decoration-none text-black fw-bold text-capitalize"
                activeStyle={{
                    color: 'red',
                    borderBottom: '1px solid red'
                  }}
                to="/dinner">
                dinner
            </NavLink>
        </div>
    );
};

export default NavLinks;