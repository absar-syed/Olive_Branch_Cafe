import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';

export default function Header() {
  return ( 
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">

        <a className="navbar-brand" href="#"><h2>Olive Branch Cafe</h2></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse ms-auto" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Menu</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Reviews</a>
            </li>
          </ul>
        </div>
    
        {/* INSTAGRAM ICON WITH LINK TO INSTGRAM */}
        {/* <div className="ms-auto" >
          <a href='https://www.instagram.com/olive_branchcafe/' rel='noopener'>
            <Image src="/instagram.png" alt="instagram icon" width={32} height={32} priority/>
          </a>
        </div> */}
        
      </div>
    </nav>
  );
}
