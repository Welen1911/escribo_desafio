import { Button } from "./button"

export const Form = ({ setNum, onClick, placeholder }) => {
    return (
        <>
            <div class="mb-5">
                <label for="number" class="block mb-2 text-sm font-medium text-gray-900 ">Digite um número:</label>
                <input type="number" onChange={(e) => setNum(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder={placeholder} required />
            </div>
            <div>
               <Button onClick={onClick}/>
            </div>
        </>
    )
}