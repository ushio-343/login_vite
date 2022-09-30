import "../assets/styles/signUp.css"

function Signup(){

    return(
        <div className="fullContent">
            <div className="nombre">
                <input type="text" id="nombre" placeholder="Nombre"/>
            </div>
            <div className="email">
                <input type="email" id="email" placeholder="Ingrese su email" />
            </div>
            <div className="carrera">
                <input type="text" id="carrera" placeholder="Carrera que cursa" />
            </div>
            <div className="cuatrimestre">
                <input type="number" id="cuatri" placeholder="Cuatrimestre" />
            </div>
            <div className="direccion">
                <input type="text" id="direccion" placeholder="direccion" />
            </div>
            <div className="telefono">
                <input type="tel" id="telefono" placeholder="su numero Celular" />
            </div>
            <div className="cumpleanos">
                <div>fecha de nacimiento</div>
                <input type="date" id="cumpleanos" placeholder="Fecha de nacimiento"/>
            </div>
            <div className="inscripcion">
                    <div>fecha de inscripcion</div>
                <input type="date" id="inscripcion" placeholder="Fecha de inscripcion" />
            </div>
            <div className="button">
                <button  id="button">Enviar</button>
            </div>
        </div>
    );
}

export default Signup;