import Header from "../Components/Header/Header";
export default function Cart() {

    return (

        <>
            <Header />
            {/* 
                const handleRemove = (foodId) => {
                // remove from local storage
                removeFromDb(foodId);
                }
                <button onClick={()=>handleRemove(foodId)}>Remove</button>
            */}
            <div className="container mx-auto">
                <h1>This is a cart</h1>
            </div>
        </>
    )
}
