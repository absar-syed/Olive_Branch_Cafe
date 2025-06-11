import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';

export default function Header() {
  return ( 
    // <nav className="navbar navbar-expand-lg navbar-custom">
    //   <div className="container-fluid">

    //     <a className="navbar-brand" href="/">
    //       <Image src="/favicon.ico" alt='olive branch logo' width={85} height={85}/>
    //     </a>

    //     <button 
    //       className="navbar-toggler" 
    //       type="button" 
    //       data-bs-toggle="collapse" 
    //       data-bs-target="#navbarContent" 
    //       aria-controls="navbarContent" 
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>

    //     <div className="collapse navbar-collapse ms-auto" id="navbarContent">

    //       <ul className="navbar-nav me-auto">

    //         <li className="nav-item">
    //           <a className="nav-link active" aria-current="page" href="/">Menu</a>
    //         </li>

    //         <li className="nav-item">
    //           <a className="nav-link active" aria-current="page" href="/">Reviews</a>
    //         </li>

    //       </ul>

    //     </div>
    //   </div>
    // </nav>

    <nav className="navbar navbar-expand-lg fixed-top py-3" id="mainNav">
        <div className="container px-4 px-lg-5">
            <a className="navbar-brand" href="#page-top">
                <Image src="/favicon.ico" alt='olive branch logo' width={60} height={60}/>
                <Image src="/OliveBranch.png" alt='olive branch cafe logo' width={130} height={60}/>
            </a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ms-auto my-2 my-lg-0">
                    <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                    <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
                    <li className="nav-item"><a className="nav-link" href="#portfolio">Portfolio</a></li>
                    <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>
  );
}
