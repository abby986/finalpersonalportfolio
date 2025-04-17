import React from "react";
import img1 from "../assets/images/mockup.jpeg";
import img2 from "../assets/images/poster.png";
import img3 from "../assets/images/stilllife.jpeg";
import img4 from "../assets/images/logo.png";

const Project = () => {
    return (
        <div style={styles.pageWrapper}>
            {/* Code projects container */}
            <div style={styles.container}>
                <h2 style={styles.heading}> Coding Projects</h2>

                <section style={styles.projectSection}>
                    <h3>Which Pet are You?</h3>
                    <p>
                        This quiz project showcases the use of JavaScript and DOM Core
                        methods to store and display user input, RegEX to validate form
                        entries, and the logic to display different quiz results based on
                        the options selected by the user.
                    </p>
                    <p>
                        Check it out:{" "}
                        <a
                            href="https://students.gaim.ucf.edu/~ab910876/dig3716c/assignment2/survey.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={styles.link}
                        >
                            Which Pet are You?
                        </a>
                    </p>
                </section>

                <section style={styles.projectSection}>
                    <h3>Level-Up Reviews</h3>
                    <p>
                        This project is a CMS backend for a (fictional) game review site
                        which uses PHP and MYSQL to call upon databases with multiple user
                        access levels and allows for inserting, deleting, and displaying
                        game reviews.
                    </p>
                    <p>
                        Check it out:{" "}
                        <a
                            href="https://students.gaim.ucf.edu/~ab910876/dig3134c/assignment04/login.php"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={styles.link}
                        >
                            Level-Up Reviews
                        </a>
                    </p>
                </section>

                <section style={styles.projectSection}>
                    <h3>Pikmin Quiz</h3>
                    <p>
                        This project is a react-native quiz app that supports true/false,
                        multiple choice, and multiple answer quiz questions and displays the
                        user's result or score at the end, their selected choices, and an
                        option to restart the quiz.
                    </p>
                    <p>
                        Check it out:{" "}
                        <a
                            href="https://codesandbox.io/p/devbox/gallant-pike-gs7xq6"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={styles.link}
                        >
                            Pikmin Quiz
                        </a>
                    </p>
                </section>
            </div>

            {/* Design projects container */}
            <div style={styles.container}>
                <h2 style={styles.heading}>Design Projects</h2>
                <p style={styles.desc}>
                    All of these designs were created in Adobe Illustrator with different
                    techniques such as gradient mapping, creating repeating patterns and
                    mockups, and customizing fonts.
                </p>
                <div style={styles.grid}>
                    <div style={styles.gridItem}>
                        <img src={img1} alt="Cup design mockup" style={styles.image} />
                    </div>
                    <div style={styles.gridItem}>
                        <img src={img2} alt="Poster" style={styles.image} />
                    </div>
                    <div style={styles.gridItem}>
                        <img src={img3} alt="Still life" style={styles.image} />
                    </div>
                    <div style={styles.gridItem}>
                        <img src={img4} alt="Logo" style={styles.image} />
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles = {
    pageWrapper: {
        padding: "40px 20px",

        fontFamily: "Arial, sans-serif",
    },
    container: {
        backgroundColor: "#ffffffcc",
        maxWidth: "1000px",
        margin: "0 auto 40px auto",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        textAlign: "center",
    },
    heading: {
        marginBottom: "30px",
    },
    projectSection: {
        marginBottom: "30px",
        padding: "15px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
        textAlign: "left",
    },
    link: {
        color: "#ac67de",
        textDecoration: "underline",
        fontWeight: "bold",
        transition: "color 0.3s ease",
    },
    desc: {
        marginBottom: "20px",
        color: "#333",
        fontSize: "16px",
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "20px",
    },
    gridItem: {
        width: "100%",
        aspectRatio: "1 / 1",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: "8px",
        display: "block",
    },
};

export default Project;
