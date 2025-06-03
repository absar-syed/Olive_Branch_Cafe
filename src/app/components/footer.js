import Image from 'next/image';

export default function Footer() {
    return (
            <footer className="footer mt-auto py-3" style={{ backgroundColor: '#3C4C44' }}>
      <div className="container">
        <div className='row'>
            
        </div>

        <div className="row">
          {/* Visit US */}
          <div className="col-md-4 text-center text-md-start">
            <h5 className="text-beige mb-3">Visit Us</h5>
            <div className="col-md-10">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3449.5811087326515!2d-78.89865558769208!3d43.93031637096976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d51df68008ed6b%3A0xfec4cbaf3b7be56c!2sOlive%20Branch%20Cafe!5e1!3m2!1sen!2sca!4v1748971303189!5m2!1sen!2sca" width="300" height="200" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>

          {/* Hours */}
          <div className="col-md-4 text-center">
            <h5 className="text-beige mb-3">Hours</h5>
            <ul className="list-unstyled">
              <li>Sun - Thurs: 9AM - 12AM</li>
              <li>Fri - Sat: 9AM - 1AM</li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="col-md-4 text-center text-md-end">
            <h5 className="text-beige mb-3">Follow Us</h5>
            <div className="social-links">
              <a href="https://www.instagram.com/olive_branchcafe/" className="mt-1 top-100 start-50 translate-middle">
                <Image src="/instagram.png" alt="instagram icon" width={32} height={32} priority="true"/>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="row mt-3">
          <div className="col-12 text-center text-light">
            <small>© {new Date().getFullYear()} Olive Branch Cafe. All rights reserved.</small>
          </div>
        </div>
      </div>
    </footer>
    );
}