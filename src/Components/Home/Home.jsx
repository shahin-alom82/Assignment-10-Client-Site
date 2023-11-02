
import Banner from "../Banner/Banner";
import Card from "../Card/Card";
import Testimonial from "../Testimonial/Testimonial";
import Customer from "../Custommers/Custommers";
import { useLoaderData } from "react-router-dom";


const Home = () => {
    const cards = useLoaderData();
    console.log(cards)
    return (
        <div>
            <div>
                <Banner></Banner>
                <div>
                    <h1 className="text-center text-4xl font-bold mt-8 text-[#e64a50]">Choose</h1>
                    <h1 className="text-center text-xl mt-2">Rev Up Your Driveway Spectacular Auto Savings Await!</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10">
                    {
                        cards.map(cards => <Card key={cards.id} cards={cards}></Card>)
                    }
                </div>
            </div>
            <div>
            <h1 className="text-xl text-center mt-10">Reviewed by People</h1>
                <h1 className="text-center text-5xl font-bold mt-4">Clients Testimonials</h1>
                <p className="text-center mt-4 text-xl">Client testimonials are a powerful endorsement of your product or service. They provide social proof,  <br />  building trust and credibility.These concise, authentic statements from satisfied clients can highlight the benefits <br /> of your offerings and convince potential customers of their value. </p>
                <Testimonial></Testimonial>
            </div>
            <div>
                <h1 className="text-center text-4xl font-bold mt-10">Customer Review</h1>
                <p className="text-center mt-2 text-xl">They can be displayed on websites, social media, or marketing materials
                    <br /> to build trust and credibility with potential customers.</p>
                <Customer></Customer>
            </div>
        </div>
    );
};

export default Home;