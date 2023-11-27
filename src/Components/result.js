export const Result = ({total}) => {
    return (
        <>
            <div>
                {total > 0 ? "Total da soma: " + total : ""}

            </div>
        </>
    )
}