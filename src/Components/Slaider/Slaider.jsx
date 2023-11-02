

const Slaider = () => {
    return (
        <div>


            <div>
                <div className="">
                    <div className="carousel h-[600px] rounded-3xl mt-4">
                        <div id="slide1" className="carousel-item relative w-full">
                            <img
                                src="https://i.ibb.co/kmFBWp5/ty5.jpg"
                                className="w-full"
                            />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-[40%]">
                                <a href="#slide4" className="btn btn-circle">
                                    ❮
                                </a>
                                <a href="#slide2" className="btn btn-circle">
                                    ❯
                                </a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <img
                                src="https://i.ibb.co/GvN07xr/fo4.jpg"
                                className="w-full"
                            />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-[40%]">
                                <a href="#slide1" className="btn btn-circle">
                                    ❮
                                </a>
                                <a href="#slide3" className="btn btn-circle">
                                    ❯
                                </a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <img
                                src="https://i.ibb.co/VwsXxJ7/bm4.jpg"
                                className="w-full"
                            />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-[40%]">
                                <a href="#slide2" className="btn btn-circle">
                                    ❮
                                </a>
                                <a href="#slide4" className="btn btn-circle">
                                    ❯
                                </a>
                            </div>
                        </div>
                        <div id="slide4" className="carousel-item relative w-full">
                            <img
                                src="https://i.ibb.co/RcPrWn1/mb4.jpg"
                                className="w-full"
                            />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-[40%]">
                                <a href="#slide3" className="btn btn-circle">
                                    ❮
                                </a>
                                <a href="#slide5" className="btn btn-circle">
                                    ❯
                                </a>
                            </div>
                        </div>
                        <div id="slide5" className="carousel-item relative w-full">
                            <img
                                src="https://i.ibb.co/RcPrWn1/mb4.jpg"
                                className="w-full"
                            />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-[40%]">
                                <a href="#slide4" className="btn btn-circle">
                                    ❮
                                </a>
                                <a href="#slide6" className="btn btn-circle">
                                    ❯
                                </a>
                            </div>
                        </div>
                        <div id="slide6" className="carousel-item relative w-full">
                            <img
                                src="https://i.ibb.co/8M6wGmk/te4.webp"
                                className="w-full"
                            />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-[40%]">
                                <a href="#slide5" className="btn btn-circle">
                                    ❮
                                </a>
                                <a href="#slide1" className="btn btn-circle">
                                    ❯
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Slaider;

