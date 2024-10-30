import { Link, useNavigate } from "react-router-dom";


const Country = ({ country}) => {
    const navigate = useNavigate()
    const{name,population,region,ccn3, flags}= country


    const handleShowDetails =()=>{
navigate(`/country/${ccn3}`)
    }
    return (
        <div className=" space-y-4" style={{
            border:"2px solid red",
            padding: '20px'
        }}>
            <img style={{ width:"200px"}} src={flags.png} alt="" />
            <h3>Name: {name.common}</h3>
            <p>Population:{population}</p>
            <p>Region: {region}</p>
          <Link to={`/country/${ccn3}`}><button className="text-green-500 p-2 bg-gray-500 text-xl font-bold">See Details</button></Link>
          <button className="text-blue-400 p-2 bg-gray-600" onClick={handleShowDetails}>Click to see Details</button>
        </div>
    );
};

export default Country;