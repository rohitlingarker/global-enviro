'use client'
import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaAngleRight } from 'react-icons/fa';
// import Link from 'next/link'; // Use if necessary for routing

const Footer = () => {
    const primaryBlue = '#204170'; 
    const secondaryBlue = '#01579b'; 
    const accentGreen = '#a2dbee'; // Attractive green for 'Enviro' theme
    const darkGray = '#333333';
    const lightText = '#f4f4f4';

    const styles = {
        footerContainer: {
            fontFamily: 'Arial, sans-serif',
        },
        // --- Top Bar (Dark Blue) ---
        footerTop: {
            backgroundColor: primaryBlue,
            color: lightText,
            padding: '40px 5%',
            display: 'flex',
            justifyContent: 'space-between',
            gap: '30px',
        },
        // --- Bottom Bar (Copyright - Dark Gray) ---
        footerBottom: {
            backgroundColor: darkGray,
            textAlign: 'center',
            padding: '15px 5%',
            fontSize: '13px',
            color: '#bbbbbb',
        },
        column: {
            flex: 1,
            minWidth: '220px',
        },
        // --- Column 1: Logo/Info ---
        logoSection: {
            marginBottom: '20px',
        },
        logoImage: {
            height: '45px',
            width: 'auto',
            marginBottom: '10px',
            filter: 'invert(100%)', // Ensure logo is white on blue background
        },
        tagline: {
            fontSize: '14px',
            lineHeight: '1.6',
            marginBottom: '20px',
            color: lightText,
        },
        contactItem: {
            display: 'flex',
            alignItems: 'center',
            marginBottom: '10px',
            fontSize: '14px',
        },
        icon: {
            marginRight: '12px',
            color: accentGreen, // Using green as the highlight color
            fontSize: '16px',
        },

        // --- Column 2 & 3: Links ---
        columnTitle: {
            fontSize: '18px',
            fontWeight: '700',
            marginBottom: '25px',
            color: accentGreen, // Titles highlighted in green
        },
        linkList: {
            listStyle: 'none',
            padding: 0,
            margin: 0,
        },
        linkItem: {
            marginBottom: '10px',
        },
        linkAnchor: {
            textDecoration: 'none',
            color: lightText,
            fontSize: '14px',
            display: 'flex',
            alignItems: 'center',
            transition: 'color 0.2s',
        },
        linkIcon: {
            marginRight: '8px',
            fontSize: '10px',
            color: secondaryBlue,
            transition: 'color 0.2s',
        },
        // Hover effect for the link
        linkHover: {
            color: accentGreen,
        },

        // --- Column 4: Newsletter/Social ---
        newsletterInput: {
            width: '100%',
            padding: '10px',
            borderRadius: '5px',
            border: 'none',
            marginBottom: '10px',
            fontSize: '14px',
            boxSizing: 'border-box',
        },
        subscribeButton: {
            backgroundColor: accentGreen,
            color: 'white',
            border: 'none',
            padding: '10px 15px',
            borderRadius: '5px',
            width: '100%',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'background-color 0.3s',
        },
        socialLinks: {
            marginTop: '25px',
            display: 'flex',
            gap: '15px',
        },
        socialIcon: {
            color: primaryBlue,
            backgroundColor: lightText,
            padding: '10px',
            borderRadius: '50%',
            fontSize: '18px',
            transition: 'background-color 0.3s, color 0.3s',
        },
        socialIconHover: {
            backgroundColor: secondaryBlue,
            color: 'white',
        }
    };

    // Helper component for managing link hover state
    const FooterLink = ({ title, url }) => {
        const [isHovered, setIsHovered] = React.useState(false);
        return (
            <li style={styles.linkItem}>
                <a 
                    href={url} 
                    style={{
                        ...styles.linkAnchor,
                        ...(isHovered ? styles.linkHover : {})
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <FaAngleRight style={{
                        ...styles.linkIcon,
                        ...(isHovered ? { color: accentGreen } : {})
                    }} />
                    {title}
                </a>
            </li>
        );
    };

    // Helper component for social icons with hover effect
    const SocialIcon = ({ icon: Icon, url, style }) => {
        const [isHovered, setIsHovered] = React.useState(false);

        return (
            <a 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer" 
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Icon 
                    style={{
                        ...style.socialIcon,
                        ...(isHovered ? style.socialIconHover : {})
                    }} 
                />
            </a>
        );
    };

    return (
        <footer style={styles.footerContainer}>
            <div style={styles.footerTop}>
                {/* 1. Company Information Column */}
                <div style={styles.column}>
                    <div style={styles.logoSection}>
                        <img 
                            src="/assets/images/group-logo.png" // Use your logo path
                            alt="Global Enviro Logo" 
                            style={styles.logoImage}
                        />
                    </div>
                    <p style={styles.tagline}>
                        Trusted engineering solutions for a greener future. Specializing in Air Pollution Control, Material Handling, and HVAC systems since 1999.
                    </p>
                    
                    <div style={styles.contactItem}>
                        <FaMapMarkerAlt style={styles.icon} />
                        <span>[Company Address]</span>
                    </div>
                    <div style={styles.contactItem}>
                        <FaPhone style={styles.icon} />
                        <span>+91 98764-43564</span>
                    </div>
                    <div style={styles.contactItem}>
                        <FaEnvelope style={styles.icon} />
                        <span>info@global.com</span>
                    </div>
                </div>

                {/* 2. Quick Links Column */}
                <div style={styles.column}>
                    <h4 style={styles.columnTitle}>Quick Navigation</h4>
                    <ul style={styles.linkList}>
                        <FooterLink title="Our Mission & Vision" url="/about/mission-vision" />
                        <FooterLink title="Our Infrastructure" url="/about/infrastructure" />
                        <FooterLink title="News and Events" url="/news" />
                        <FooterLink title="Projects Portfolio" url="/projects" />
                        <FooterLink title="Careers / Management" url="/about/management" />
                        <FooterLink title="Contact Us" url="/contact" />
                    </ul>
                </div>

                {/* 3. Group & Services Column */}
                <div style={styles.column}>
                    <h4 style={styles.columnTitle}>Group & Services</h4>
                    <ul style={styles.linkList}>
                        <FooterLink title="Air Pollution Control" url="/services/air-control" />
                        <FooterLink title="Material Handling" url="/services/material-handling" />
                        <FooterLink title="HVAC Systems" url="/services/hvac" />
                        <FooterLink title="EPC Power Solutions" url="/services/epc-power" />
                        <FooterLink title="JetTech Group" url="/group/jettech" />
                        <FooterLink title="Global Metallurgy" url="/group/global-metallurgy" />
                    </ul>
                </div>
                
                {/* 4. Newsletter/Social Column */}
                <div style={styles.column}>
                    <h4 style={styles.columnTitle}>Stay Connected</h4>
                    <p style={styles.tagline}>Subscribe to our newsletter for latest updates.</p>
                    <input 
                        type="email" 
                        placeholder="Enter Email Address" 
                        style={styles.newsletterInput}
                    />
                    <button style={styles.subscribeButton}>SUBSCRIBE NOW</button>

                    <div style={styles.socialLinks}>
                         <SocialIcon icon={FaFacebookF} url="#" style={styles} />
                         <SocialIcon icon={FaTwitter} url="#" style={styles} />
                         <SocialIcon icon={FaLinkedinIn} url="#" style={styles} />
                    </div>
                </div>
            </div>

            {/* Copyright and Bottom Info */}
            <div style={styles.footerBottom}>
                &copy; {new Date().getFullYear()} GLOBAL ENVIRO GROUP. All Rights Reserved. | Designed and Developed by [Developer Name]
            </div>
        </footer>
    );
};

export default Footer;