import './Cabecera.css'
import banner from '../images/Banner.png';
import mensaje from '../images/Mensaje.png';
import perro from '../images/perro.png';
import perro1 from '../images/perro1.png';
import perro2 from '../images/perro2.png';
import perro5 from '../images/perro5.png';
import gatos from '../images/gatos.png';
import gatos2 from '../images/gatos2.png';
import gatos3 from '../images/gatos3.png';
import gatos4 from '../images/gatos4.png';

const Cabecera = () => {
  return (
    <>
     <div className='contenedor'>
		 <div className='cont-banner'>
			 <img src={banner} alt="" className='img-banner' />
		 </div>
		 <div className='titulo'>
			 <h1>VETERINARIAS</h1>
		 </div>
		 <div className='mesaje'>
		 <img src={mensaje} alt="" className='img-mensaje' />
		 </div>
		 <div className='carrusel'>
			 <img src={perro} alt="" className='img-carrusel'/>
			 <img src={gatos}alt="" className='img-carrusel' />
			 <img src={perro1} alt="" className='img-carrusel'/>
			 <img src={gatos2}alt="" className='img-carrusel' />
			 <img src={perro2} alt="" className='img-carrusel' />
			 <img src={gatos3}alt="" className='img-carrusel' />
			 <img src={perro5}alt="" className='img-carrusel' />
			 <img src={gatos4}alt="" className='img-carrusel' />
		 </div>
	 </div>
    </>
  )
}

export default Cabecera