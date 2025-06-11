import Image from "next/image";

export default function About() {
    return(
        <section className="page-section" id="about">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    {/* <div className="col-lg-8 text-center">
                        <h2 className="text-white mt-0">We've got what you need!</h2>
                        <hr className="divider" />
                        <p className="text-white-75 mb-4">Start Bootstrap has everything you need to get your new website up and running in no time! Choose one of our open source, free to download, and easy to use themes! No strings attached!</p>
                    </div> */}

                    {/* CARD  */}
                    <div className="card mb-3" >
                        <div className="row g-0">
                            <div className="col-md-4">
                            <Image src="/olive.webp" width={400} height={800} className="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div className="col-md-8">
                            <div className="card-body">
                                <h2 className="card-title">Card title</h2>
                                
                            </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}