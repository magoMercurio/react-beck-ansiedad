import { useState } from 'react';
import {RadioGroup, Radio} from "@nextui-org/react";

export function RadioAnswer(props) {

    const { id, q, respuestas, cantidad } = props;
    const [selected, setSelected] = useState("");

    /* const combinado = respuestas.map((respuesta, index) => ({
      respuesta,
      cantidad: cantidad[index]
    }));
    
    console.log(combinado); */

    const valores = {
      'nada' : 0,
      'leve' : 1,
      'moderado' : 2,
      'mucho' : 3
    }
    
    


    return (
      <div className='my-8'>
      <div className=' flex flex-row justify-between max-w-lg'>
        <div className=' min-w-[180px]'>
          <h3>{`${id}. ${q}`}</h3>
        </div>
        <RadioGroup
        id={id}
        orientation="horizontal"
        value={selected}
        onValueChange={setSelected}
        className='flex flex-row items-center min-w-32 '
      >
        {cantidad.map((cantidad) => (
          <Radio key={cantidad} value={cantidad}>

          </Radio>
        ))}
      </RadioGroup>
      </div>
      <p className="text-default-500 text-small">Seleccionado: {selected}</p>
      </div>
    )
}