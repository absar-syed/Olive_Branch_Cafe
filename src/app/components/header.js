import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';

export default function Header() {
  return ( 
    <nav className="navbar navbar-expand-lg navbar-custom">
      <div className="container-fluid">

        <a className="navbar-brand" href="/">
          <Image src="/favicon.ico" alt='olive branch logo' width={85} height={85}/>
        </a>

        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarContent" 
          aria-controls="navbarContent" 
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse ms-auto" id="navbarContent">

          <ul className="navbar-nav me-auto">

            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Menu</a>
            </li>

            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Reviews</a>
            </li>

          </ul>

        </div>
      </div>
    </nav>
  );
}
