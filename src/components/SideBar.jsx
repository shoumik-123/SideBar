import React, { useState } from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import { FaBars, FaCheckCircle, FaHouseDamage, FaPen, FaRegTrashAlt, FaSearch } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import '../assets/css/sideBar.css';

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        icon: FaHouseDamage,
    },
    {
        path: '/create',
        name: 'Create',
        icon: FaPen,
    },
    {
        path: '/complete',
        name: 'Complete',
        icon: FaCheckCircle,
    },
    {
        path: '/cancel',
        name: 'Cancel',
        icon: FaRegTrashAlt,
    },
];

const SideBar = ({children}) => {
    const sidebarVariants = {
        open: { x: 0 },
        closed: { x: '-100%' },
    };

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const inputAnimation = {
        hidden:{
            width:"0",
            padding:"0",
            opacity:0,
            transition:{
                duration:0.15
            }
        }
        ,
        show:{
            width: "140px",
            padding: "5px 15px",
            transition:{
                duration:0.2
            },
            opacity: 1
        }
    }

    return (
        <div className="main-container" style={{ width: isOpen ? '200px' : '30px' }}>
            <motion.div
                className="sidebar"
                initial="closed"
                animate="open"
                variants={sidebarVariants}
            >
                <div className="top-section">
                    {isOpen && <motion.h1 initial="hidden" animate="show" exit="hidden" variants={inputAnimation} className="logo">logo</motion.h1>}

                    <div>
                        <FaBars onClick={toggle} />
                    </div>
                </div>

                <div className="search-bar">
                    <div className="search-icon">
                        <FaSearch />
                    </div>
                    <AnimatePresence>
                        {isOpen &&<motion.input initial="hidden" animate="show" exit="hidden" variants={inputAnimation} placeholder="Search" />}
                    </AnimatePresence>

                </div>

                <section className="routes">
                    {routes.map((route) => (
                        <NavLink activeClassName="active" to={route.path} key={route.name} className="link">
                            <div className="icon">
                                <route.icon />
                            </div>
                            <AnimatePresence>
                                {isOpen && <motion.div className="link-text" initial="hidden" animate="show" exit="hidden" variants={inputAnimation} >{route.name}</motion.div>}
                            </AnimatePresence>

                        </NavLink>
                    ))}
                </section>

            </motion.div>

                <main className="content">
                    {children}
                </main>

        </div>
    );
};

export default SideBar;
