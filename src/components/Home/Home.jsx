import { useEffect, useState } from "react";


const Home = () => {

    const [allActors, setAllActors] = useState([]);

    useEffect(() => {
        fetch("./data.json")
            .then(res => res.json())
            .then(data => setAllActors(data))
    }, []);


    const handleSelectActor = (actor) => {
        console.log(actor)
    }

    console.log(allActors);

    return (
        <div>
            <h1 className="text-4xl font-bold text-center my-5">BPL Team Maker</h1>
            <hr className="mb-5" />

            {/* body */}
            <div className="flex gap-5 my-10">
                {/* card-container */}
                <div className="w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {/* card */}
                    {
                        allActors.map(actor => (
                            <div key={actor.id} className="p-5 py-10 shadow-xl rounded-2xl">
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
                <div className="w-1/3">
                    <h1>This is cart</h1>
                </div>
            </div>
        </div>
    );
};

export default Home;