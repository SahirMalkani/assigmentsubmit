import "./App.css";
import { Fstcomp0 } from "./components/fstcomp";
import { Dusra } from "./components/dusra";

import { Teesra } from "./components/teesra";

import { Chhotha } from "./components/chhotha";
import {Bbb} from "./components/Navbar"


import { Panchwa } from "./components/Panchwa";
import { Chhata } from "./components/Chhata";
import { Saatwa } from "./components/Saatwa";

const App= () =>{

  const name="Sahir"

  return(
  <>
< Bbb />
  

  < Fstcomp0 />

  <Dusra />
  <Teesra />
<Chhotha />
  
<Panchwa />

<Chhata />
< Fstcomp0 />

<Saatwa />

  
  </>

);
}

export default App;