import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import { FaLinkedin, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";

const Contact = () => {
    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        email: "",
        message: "",
    });

    const [isHovered, setIsHovered] = useState(false);

    const buttonSpring = useSpring({
        transform: isHovered ? "scale(1.1)" : "scale(1)",
        backgroundColor: "#ac67de",
        config: { tension: 220, friction: 20 },
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { fname, lname, email, message } = formData;

        const fnameRegex = /^[A-Z][a-z]*$/;
        const lnameRegex = /^[A-Z][a-zA-Z' ]*$/;
        const emailRegex = /^.+@.+\.(com|edu)$/;

        if (!fnameRegex.test(fname)) {
            alert(
                "First name must start with a capital letter and contain only lowercase letters."
            );
            return;
        }

        if (!lnameRegex.test(lname)) {
            alert(
                "Last name must start with a capital letter and may include letters, apostrophes, or spaces."
            );
            return;
        }

        if (!emailRegex.test(email)) {
            alert("Email must end in .com or .edu.");
            return;
        }

        if (message.trim().length < 10) {
            alert("Please enter a longer message (at least 10 characters).");
            return;
        }

        console.log("Form Submitted:", formData);
        alert("Message sent!");
        setFormData({ fname: "", lname: "", email: "", message: "" });
    };

    //global style reset
    useEffect(() => {
        document.body.style.margin = "0";
        document.body.style.padding = "0";
        document.body.style.height = "100vh";
    }, []);

    return (
        <div style={styles.pageWrapper}>
            <div style={styles.container}>
                <h1>Let's Get in Touch!</h1>
                <h2>Contact me at:</h2>
                <p style={styles.email}>ab910876@ucf.edu</p>

                <form onSubmit={handleSubmit} style={styles.form}>
                    <input
                        type="text"
                        name="fname"
                        placeholder="First Name"
                        value={formData.fname}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                    <input
                        type="text"
                        name="lname"
                        placeholder="Last Name"
                        value={formData.lname}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email (.com or .edu)"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        style={styles.textarea}
                    />
                    <animated.button
                        type="submit"
                        style={{ ...styles.button, ...buttonSpring }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        Send Message
                    </animated.button>
                </form>

                <h2 style={styles.findMeText}>Find Me On:</h2>
                <div style={styles.icons}>
                    <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.iconLink}
                    >
                        <FaLinkedin size={50} />
                    </a>
                    <a
                        href="https://github.com/abby986"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.iconLink}
                    >
                        <FaGithub size={50} />
                    </a>
                    <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.iconLink}
                    >
                        <FaInstagram size={50} />
                    </a>
                    <a
                        href="https://www.youtube.com/@abnotr"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.iconLink}
                    >
                        <FaYoutube size={50} />
                    </a>
                </div>
            </div>
        </div>
    );
};

const styles = {
    pageWrapper: {
        backgroundColor: "#c9d7ff",
        minHeight: "100vh",
        padding: "40px 20px",
    },
    container: {
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        maxWidth: "600px",
        margin: "0 auto",
        backgroundColor: "#ffffffcc",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    },
    email: {
        fontSize: "18px",
        marginBottom: "20px",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        marginBottom: "60px", // break after the form
    },
    input: {
        padding: "10px",
        fontSize: "16px",
        borderRadius: "4px",
        border: "1px solid #ccc",
    },
    textarea: {
        padding: "10px",
        fontSize: "16px",
        borderRadius: "4px",
        border: "1px solid #ccc",
    },
    button: {
        padding: "12px 20px",
        color: "#fff",
        fontSize: "16px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        backgroundColor: "transparent",
        outline: "none",
        transformOrigin: "center center",
    },
    findMeText: {
        marginBottom: "20px",
    },
    icons: {
        display: "flex",
        justifyContent: "center",
        gap: "30px",
    },
    iconLink: {
        color: "#ac67de",
        textDecoration: "none",
        transition: "color 0.3s ease",
    },
};

export default Contact;
