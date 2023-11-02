



const Testimonial = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7 mt-5 p-2 ">
            <div className="card border bg-slate-300">
                <img className="rounded-full object-cover h-20 mx-auto w-20 mt-10" src="https://i.ibb.co/G05Cnz0/lovepik.png" alt="Shoes" />
                <div className="p-6 h-[150px]">
                    <h2 className="card-title text-center text-sm h-5 mt-6">Absolutely delighted with the birthday celebration organized by this team! From personalized decor to seamless coordination, they turned my special day into an extraordinary experience</h2>
                </div>
            </div>

            <div className="card  border bg-slate-300">
                <img className="rounded-full object-cover h-20 mx-auto w-20 mt-10" src="https://i.ibb.co/9GbL0qc/lovepik.png" alt="Shoes" />
                <div className="p-6">
                    <h2 className="card-title text-center text-sm  h-5 mt-6">The teams dedication and creativity added a special touch,
                        making it a day well forever cherish. Grateful for the
                        unforgettable memories they helped create on our</h2>
                </div>
            </div>
        </div>
    );
};
export default Testimonial;