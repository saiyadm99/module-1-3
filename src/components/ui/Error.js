export default function Error({ message }) {
    return (
        <div className="flex items-center">
            <div className="relative bg-red-200 max-w-xl px-4 py-2 text-red-800 rounded shadow w-full">
                <span className="block text-sm">{message}</span>
            </div>
        </div>
    );
}

// {
// 	"email": "sumit@learnwithsumit.com",
// 	"password": "$2a$10$tGMlJhQmAnx7f4cIVY55FOtIRV91wjRwBhdpaANPoslku3P/aAjPK",
// 	"name": "Sumit Saha",
// 	"id": 1
// }, 