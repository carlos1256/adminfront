import { useState } from "react"
import { useNavigate } from "react-router-dom"
function Form({form,updateTableData}){

  

    const navigate = useNavigate()
    const store = async (e) => {
        e.preventDefault();
          setIsSubmitting(true);
        try {
          await axios.post(endpoint,formValues) 
            // Limpiar los campos después de enviar el formulario
            setFormValues({});
            navigate('/inventory'); // Redirigir a la página deseada después de guardar
        } catch (error) {
          console.error('Error al guardar el inventario:', formValues);
          // Aquí puedes mostrar un mensaje de error al usuario
        }finally {
            setIsSubmitting(false); // Establecer isSubmitting en false después de completar la solicitud
          }}

    return(
        <div class="form-inventario">
            <div className="Form-fields">
                <form onSubmit={store}>
                    {form.map(input =>(
                        <div className='form-group'>
                            <label htmlFor={input.name}class="Control-label">{input.label}</label>
                            <input  type={input.type}
                                value={formValues[input.name] || ''}
                                onChange={ (e)=>handleChange(e,input.name)}
                                id={input.name}
                                class="ControlInput"
                                placeholder=" "
                                required
                            />
                        </div>
                    ))}
                <button type='submit' disabled={isSubmitting} className="Button Form-submit"> {isSubmitting ? 'Enviando...' : 'Guardar'}</button>
                </form>
            </div>
        </div>
    )
}

export default Form;