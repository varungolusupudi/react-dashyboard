
const Card = ({cardDetails}) => {
    return (
        <div className="m-6 max-w-auto p-6">
                {cardDetails.map(card => (
                    <div className="text-left mx-auto max-w-lg bg-white shadow-lg border border-blue-500 rounded-lg p-10 mt-6">
                        <h1 className="font-bold text-2xl text-gray-900">{card.name}</h1>
                        <h2 className="text-gray-700">{card.username}</h2>
                        <h2 className="text-gray-700">{card.email}</h2>
                        <h2 className="text-gray-700">{card.address.street}, {card.address.city}, {card.address.zipcode}</h2>
                        <h2 className="text-gray-700">{card.phone}</h2>
                        <h2 className="text-blue-600 hover:underline cursor-pointer">{card.website}</h2>
                        <h2 className="text-gray-700">{card.company.name}</h2>
                    </div>
                ))}
        </div>
    );
}

export default Card;