const ContactUs = () => {
    return (
        <section id="contactUs">
            <h2 className="section-heading">Reach Out To Us</h2>

            <div>
                <img src="https://picsum.photos/300/300?random=2" alt="" />

                <form action="/about" id="contactForm" method="POST">
                    <div>
                        <div>
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" id="firstName" name="firstName" placeholder="Enter your first name" required/>
                        </div>

                        <div>
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" id="lastName" name="lastName" placeholder="Enter your last name"/>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email" required/>
                    </div>

                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" placeholder="Enter your message" required/>
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </section>
    )
}

export default ContactUs
