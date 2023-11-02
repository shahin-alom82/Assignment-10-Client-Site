import { Link } from "react-router-dom";
import Slaider from "../Slaider/Slaider";


const Detail = ({ card }) => {
    const { img, title, price, description } = card;
    return (
        <div>
            <Slaider></Slaider>
            <div className="mt-5">
                <div className="card bg-gray-300">
                    <img className="lg:w-[1400px] lg:h-[470px] rounded-lg md:w-[300px] md:h-[150px] object-cover" src={img} alt="" />
                    <div className='p-6'>
                        <h1 className="text-3xl font-bold mt-2">{title}</h1>
                        <button className=" rounded font-bold mt-3">{price}</button>
                        <h1 className="mt-3">{description}</h1>
                        <div className="card-actions justify-start">
                            <Link to="/product">
                                <button className=" rounded-lg lg:text-xl text-white bg-sky-500 h-12 lg:w-[400px] w-[250px] mt-3">
                                    Add To Product
                                </button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
export default Detail;

