'use client'
import React, { useState, useEffect } from 'react'; 
import { FaPhone, FaEnvelope } from 'react-icons/fa'; 

// --- Navigation Data Structure (No Change) ---
const navItems = [
    { title: 'Home', url: '/' },
    {
        title: 'About Us',
        url: '/about',
        dropdown: [
            { title: 'Overview', url: '/about/overview' },
            { title: 'Mission & Vision', url: '/about/mission-vision' },
            { title: 'Management', url: '/about/management' },
            { title: 'Our Infrastructure', url: '/about/infrastructure' },
            { title: 'Certifications', url: '/about/certifications' },
            { title: 'Our Journey', url: '/about/journey' },
        ],
    },
    {
        title: 'Group',
        url: '/group',
        dropdown: [
            { title: 'JetTech', url: '/group/jettech' },
            { title: 'Global Metallurgy', url: '/group/global-metallurgy' },
        ],
    },
    {
        title: 'Services',
        url: '/services',
        dropdown: [
            { title: 'Air Pollution Control', url: '/services/air-control' },
            { title: 'Material Handling', url: '/services/material-handling' },
            { title: 'HVAC', url: '/services/hvac' },
            { title: 'EPC Power', url: '/services/epc-power' },
        ],
    },
    { title: 'Projects', url: '/projects' },
    { title: 'Our Clients', url: '/clients' },
    { title: 'News and Events', url: '/news' },
    { title: 'Careers', url: '/#' },
];

