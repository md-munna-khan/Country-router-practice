import { useLoaderData, useNavigate } from "react-router-dom";


const CountryDetails = () => {
    const details = useLoaderData()
    const navigate = useNavigate()
    const {area,population,region,flags}= details[0]
    console.log(details)

    const handleGoBack=()=>{
        navigate(-1)
    }
    return (
        <div>
              <img style={{ width:"200px"}} src={flags.png} alt="" />
           <h3>area:{area}</h3>
           <p>Population: {population}</p>
           <p>region: {region}</p>
           <button className="bg-yellow-300 p-2" onClick={handleGoBack}>Go back</button>
      
        </div>
    );
};

export default CountryDetails;