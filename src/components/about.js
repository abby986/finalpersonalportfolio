import React from "react";

const About = () => {
    return (
        <div style={styles.container}>
            <section style={styles.section}>
                <h2>About Me</h2>
                <p style={styles.paragraph}>
                    I am a web design student at the University of Central Florida. I am
                    currently building a foundation of web design skills to help me become
                    a smart and responsive web developer.
                </p>
                <p style={styles.paragraph}>
                    In my spare time, I enjoy creating art both digitally and
                    traditionally, playing instruments, playing video games and
                    role-playing games like Dungeons & Dragons, and learning new things!
                </p>
                <br />
                <h2>Technical Skills</h2>

                <h4>Programming Languages</h4>
                <ul style={styles.list}>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>PHP</li>
                </ul>

                <h4>Frameworks & Libraries</h4>
                <ul style={styles.list}>
                    <li>React</li>
                    <li>React Native</li>
                </ul>

                <h4>Design Tools</h4>
                <ul style={styles.list}>
                    <li>Adobe Photoshop</li>
                    <li>Adobe Illustrator</li>
                    <li>Figma</li>
                    <li>Procreate</li>
                </ul>

                <h4>Other Tools</h4>
                <ul style={styles.list}>
                    <li>VS Code</li>
                    <li>GitHub</li>
                </ul>
            </section>
        </div>
    );
};

const styles = {
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
    section: {
        textAlign: "left",
    },
    paragraph: {
        lineHeight: "1.6",
        fontSize: "16px",
        color: "#333",
    },
    list: {
        lineHeight: "1.6",
        fontSize: "16px",
        color: "#333",
        paddingLeft: "20px",
    },
};

export default About;
