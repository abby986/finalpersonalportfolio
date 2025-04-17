import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import bgImage from "../assets/images/bgimgmain.png";

const Home = () => {
    const [hovered, setHovered] = useState(false);

    const springProps = useSpring({
        transform: hovered ? "scale(1.1)" : "scale(1)",
        color: hovered ? "#c9e6ff" : "#fff",
        config: { tension: 220, friction: 20 },
    });

    return (
        <>
            {/* has bg img */}
            <section style={styles.section}>
                <animated.h1
                    style={{ ...styles.heading, ...springProps }}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    Welcome!
                </animated.h1>
            </section>

            {/* about-style content box */}
            <div style={styles.container}>
                <section style={styles.aboutBox}>
                    <h2 style={styles.aboutHeading}>
                        Hello! My name is Abigail Trebon and this is my portfolio! Explore
                        to learn more about me, my projects, and to get in touch!
                    </h2>
                </section>
            </div>
        </>
    );
};

const styles = {
    section: {
        textAlign: "center",
        padding: "80px 20px",
        width: "90%",
        maxWidth: "1000px",
        margin: "40px auto",
        fontFamily: "Arial, sans-serif",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#fff",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        overflow: "hidden",
    },
    heading: {
        fontSize: "60px",
        fontWeight: "bold",
        margin: "0",
        cursor: "pointer",
    },
    container: {
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        maxWidth: "600px",
        margin: "40px auto",
        backgroundColor: "#ffffffcc",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    },
    aboutBox: {
        textAlign: "center",
    },
    aboutHeading: {
        fontSize: "30px",
        color: "#333",
        margin: "0",
    },
};

export default Home;
