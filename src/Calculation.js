export default function CalculateTotalAmount(itemsArray){
        let totalAmount=itemsArray.map((items)=>{
            return (parseInt(items.price)*items.quntity)
        })
        let sum = 0;
        totalAmount.forEach(myFunction);
        function myFunction(item) {
            sum += item;
        }
        return Math.floor(sum)
}
