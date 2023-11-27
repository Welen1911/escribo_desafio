export const Values = ({ lista }) => {
    return (
        <>
            {lista.length > 0 ?
                <div>
                    Valores divisiveis por 3 ou 5:
                    <ul>
                        <li>{lista.map((valor) =>
                            valor + "; "
                        )}</li>
                    </ul>
                </div>
                : ""}
        </>
    )
}