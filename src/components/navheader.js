import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";
import { FaBars, FaTimes } from "react-icons/fa";
import backgroundImage from "../assets/images/bgimgreversed.png";

// Animated link component
const AnimatedLink = ({ to, children, onClick }) => {
    const [hovered, setHovered] = useState(false);

    const springProps = useSpring({
        transform: hovered ? "scale(1.1)" : "scale(1)",
        color: hovered ? "#007BFF" : "#fff",
        config: { tension: 220, friction: 20 },
    });

    return (
        <animated.div style={springProps}>
            <Link
                to={to}
                style={styles.link}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={onClick}
            >
                {children}
            </Link>
        </animated.div>
    );
};

const NavHeader = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);

    // screen needs to resize dynamically
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <header
                style={{
                    ...styles.header,
                    backgroundImage: `url(${backgroundImage})`,
                }}
            >
                <div style={styles.navContainer}>
                    {/* Hamburger menu */}
                    {isMobile && (
                        <div style={styles.hamburgerWrapper}>
                            <button onClick={toggleMenu} style={styles.hamburger}>
                                {isMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
                            </button>
                        </div>
                    )}

                    {/* Nav links */}
                    {!isMobile || isMenuOpen ? (
                        <nav
                            style={{
                                ...styles.nav,
                                ...(isMobile && isMenuOpen ? styles.navOpen : {}),
                            }}
                        >
                            <AnimatedLink to="/" onClick={() => setIsMenuOpen(false)}>
                                Home
                            </AnimatedLink>
                            <AnimatedLink to="/about" onClick={() => setIsMenuOpen(false)}>
                                About
                            </AnimatedLink>
                            <AnimatedLink to="/projects" onClick={() => setIsMenuOpen(false)}>
                                Projects
                            </AnimatedLink>
                            <AnimatedLink to="/contact" onClick={() => setIsMenuOpen(false)}>
                                Contact
                            </AnimatedLink>
                        </nav>
                    ) : null}
                </div>
            </header>

            <main style={styles.main}>{children}</main>

            <footer style={styles.footer}>
                <p>Abigail Trebon © 2025</p>
            </footer>
        </>
    );
};

// Styles
const styles = {
    header: {
        padding: "40px 20px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderBottom: "1px solid #e0e0e0",
        position: "sticky",
        top: 0,
        zIndex: 1000,
    },
    navContainer: {
        display: "flex",
        justifyContent: "center", // Center nav links
        alignItems: "center",
        position: "relative",
        maxWidth: "1200px",
        margin: "0 auto",
        flexWrap: "wrap",
    },
    hamburgerWrapper: {
        position: "absolute",
        right: 0,
        top: 0,
    },
    hamburger: {
        background: "none",
        border: "none",
        color: "#fff",
        cursor: "pointer",
    },
    nav: {
        display: "flex",
        gap: "40px",
        fontFamily: "Arial, sans-serif",
        alignItems: "center",
        flexWrap: "wrap",
    },
    navOpen: {
        flexDirection: "column",
        backgroundColor: "#000000aa",
        padding: "20px",
        borderRadius: "8px",
        marginTop: "20px",
    },
    link: {
        textDecoration: "none",
        color: "#fff",
        fontWeight: "600",
        fontSize: "24px",
        transition: "color 0.3s ease",
    },
    main: {
        padding: "20px",
        minHeight: "calc(100vh - 120px)",
        backgroundColor: "#c9d7ff",
    },
    footer: {
        padding: "15px",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderTop: "1px solid rgba(255, 255, 255, 0.2)",
        textAlign: "center",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
    },
};

export default NavHeader;
