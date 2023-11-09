import react from 'react';

function Footer() {
    return (
        <footer>
            <div class="footer-nav">
			    <form>
				    <label for="email-input">Subscribe to our newsletter:</label>
				    <input type="email" id="email-input" placeholder="Email Address"></input>
				    <button type="submit">Sign Up</button>
			    </form>
			    <nav>
				    <ul>
					    <li><a href="menu.html">Menu</a></li>
					    <li><a href="reservations.html">Reservations</a></li>
					    <li><a href="special-offers.html">Special Offers</a></li>
					    <li><a href="contact.html">Contact</a></li>
				    </ul>
			    </nav>
		    </div>
		    <div class="footer-copy">
			    <p>&copy; 2023 Cheesy Situation, Inc. All Rights Reserved.</p>
		    </div>
	    </footer> 
    );
}

export default Footer;