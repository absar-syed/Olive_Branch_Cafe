import Image from "next/image";

export default function About() {
    return(
        <section className="page-section" id="about">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">

                    {/* CARD 1 */}
                    <div className="card mb-3 g-0 overflow-hidden" style={{backgroundColor: 'var(--light-green)'}}>
                        <div className="row align-items-center">

                            <div className="col-md-4">
                                <Image src="/olive.webp" width={1000} height={2000} className=" img-fluid " alt="Decor image" />
                            </div>

                            <div className="col ">
                                <div className="card-body text-center">
                                    <h2 className="card-title cafe-font">Aesthetic decor all year round</h2>
                                    <h5 className="card-body cafe-font">Dreamy greeny vibes here at Olive Branch. Filled with comfy and spacious seating. It's a mood, come join us! </h5>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* CARD 2 */}
                    <div className="card mb-3 g-0 overflow-hidden"  style={{backgroundColor: 'var(--brown)'}}>
                        <div className="row align-items-center">

                            <div className="col">
                                <div className="card-body text-center" >
                                    <h2 className="card-title cafe-font" >Summer Refreshers</h2>
                                    <h5 className="card-body cafe-font">Our summer refreshers are officially here!! Stay cool this summer with the Melon Splash, Fizbiscus, and Tropical Breeze</h5>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <Image src="/refreshers.jpg" width={500} height={500} className="object-fill-contain img-fluid " alt="Decor image" />
                            </div>

                        </div>
                    </div>

                    {/* CARD  3*/}
                    <div className="card mb-3 g-0 overflow-hidden"  style={{backgroundColor: 'var(--dark-green)'}} >
                        <div className="row align-items-center">

                            <div className="col-md-4">
                                <Image src="/olive.webp" width={1000} height={2000} className="object-fill-fill img-fluid " alt="Decor image" />
                            </div>

                            <div className="col">
                                <div className="card-body text-center">
                                    <h2 className="card-title cafe-font">Aesthetic decor all year round</h2>
                                    <h5 className="card-body cafe-font">Dreamy greeny vibes here at Olive Branch. Filled with comfy and spacious seating. It's a mood, come join us! </h5>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}