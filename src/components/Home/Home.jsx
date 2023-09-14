import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import './Home.css'


const Home = () => {

    const [allActors, setAllActors] = useState([]);
    const [selectedActors, setSelectedActors] = useState([]);
    const [remaining, setRemaining] = useState(0);
    const [totalCost, setTotalCost] = useState(0);


    useEffect(() => {
        fetch("./data.json")
            .then(res => res.json())
            .then(data => setAllActors(data))
    }, []);


    const handleSelectActor = (actor) => {
        const isExist = selectedActors.find(item => item.id === actor.id);
        let count = actor.salary;

        if (isExist) {
            return alert("Already Booked")
        }
        else {

            selectedActors.forEach(item => {
                count += item.salary;
            })

            const totalRemaining = 30000 - count;

            if (count > 30000) {
                return alert('You reach your limit');
            }
            else {
                setTotalCost(count);
                setRemaining(totalRemaining);

                const newSelectedActors = [...selectedActors, actor];
                setSelectedActors(newSelectedActors);
            }
        }

    }


    return (
        <div>
            <h1 className="text-4xl font-bold text-center my-5">Cine Makers Hub</h1>
            <hr className="mb-5" />

            {/* body */}
            <div className="flex flex-col-reverse md:flex-row lg:flex-row gap-5 my-10">
                {/* card-container */}
                <div className="w-full md:w-4/5 lg:w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {/* card */}
                    {
                        allActors.map(actor => (
                            <div key={actor.id} className="p-5 py-10 border-2 border-gray-300 rounded-lg">
                                {/* card image */}
                                <div className="flex justify-center">
                                    <img className="w-20 rounded-full" src={actor.image} alt="" />
                                </div>
                                <h2 className="text-center text-xl font-bold mt-3">{actor.name}</h2>
                                <p className="text-center my-5"><small>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae numquam consequatur</small></p>
                                <div className="flex justify-between">
                                    <p><span className="font-bold">Salary:</span> ${actor.salary}</p>
                                    <p className="font-bold">{actor.role}</p>
                                </div>
                                <div className="flex justify-center mt-3">
                                    <button onClick={() => handleSelectActor(actor)} className="btn btn-accent text-white">Select</button>
                                </div>
                            </div>
                        ))
                    }
                </div>

                {/* Cart container */}
                <div className="w-full md:w-1/5 lg:w-1/5">
                    <Cart selectedActors={selectedActors} remaining={remaining} totalCost={totalCost}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Home;