const ContactUs = () => {
    return (
        <section id="contactUs">
            <h2 className="section-heading">Reach Out To Us</h2>

            <form action="/about" id="contactForm" method="POST">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" required/>

                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName"/>

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required/>

                <label htmlFor="message">Message</label>
                <input type="text" id="message" name="message" required/>

                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactUs
