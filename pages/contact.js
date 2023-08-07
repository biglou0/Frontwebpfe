import MapSection from "../components/map";
import React, { useState } from "react";
import CountryFlag from 'react-country-flag';
import countryCodes from '../components/countryCodes';
import axios from "axios";
const location = {
  address: "39,rue 8301 Immeuble Safsaf bloc A N°2-5 Montplaisir 1073 Tunis.",
  lat: 36.81711680603217,
  lng: 10.187499945913345,
  
};
const Contact = () => {
  const [submitStatus, setSubmitStatus] = useState("");
  const [Nom, setNom] = useState()
    const [Prenom, setPrenom] = useState()
    const [Email, setEmail] = useState()
    const [Cin, setCin] = useState()
    const [Tel, setTel] = useState()

    const [Message, setMessage] = useState()

  const [values, setValues] = useState("");

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue.length <= 3000) {
      setValues(inputValue);
    }
  };

  const handleSubmite = e => {
    // Prevent the default submit and page reload
    e.preventDefault()

    const CinRegex = /^[0-9]{8}$/;
    const TelRegex = /^[0-9]{8}$/;
    if (!CinRegex.test(Cin)) {
   
      return;
    }
    if (!TelRegex.test(Tel)) {
   
      return;
    }
    // Handle validations
    axios
      .post("https://backend-web-pfe.onrender.com/Con/add", { Nom,Prenom,Email,Cin,Tel,Message })
      .then(response => {
    
        console.log(response)
        setNom("");
        setPrenom("");
        setEmail("");
        setCin("");
        setTel("");
        setMessage("");
        setSubmitStatus("Votre Message a été envoyé");
        
        setTimeout(() => {
          setSubmitStatus("");
        }, 3000);
                    // Handle response
      })
     
  .catch(err =>{
    console.warn(err)

  })

    }

  return (
    <div>
      {/* Content */}
      <div>
        <MapSection location={location} zoomLevel={17} />
        <div className="lg:grid lg:grid-cols-2">
          <div className="col-span-1 p-24 flex flex-col space-y-8">
            <p className="text-2xl text-gray-600">
              AutoRide <br />
              Services
            </p>
            <p className="text-xl font-light text-gray-500">
            39,rue 8301 Immeuble Safsaf
              <br /> bloc A N°2-5 Montplaisir 1073 Tunis
            </p>
            <p className="text-xl font-light text-gray-500">
              N° Téléphone: (620) 255 7005 <br />
             
            </p>
            <p className="text-xl font-light text-gray-500">
              Email: info@autoride.com
            </p>
          </div>
          <div className="col-span-1 bg-gray-100 p-24 flex flex-col space-y-8">
            <p className="text-2xl text-gray-600">Chairman of the Board</p>
            <p className="text-xl font-light text-gray-500">
             Monji Zitouni
              <br />  N° Téléphone: (620) 252 8021, Fax: (620) 252 8022 <br />
              Email: monji.Zitouni@autoride.com
            </p>
            <p className="text-2xl text-gray-600">Directeur de dévelopement</p>
            <p className="text-xl font-light text-gray-500">
              Monji
              <br /> Phone: (620) 252 8021, Fax: (620) 252 8022 <br />
              Email: mark.Monji@autoride.com
            </p>
          </div>
        </div>

        <form action="" id="login" method="post" onSubmit={handleSubmite}>

        <div className="flex flex-col items-center justify-center  space-y-4 py-24">
          <p className="text-3xl text-center font-light text-gray-600">
          Besoin D`aide? <br />
            Veuillez remplir le formulaire ci-dessous avec des questions ou des commentaires
          </p>
          {submitStatus && (
        <div className="flex justify-center items-center mt-4">
          <p className="text-green-500 bg-white border border-green-500 rounded-lg py-2 px-4">
            {submitStatus}
          </p>
        </div>
      )}
         
          <div className=" container mx-auto px-16 lg:grid  lg:grid-cols-2 lg:grid-rows-3   w-full">
            <div className="col-span-1 row-span-1  p-4 px-8 border">
              <label  className="block mb-2  text-gray-900 ">
                Nom
              </label>
              <input
                type="Text"
                id="nom"
                className="text-gray-900  block w-full p-2.5 "
                placeholder="NOM"
                onChange={e => setNom(e.target.value)}
                value={Nom || ""}
                required
              />
            </div>
            <div className="col-span-1 row-span-3 p-4  border">
              <label  className="block mb-2  text-gray-900 ">
                Your message
              </label>
              <textarea
                id="message"
                rows="4"
                style={{ width: "100%", height: "230px", resize: "none" }}
                className="block p-2.5 w-full  text-gray-900  "
                placeholder="Leave a comment..."
                value={Message || ""}
                  maxLength={3000}
                  onInput={handleInputChange}
                  required
                  onChange={e => setMessage(e.target.value)}
                  
              ></textarea>
            </div>
            <div className="col-span-1 row-span-1  p-4 px-8 border">
              <label  className="block mb-2  text-gray-900 ">
                Prenom
              </label>
              <input
                type="text"
                id="prenom"
                className="text-gray-900  block w-full p-2.5 "
                placeholder="Prenom"
                onChange={e => setPrenom(e.target.value)}
                value={Prenom || ""}
                required
              />
            </div>
            <div className="col-span-1 row-span-1 p-4 px-8 border">
              <label  className="block mb-2  text-gray-900 ">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="  text-gray-900  block w-full p-2.5 "
                placeholder="name@flowbite.com"
                onChange={e => setEmail(e.target.value)}
                value={Email || ""}
                required
              />
            </div>
            <div className="col-span-1 row-span-1 p-4 px-8 border">
              <label  className="block mb-2  text-gray-900 ">
                CIN
              </label>
              <input
                type="text"
                id="cin"
                className="  text-gray-900  block w-full p-2.5 "
                placeholder="012345678"
                onChange={e => setCin(e.target.value)}
                value={Cin || ""}
                required
              />
            </div>

            <div className="col-span-1 row-span-1 p-4 px-8 border">
              <label  className="block mb-2  text-gray-900 ">
                N° Téléphone
              </label>
              <input
                type="text"
                id="tel"
                className="  text-gray-900  block w-full p-2.5 "
                placeholder="012345678"
                onChange={e => setTel(e.target.value)}
                value={Tel || ""}
                required
              />
            </div>

            
          </div>
          <button
            id="sub_btn" 
            type="submit" 
            value="login"
            className=" text-white  bg-amber-600 hover:bg-amber-800   rounded-3xl  px-8 py-3 text-center mr-2 mb-2 "
          >
            CONTACTEZ-NOUS
          </button>
          
        </div>
        </form>
       
      </div>
      {/* End of Content */}
    </div>
  );
};
export default Contact;
