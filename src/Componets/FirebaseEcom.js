import { React, createContext, useEffect, useState } from "react";
import { initializeApp } from 'firebase/app';
//  import 'firebase/storage';
import {getFirestore, collection,addDoc, getDocs, doc, getDoc} from "firebase/firestore";
import {getStorage,ref,uploadBytes,getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCgwUnj3Omlj_5B4e_Ubo5KWFMnkY_s4IQ",  
  authDomain: "reactecomweb.firebaseapp.com",
  projectId: "reactecomweb",
  storageBucket: "reactecomweb.appspot.com",
  messagingSenderId: "98456480091",
  appId: "1:98456480091:web:9ac6b52e58a1a54d55927e",
  measurementId: "G-ZTWTTJ8H6R"
};


const firebaseConfig2 = {
  apiKey: "AIzaSyDdTfnYYBg-gNY0FhV9lsjyU_9BhclfbUA",
  authDomain: "adminaddproduct.firebaseapp.com",
  projectId: "adminaddproduct",
  storageBucket: "adminaddproduct.appspot.com",
  messagingSenderId: "604763639515",
  appId: "1:604763639515:web:15e69d343d9849664606fe",
  measurementId: "G-WZXKZKBKGG"
};


const Firebasecontextceom = createContext();

 const app = initializeApp(firebaseConfig , 'app1');
 const firebasestore = getFirestore(app);


 const firebaseapp = initializeApp(firebaseConfig2, 'app2');
 const firebasestore2 = getFirestore(firebaseapp);
 const storages = getStorage(firebaseapp);

const FirebaseproviderEcom =(props) => {

const Placeorder = async (productid, productname, productprice, productcompany , customername, customeremail, customeraddress , customercountry , customercity , customerpincode) => {

try{
   const orderCollectionRef = collection(firebasestore, "orders");
  
    await addDoc(orderCollectionRef, {
      productid,
      productname,
      productprice,
      productcompany,
      customername,
      customeremail, 
      customeraddress ,
      customercountry ,
      customercity,
      customerpincode
    });

  }catch (error) {
    console.log('érrror' , error)
  }
    
  }

  const Usersignupdata = async(fisrtname , lastname, email, password , country )=>
  {
    try{
      const orderCollectionRef = collection(firebasestore, "users");
     
       await addDoc(orderCollectionRef, {
      fisrtname,
      lastname,
      email,
      password,
      country
      
       });
   
     }catch (error) {
       console.log('érrror' , error)
     }
  }


//   const createlisting = async (id, price, category,description,coverpic, title)=>
//   {
//      const imgaeref = ref(storages,`upload/images/${Date.now()}-${coverpic.name}`);
//      const uploadresult = await uploadBytes(imgaeref,coverpic);
// try{
//      await addDoc(collection(firebasestore2, "items"),
//      {
//        id, 
//        price, 
//        category,
//        imageurl: uploadresult.ref?.fullPath,
//        description,
//        title
//      })
//     }catch(error)
//     {
//        console.log("érror" , error)
//     }
//    }

const createlisting = async (id, price, category, description, coverpic, title) => {
  try {
    // const storageRef = ref(storages, `upload/images/${Date.now()}-${coverpic.name}`);
    
    // await uploadBytes(storageRef, coverpic);


    // const downloadURL = await getDownloadURL(storageRef);

const storageRef = ref(storages, `upload/images/${Date.now()}-${coverpic.name}`);
const fileRef = ref(storageRef, coverpic.name); // Reference to the specific file
await uploadBytes(fileRef, coverpic);
const downloadURL = await getDownloadURL(fileRef);

    await addDoc(collection(firebasestore2, "items"), {
      id,
      price,
      category,
      imageurl: downloadURL,
      description,
      title
    });

    console.log("Document added successfully");
  } catch (error) {
    console.error("Error:", error);
  }
};


// const getimagurladmin = (path)=>
// {
//   return  getDownloadURL(ref(storages,path))
// } 

// const storages = getStorage(firebaseapp);

const getimagurladmin = async (path) => {
  try {
    const fileRef = ref(storages, path);
    const downloadURL = await getDownloadURL(fileRef);
    return downloadURL;
  } catch (error) {
    console.error("Error fetching image URL:", error);
    throw error; // Rethrow the error to propagate it
  }
}


const getlistingofitems = async () => {
  try {
    console.log("Fetching data from Firestore...");
    const snapshot = await getDocs(collection(firebasestore2, "items"));
    console.log("Data snapshot:", snapshot.docs);
    return snapshot;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Rethrow the error to propagate it
  }
};

const getuserdataforsignin = async () => {
  try {
    console.log("Fetching data from Firestore...");
    const snapshot = await getDocs(collection(firebasestore, "users"));
    console.log("Data snapshot:", snapshot.docs);
    return snapshot;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Rethrow the error to propagate it
  }
};
  

  return (

    <Firebasecontextceom.Provider value={{ Placeorder ,getuserdataforsignin,Usersignupdata ,createlisting , getlistingofitems, getimagurladmin}}> {props.children}  </Firebasecontextceom.Provider>

  )
}

export {Firebasecontextceom, FirebaseproviderEcom };