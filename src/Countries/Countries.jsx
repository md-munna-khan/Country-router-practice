import { useLoaderData } from "react-router-dom";
import Country from "../assets/components/Country/Country";
import './Countries.css'

const Countries = () => {
    const countries = useLoaderData()
    console.log(countries)
    return (
        <div className="countries">
            {/* <h3>Countries:{countries.length}</h3> */}
            {
                countries.map((country,idx)=> <Country key={idx}  country={country}></Country> )
            }
        </div>
    );
};

export default Countries;