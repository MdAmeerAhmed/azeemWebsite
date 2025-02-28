import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is included

function ContactForm() {
    const [isLoading, setIsLoading] = React.useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        const formData = new FormData(event.target);
        formData.append("access_key", "b4a93a12-78c8-4729-b1f7-ef32636d281a");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                alert("Form Submitted Successfully");
                event.target.reset();
            } else {
                console.log("Error", data);
                alert(data.message || "An error occurred. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("An error occurred. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container-fluid">
            <div className="row align-items-center">
                {/* Left Section - Contact Form */}
                <div className="col-lg-7 col-md-12 p-5 text-white text-center"
                     style={{ background: "linear-gradient(94deg, rgb(0, 0, 51) 41%, rgba(208, 215, 239, 0.7) 92%)" }}>
                    <h6>Let Us Elevate Your Business</h6>
                    <h2>Ready to start a conversation?</h2>
                    <div className="p-4 ms-lg-5 w-75 w-md-100 rounded contact-form">
                        <form onSubmit={onSubmit}>
                            <div className="mb-4">
                                <input type="text" name="name" className="form-control border-0 py-3" placeholder="Your Name" required />
                            </div>
                            <div className="mb-4">
                                <input type="email" name="email" className="form-control border-0 py-3" placeholder="Your Email" required />
                            </div>
                            <div className="mb-4">
                                <input type="text" name="project" className="form-control border-0 py-3" placeholder="Project" required />
                            </div>
                            <div className="mb-4">
                                <textarea name="message" className="form-control border-0 py-3" rows={6} placeholder="Message" required></textarea>
                            </div>
                            <button className="btn bg-primary text-white py-3 px-5" type="submit" disabled={isLoading}>
                                {isLoading ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </div>
                </div>

                {/* Right Section - Background Image */}
                <div
                    className="col-lg-5 col-md-12"
                    style={{
                        minHeight: "100vh",
                        backgroundImage: "url('/img/contact.jpeg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                </div>
            </div>
        </div>
    );
}

export default ContactForm;
