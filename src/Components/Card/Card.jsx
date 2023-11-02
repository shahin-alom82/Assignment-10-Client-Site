import { Link } from "react-router-dom";
const Card = ({ cards }) => {
    const { id, img, price, title, description } = cards;
    return (
        <div>
            <div>
                <div className="card bg-gradient-to-r bg-gray-300">
                    <img className="h-[250px]  object-cover rounded-lg" src={img} alt="Shoes" />
                    <div className="p-6">
                        <h2 className="card-title text-2xl font-bold h-5 mt-2">{title}</h2>
                        <div className="rating rating-md mt-4">
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <h1 className="text-xl mt-2 font-bold">{price}</h1>
                        {
                            description.length > 180 ? <p className="mt-4">{description.slice(0, 180)} <Link className="text-blue-700 underline">Read More...</Link></p>
                                : <p>{description}</p>
                        }
                        <div className="card-actions justify-center">
                            <Link to={`/cards/${id}`}>
                                <button className=" rounded-lg lg:text-xl text-white bg-sky-500 h-12 lg:w-[400px] w-[300px] mt-3">
                                    View Details
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;