const Navbar = () => { 
    // State to track if the user has scrolled past the main header
    const [isScrolled, setIsScrolled] = useState(false); 

    // -------------------------------------------------------------------
    // Scroll Effect Implementation
    // -------------------------------------------------------------------
    useEffect(() => {
        const handleScroll = () => {
            // Check if the scroll position is past a certain threshold (e.g., 100px)
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        
        // Cleanup function to remove the event listener
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    // -------------------------------------------------------------------

    const primaryBlue = '#3877d4'; 
    const secondaryBlue = '#386FC1FF'; 
    const lightGray = '#386FC1FF'; 

    // Dynamic heights based on scroll state
    const navHeight = isScrolled ? '40px' : '60px'; // Navbar shrinks on scroll
    const logoHeight = isScrolled ? '30px' : '40px'; // Logo shrinks on scroll
    
    // -------------------------------------------------------------------
    // STYLES
    // -------------------------------------------------------------------

    const styles = {
        // Outer container for the entire header, needed for fixed positioning
        headerWrapper: {
            width: '100%',
            position: isScrolled ? 'fixed' : 'static', 
            top: 0,
            zIndex: 1000,
            boxShadow: isScrolled ? '0 2px 5px rgba(0,0,0,0.1)' : 'none',
            backgroundColor: 'white', 
            transition: 'all 0.3s ease-in-out',
        },
        headerContainer: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '5px 5%',
            backgroundColor: 'white',
            borderBottom: `1px solid ${lightGray}`,
            // Hide the entire white bar when scrolled
            display: isScrolled ? 'none' : 'flex', 
        },
        logoSection: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
        },
        // --- NEW STYLE for the tagline under the logo (in the white bar) ---
        secondaryTagline: {
            fontSize: '10px',
            color: primaryBlue,
            fontWeight: '600',
            marginTop: '2px',
        },
        // --- NEW STYLE for the main header logo image ---
        mainLogoImage: {
            height: '70px', // Original height
            width: 'auto',
        },
        contactSection: {
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
        },
        contactItem: {
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            fontSize: '14px',
            color: '#333',
        },
        ctaButton: {
            backgroundColor: primaryBlue,
            color: 'white',
            padding: '12px 25px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '15px',
            fontWeight: '600',
            textTransform: 'uppercase',
            marginLeft: '20px',
            transition: 'background-color 0.3s',
        },
        
        // --- Main Nav Bar Styles for Centering (Dynamic Height) ---
        navBar: {
            backgroundColor: primaryBlue,
            display: 'flex',
            justifyContent: 'space-between', 
            alignItems: 'center',
            padding: '0 5%',
            position: 'relative', 
            height: navHeight, // ⬅️ Dynamic Height
            transition: 'height 0.3s ease-in-out',
            // Crucial for dropdown: remove overflow: hidden if it were present
            overflow: 'visible', 
        },
        
        // --- Style for the logo image on the dark blue bar (Dynamic Height) ---
        navLogoImage: {
            height: logoHeight, // ⬅️ Dynamic Height (Shrinks on scroll)
            width: 'auto',
            transition: 'height 0.3s ease-in-out',
        },

        navList: {
            display: 'flex',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            flexGrow: 1, 
            justifyContent: 'center', 
        },
        // --- FIX: Increase zIndex on navItem to ensure dropdown is on top ---
        navItem: {
            position: 'relative',
            cursor: 'pointer',
            padding: isScrolled ? '10px 15px' : '15px 15px', 
            color: 'white',
            fontWeight: '600',
            textTransform: 'uppercase',
            fontSize: '14px',
            transition: 'all 0.3s',
            zIndex: 10, // ⬅️ FIX: Ensure this is above other elements
        },
        navItemHover: {
            backgroundColor: secondaryBlue,
        },
        dropdownMenu: {
            position: 'absolute',
            top: '100%',
            left: '0',
            backgroundColor: 'white',
            border: `1px solid ${lightGray}`,
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            zIndex: 11, // ⬅️ FIX: Ensure this is above the navItem sibling content (but still nested)
            minWidth: '200px',
            listStyle: 'none',
            padding: '10px 0',
            margin: 0,
            display: 'none', 
        },
        dropdownItem: {
            padding: '7px 15px',
            color: '#333',
            fontSize: '14px',
            textTransform: 'none',
        },
        dropdownItemHover: {
            backgroundColor: lightGray,
        },
        requestQuoteButton: {
            backgroundColor: 'black',
            color: 'white',
            padding: isScrolled ? '10px 20px' : '15px 20px',
            fontWeight: '700',
            textTransform: 'uppercase',
            fontSize: '14px',
            cursor: 'pointer',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            transition: 'padding 0.3s ease-in-out',
        },
    };

    // --- Sub-Components (Unchanged, correctly scoped) ---
    const DropdownItem = ({ item }) => {
        const [isHovered, setIsHovered] = React.useState(false);
        return (
            <li
                style={{
                    ...styles.dropdownItem,
                    ...(isHovered ? styles.dropdownItemHover : {}),
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <a href={item.url} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                    {item.title}
                </a>
            </li>
        );
    };

    const NavItem = ({ item }) => {
        const [isHovered, setIsHovered] = React.useState(false);
        const hasDropdown = item.dropdown && item.dropdown.length > 0;

        return (
            <li
                style={{
                    ...styles.navItem,
                    ...(isHovered ? styles.navItemHover : {}),
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <a href={item.url} style={{ textDecoration: 'none', color: 'inherit' }}>
                    {item.title} {hasDropdown && '▼'}
                </a>

                {hasDropdown && (
                    <ul
                        style={{
                            ...styles.dropdownMenu,
                            display: isHovered ? 'block' : 'none',
                        }}
                    >
                        {item.dropdown.map((subItem) => (
                            <DropdownItem key={subItem.title} item={subItem} />
                        ))}
                    </ul>
                )}
            </li>
        );
    };

    // --- Main Render Function ---
    return (
        <header style={styles.headerWrapper}>
            {/* 1. Header/Contact Info Section (White Bar) */}
            <div style={styles.headerContainer}>
                <div style={styles.logoSection}>
                    {/* The logo area: Global Enviro */}
                    {/* <p style={{ fontSize: '12px', color: '#666', margin: 0 }}><p style={styles.secondaryTagline}>Environmentally Sound Solutions, Globally Delivered!</p></p> */}
                    <a href="/" style={{ lineHeight: '0' }}>
                        <img 
                            src="/assets/images/group-logo.png" 
                            alt="Global Enviro Logo" 
                            style={styles.mainLogoImage} 
                        />
                    </a>
                    {/* CORRECTED: Tagline is now a sibling element, not nested incorrectly */}
                    {/* <p style={styles.secondaryTagline}>Environmentally Sound Solutions, Globally Delivered!</p>  */}
                </div>

                <div style={styles.contactSection}>
                    <div style={styles.contactItem}>
                        <FaPhone style={{ color: primaryBlue }} />
                        <span>+91 98765-24576</span> 
                    </div>
                    <div style={styles.contactItem}>
                        <FaEnvelope style={{ color: primaryBlue }} />
                        <span>info@global.com</span>
                    </div>
                    <button style={styles.ctaButton}>REQUEST A QUOTE</button>
                </div>
            </div>

            {/* 2. Main Navigation Bar (Dark Blue Bar - UPDATED LAYOUT) */}
            <nav style={styles.navBar}>
                
                

                <ul style={styles.navList}>
                    {navItems.map((item) => (
                        <NavItem key={item.title} item={item} />
                    ))}
                </ul>
                
                <div style={styles.requestQuoteButton}>
                    CONTACT US
                </div>
            </nav>
        </header>
    );
};

export default Navbar;