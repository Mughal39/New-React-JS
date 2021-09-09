import { useState } from "react";
const Home = () => {
    // let name = 'Mohsin';
    const [name, setName] = useState('Mohsin');
    const [age, setAge] = useState(25);

    const handleClick =() => {
        setName('Hamza');
        setAge(30);

    }
   

    return ( 
        <div className="Home">
            <h2>Home Page</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button>
            
        </div>
     );
}
 
export default Home;