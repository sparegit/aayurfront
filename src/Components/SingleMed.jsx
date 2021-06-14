import React from 'react'
import axios from 'axios';
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import {useParams} from 'react-router-dom'
const { useEffect,useState } = React;
function SingleMed() {
    const {medicineId}= useParams();
const [med, setmed] = useState({})
    const fetchMedDetail= async()=>{
        const res= await axios.get(`http://localhost:8080/medicine/id/${medicineId}`).then(res=>{
            console.log("response of single",res);
            setmed(res.data);
        }).catch(err=>{
            console.error(err)
          
        })
        
    }
    useEffect(() => {
      fetchMedDetail();
      
    }, [])
    console.log(med.medicineName)
    return (
        <div>
            <Card>
            <Card.Body>
                  {" "}
                  <Card.Title>
                    <Link
                      style={{ textDecoration: "none" }}
                    >
                      {med.medicineName}
                    </Link>
                  </Card.Title>
                  <Card.Text>Rs.{med.medicineCost}</Card.Text>
                  <Card.Text>{med.medicineDescription}</Card.Text>
                 
                 
                </Card.Body>
                
            </Card>
        </div>
    )
}

export default SingleMed
