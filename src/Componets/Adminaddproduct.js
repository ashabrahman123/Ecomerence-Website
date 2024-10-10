// AddDataForm.js
import React, { useContext, useState } from 'react';
import { Firebasecontextceom } from './FirebaseEcom';
import Button from 'react-bootstrap/Button';

const AddDataForm = () => {

  const firebasecontextadmin = useContext(Firebasecontextceom);

  const [id, setid] = useState();
  const [price, setprice] = useState();
  const [category, setcateory] = useState()
  const [description, setdescription] = useState();
  const [img, setimg] = useState(null);
  const [title, settitle] = useState();

  const changeid = (e) => {
    setid(e.target.value);
  }

  const changeprice = (e) => {
    setprice(e.target.value)
  }

  const changecategory = (e) => {
    setcateory(e.target.value)
  }

  const changedescription = (e) => {
    setdescription(e.target.value)
  }

  const changeimg = (e) => {
    const filee = e.target.files[0]
    setimg(filee)
  }

  const changetitle = (e) => {
    settitle(e.target.value)
  }

  const additems = (e) => {
    e.preventDefault();
    firebasecontextadmin.createlisting(id, price, category, description, img, title);
    alert('Product added succcessfully')
    setcateory('')
    setid('')
    setdescription('')
    setprice('')
    settitle('')
    setimg(null)
  }


  return (



    <div className='adreess' >
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: "center", marginTop: '50px' }}>
        <h2>Admin Add Product</h2>
        {/* <input style={{ width: '100%', height: "50px" }} type='text' placeholder='Enter name' /> */}
        <form onSubmit={additems}>

          <div className="group" style={{ marginTop: '30px' }}>
            <input type="text" onChange={changeid} value={id} />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>Id</label>
          </div>

          <div className="group">
            <input type="text" onChange={changeprice} value={price} />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>Price</label>
          </div>

          <div class="group">
            <input type="text" onChange={changecategory} value={category} />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Category</label>
          </div>

          <div class="group">
            <input type="text" onChange={changedescription} value={description} />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Description</label>
          </div>

          <div class="group">
            <input type="file" onChange={changeimg} />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Img</label>
          </div>

          <div class="group">
            <input type="text" onChange={changetitle} value={title} />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Title</label>
          </div>
          <Button style={{ width: "280px" }} variant="dark" type='submit'> Add Product</Button>
        </form>
      </div>
    </div>
  );
};

export default AddDataForm;
