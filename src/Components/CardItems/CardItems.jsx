
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const CardItems = ({ card, setCards, cards }) => {
    const { _id, name, url, price, brand } = card;

    const handleDelete = _id => {
        console.log(_id)

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://assignment-10-server-al090gc0h-shahin1.vercel.app/product/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Product has been deleted.',
                                'success'
                            )
                            const remainging = cards.filter(c => c._id !== _id);
                            setCards(remainging)
                        }
                    })
            }
        })
    }
    
    return (
        <div>
            <div>
                <div className="card bg-gradient-to-r bg-gray-300">
                    <img className="h-[250px]  object-cover rounded-lg" src={url} alt="Shoes" />
                    <div className="p-6">
                        <h2 className="card-title text-2xl font-bold h-5 mt-2"> <span>Brand : </span>{brand}</h2>
                        <h2 className="mt-4 text-xl"><span>Name: </span> {name}</h2>
                        <div className="rating rating-md mt-4">
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <h1 className="text-xl mt-2 font-bold"><span>Price : </span>{price}</h1>

                        <div className="card-actions justify-center">
                            <Link to={`/addcard/${_id}`}>
                                <button className=" rounded-lg lg:text-xl text-white bg-sky-500 h-12 lg:w-[400px] w-[300px] mt-3">
                                    Update
                                </button>
                            </Link>
                            <button
                                onClick={() => handleDelete(_id)}
                                className=" rounded-lg lg:text-xl text-white bg-red-500 h-12 lg:w-[400px] w-[300px] mt-3">
                                DELETE
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardItems;