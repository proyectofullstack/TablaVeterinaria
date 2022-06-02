import './Footer.css'
import telefono from '../images/telefono.png';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';


const Footer = () => {
  return (
    <>
     <div className='footer'>
		 <div className='horario'>
			 <h2>Horarios</h2>
			 <h2>SERVICIOS CLÍNICOS DOMICILIOS</h2>
			 <h3>Lunes a sábado:
			 9:00am – 6:00pm</h3>
		 </div>
		 <div className='contacto'>
			 <h2>Contáctanos</h2>
			 <div className='cont'>
				<div className='cont1'>
					<img src='https://firebasestorage.googleapis.com/v0/b/vetrinaria-37417.appspot.com/o/telefono.png?alt=media&token=0b5730c3-9b4b-41a9-80c1-04a4e0c93e69'alt="" className='img-telefono' />
				</div>
				<div className='cont2'>
					<h2>302 537 98 49 - 350 815 71 96</h2>
				</div>
			 </div>
			 <div>
				 <img src='https://firebasestorage.googleapis.com/v0/b/vetrinaria-37417.appspot.com/o/facebook.png?alt=media&token=617d5f49-c49f-498a-809a-93aade78ae15' alt="" className='redes'/>
				 <img src='https://firebasestorage.googleapis.com/v0/b/vetrinaria-37417.appspot.com/o/instagram.png?alt=media&token=d453e9c8-61c2-497a-b90e-d675b8f52963' alt="" className='redes'/>
			 </div>
		 </div>
	 </div>
    </>
  )
}

export default Footer