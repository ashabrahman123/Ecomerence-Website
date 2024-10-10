import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppProvider } from './Context/contextprovider';
import { Addtocartprovider } from './Context/addtocartcontext';
import { FirebaseproviderEcom } from './Componets/FirebaseEcom';
// import { Firebaseadminaddproducct } from './Componets/Adminaddproductfirebase';

ReactDOM.render(


//  <Router> 
<AppProvider> 
<Addtocartprovider>
<FirebaseproviderEcom>
{/* <Usersignin> */}
  <App/>
  {/* </Usersignin> */}

</FirebaseproviderEcom>
</Addtocartprovider> 
</AppProvider> 
// </Router>
,

 
  document.getElementById('root')
)

