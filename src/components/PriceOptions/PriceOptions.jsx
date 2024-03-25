import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

   const PriceOptions= [
        {
          "id": 1,
          "name": "Basic Membership",
          "price": "$29",
          "features": [
            "Access to gym facilities",
            "Cardio equipment usage",
            "Weight lifting area",
            "Locker rooms",
            "Personalized workout plan",
            "Fitness assessment",
            "24/7 access"
          ]
        },
        {
          "id": 2,
          "name": "Standard Membership",
          "price": "$49",
          "features": [
            "All features of Basic Membership",
            "Access to group fitness classes",
            "Sauna and steam room",
            "Nutritional counseling session",
            "Discounts on personal training sessions",
            "Access to online workout videos"
          ]
        },
        {
          "id": 3,
          "name": "Premium Membership",
          "price": "$79",
          "features": [
            "All features of Standard Membership",
            "Access to swimming pool",
            "One-on-one personal training session per month",
            "Towel service",
            "Discounts on merchandise",
            "Complimentary smoothie after workout",
            "Exclusive access to VIP events"
          ]
        }
      ]
      
    return (
    
        <div className="m-2">
            <h2 className="text-3xl">Best Prices in the Town</h2>
            <div className="grid md:grid-cols-3 gap-10">
            {
                PriceOptions.map( option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;