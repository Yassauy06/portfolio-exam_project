import React , {useEffect,useState} from "react";
import axios from 'axios'

const Clients = () =>{
    const [clients,setClients] = useState([])
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(null)
    
    useEffect(() =>{
        const fetchClients = async () =>{
            try{
                const response = await axios.get('https://669a76c39ba098ed61ffbc89.mockapi.io/clients')
                setClients(response.data)
            }catch(error){
                setError(error.message)
            }finally{
                setLoading(false)
            }
        }
        fetchClients()
    },[])
    if(loading) return <p>loading...</p>
    if(error) return <p>Error: {error}</p>

    return(
        <div  className="client-content">
            <h2 style={{marginLeft:'20px'}} className="title-page">My clients</h2>
            <ul>
                {clients.map(client =>[
                    <li className="list-client" key={client.id}>
                        {client.name} - {client.email}
                    </li>
                
                ])}
                
            </ul>


        </div>
    )


}
export default Clients;