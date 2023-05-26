import React from 'react';
import { motion } from 'framer-motion';
import '../assets/css/sideBar.css';

const SideBar = () => {
    const sidebarVariants = {
        open: { x: 0 },
        closed: { x: '-100%' },

    };

    return (
        <div className="main-container" style={{width:"200px"}}>
            <motion.div
                className="sidebar"
                initial="closed"
                animate="open"
                variants={sidebarVariants}
            >
                SideBar
            </motion.div>
        </div>
    );
};

export default SideBar;




