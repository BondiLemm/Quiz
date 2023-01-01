import {Link} from "react-router-dom"

export const Start = () => {
    return (
    <div className='tit'>
        <h1>Узнай себя лучше!</h1>
        <div className="start-wrapper">
        
        
        
        
        <Link to="/paket"><input className="start-button" type="button" value="Какой ты пакет?"/></Link>
        <br />
        <Link to="/veter"><input className="start-button" type="button" value="Какой ты ветер?"/></Link>
        <br />
        <Link to="/question"><input className="start-button" id="ppp" type="button" value="Какой ты черт?"/></Link>
        <br />
        <Link to="/question"><input className="start-button" type="button" value="Какой ты эклер?"/></Link>
        <br />
        <Link to="/medved"><input className="start-button" id="ppppp" type="button" value="Какой ты медведь?"/></Link>
          
            
        </div>
    </div>
    )
}