import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./thunks/thunks";


export const PokemonApp=()=>{

    const dispatch = useDispatch();
    const { isLoading, pokemons = [], page } = useSelector( state => state.pokemons );

    useEffect(() => {
        dispatch( getPokemons() );    
      }, [])

    return(
        <>
        <div className="container">
            <h2>Pokemon App Xample</h2>
        <hr/>
        <code>Cargando...: { isLoading ? 'True': 'False' }</code>
        <p/>
        <div>
            <ul>
                {                    
                    pokemons.map((i)=>(
                        <li key={i.name}> {i.name}</li>
                    ))

                    // Nota: Lo siguiente también funciona    
                    // pokemons.map(({name})=>(
                    //     <li key={name}> {name}</li>
                    // ))

                }
            </ul>
        </div>
        <hr/>
        <button className="btn btn-primary mt-2"
          disabled={ isLoading }
          onClick={ () => dispatch( getPokemons(page) ) }
        >
          Next
        </button>
        </div>
        </>
    )
}
export default PokemonApp