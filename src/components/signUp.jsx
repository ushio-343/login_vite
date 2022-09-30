import "../assets/styles/signUp.css"

function Signup(){

    return(
        <div className="fullContent">
            <div className="nombre">
                <input type="text" placeholder="Nombre"/>
            </div>
            <div className="email">
                <input type="email" placeholder="Ingrese su email" />
            </div>
            <div className="carrera">
                <input type="text" placeholder="Carrera que cursa" />
            </div>
            <div className="cuatrimestre">
                <input type="number" placeholder="Cuatrimestre" />
            </div>
            <div className="direccion">
                <input type="text" placeholder="direccion" />
            </div>
            <div className="telefono">
                <input type="tel" placeholder="su numero Celular" />
            </div>
            <div className="cumpleanos">
                <input type="date" placeholder="Fecha de nacimiento"/>
            </div>
            <div className="inscripcion">
                <input type="date" placeholder="Fecha de inscripcion" />
            </div>
            <div className="button">
                <button Enviar />
            </div>
        </div>
    );
}

export default Signup;