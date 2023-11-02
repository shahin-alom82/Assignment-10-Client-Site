

import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {
    const card = useLoaderData();
    const { _id, name, url, price } = card;


    const handleAddProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const url = form.url.value;
        const name = form.name.value;
        const brand = form.selec.value;
        const price = form.price.value;
        const update = { url, name, brand, price };
        console.log(update);

        // Data to server
        fetch(`https://assignment-10-server-al090gc0h-shahin1.vercel.app/product/${_id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(update)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Product Updateded Successfuly!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    if (data.modifiedCount> 0) {
         
                        window.location.href = "/addcard";
                      }
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };


    return (
        <div className="">
            <div>
                <div className=" rounded-lg mt-5 ">
                    <form onSubmit={handleAddProduct} className="p-5 bg-[#35ab86] rounded-lg md:w-3/4 lg:w-1/2 mx-auto">
                        <h1 className="text-center text-3xl font-bold">Update Product</h1>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="url" defaultValue={url} required placeholder="Photo URL" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={name} required placeholder="Name" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name="price" defaultValue={price} required placeholder="Price" className="input input-bordered" />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <select className="select select-bordered w-[655px]" name="selec">
                                <option>Toyota W3</option>
                                <option>Ford A7</option>
                                <option>Mercedes-Benz</option>
                                <option>BMW Z3</option>
                                <option>Tesla B2</option>
                                <option>Honda F7</option>
                            </select>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Update Product</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Update;