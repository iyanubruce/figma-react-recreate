import { useState} from 'react';
import {useNavigate} from "react-router-dom"
import {motion} from "framer-motion"

const Order = () => {
  const button = {
    hover: { scale: 1.2, boxShadow: "0px 0px 8px rgba(255, 255, 255)"}
  }

  const [address, setAddress] = useState('');
  const [selectedDish, setSelectedDish] = useState('');
  const [selectedAmount, setSelectedAmount] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isPending, setIsPending] = useState(false)
  const history = useNavigate();

  const handleSubmit = (e: { preventDefault: () => void; }) =>{
    e.preventDefault()
    const order = { selectedDish, selectedAmount, phoneNumber, address}

    setIsPending(true);
    fetch('http://localhost:8000/orders',{
      method:'POST',
      headers: {'Content-Type':"application/json"},
      body: JSON.stringify(order)
    }).then(()=>{
      setIsPending(false);
      history("/Orderplaced")
    })

  }

  return (
    <div className="bg-purple-500 h-screen flex justify-center items-center">
      <div className="w-[70%] h-[80%] flex justify-center rounded-lg shadow-lg  p-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="dish" className="block">Select Dish</label>
            <select
              id="dish"
              name="dish"
              required
              value={selectedDish}
              onChange={(e) => setSelectedDish(e.target.value)}
              className="w-full h-10 px-3 rounded-md border border-purple-500 bg-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
            >
              <option value="">Select a dish</option>
              <option value="Fried rice">Fried Rice</option>
              <option value="Salad">Salad</option>
              <option value="Egusi">Egusi</option>
              <option value="Ewedu">Ewedu</option>
            </select>
          </div>

          <div>
            <label htmlFor="amount" className="block">Select Amount</label>
            <select
            required
              id="amount"
              name="amount"
              value={selectedAmount}
              onChange={(e) => setSelectedAmount(e.target.value)}
              className="w-full h-10 px-3 rounded-md border border-purple-500 bg-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
            >
              <option value="">Select amount</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
        
          <div>
            <label htmlFor="phone" className="block">Phone Number</label>
            <input
              required
              id="phone"
              type="text"
              name="phone"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full h-10 px-3 rounded-md border border-purple-500 bg-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          <div>
            <label htmlFor="address" className="block">Enter Address</label>
            <textarea
              required
              id="address"
              name="address"
              rows={4}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full h-24 px-3 py-2 rounded-md border border-purple-500 bg-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          {!isPending && <motion.button variants={button} whileHover='hover' type="submit" className="w-full h-10 bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600">
            Submit Order
          </motion.button>}
          {isPending && <button type="submit" className="w-full h-10 bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600">
            Submiting Order ...
          </button>}
        </form>
      </div>
    </div>
  );
};

export default Order;
