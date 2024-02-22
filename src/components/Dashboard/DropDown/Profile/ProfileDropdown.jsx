import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import './profiledropdown.scss';
import userImg from '@images/user-img.jpg';
import { logoutUser } from '../../../../redux/auth/auth_slice';
import { useDispatch, useSelector } from 'react-redux';

const ProfileDropdown = () => {
    const [show, setShow] = useState(false);
    const toggleDropdown = () => {
        setShow(!show);
    };

    const dispatch = useDispatch();
    const { userInfo } = useSelector((state) => state.auth);
    const username = userInfo ? userInfo : '';
    console.log(username)
    const handleLogout = () => {   
        dispatch(logoutUser());
    }

    return (
        <Dropdown className="profile-dropdown " onToggle={toggleDropdown}>
            <Dropdown.Toggle id="profile-dropdown-toggle" className='p-0'>
                <img src={userImg} alt="user-img" />
                <span className='text-white'>Hello {username}</span>
                <FontAwesomeIcon className={show ? 'angle-up dropdown_icon' : ''} icon={faAngleDown} />
            </Dropdown.Toggle>
            <Dropdown.Menu show={show} id="profile-dropdown-menu">
                <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default ProfileDropdown;
