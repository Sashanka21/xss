import React from 'react'
import Tickets from '../Components/Tickets';

function List() {
    const listdata1 = [
        {
          type: "Free Ticket",
          description:
            "This is a ticket description. This is a free ticket. This ticket is uncategorised.",
          location:
            "KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India",
          subcontent: "This is additional venue details.",
          available: "Available Till: 31st Aug 2034, 06:00 PM IST",
          price: "FREE",
          btncontent: "Register",
        },
        {
          type: "Paid Ticket",
          description:
            "This is a ticket description. This is a free ticket. This ticket is uncategorised.",
          location:
            "KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India",
          subcontent: "This is additional venue details.",
          available: "Available Till: 31st Aug 2034, 06:00 PM IST",
          price: "₹1,000",
          btncontent: "Register",
        },
        {
          type: "Donation Ticket",
          description:
            "This is a ticket description. This is a free ticket. This ticket is uncategorised.",
          location:
            "KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India",
          subcontent: "This is additional venue details.",
          available: "Available Till: 31st Aug 2034, 06:00 PM IST",
          price: "Min ₹10 - Max ₹1,000",
          btncontent: "Donate",
        },
        {
          type: "Ticket With Coupon",
          description:
            "This is a ticket description. This is a paid ticket. This ticket is uncategorised. This ticket also has a coupon. Buy minimum - 1 and maximum - 1000000 and avail 10% off.",
          location:
            "KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India",
          subcontent: "This is additional venue details.",
          available: "Available Till: 31st Aug 2034, 06:00 PM IST",
          price: "₹1,000",
          btncontent: "Register",
        },
      ];
      const listdata2 = [
        {
          type: "Free Ticket in Category1",
          description:
            "This is a ticket description. This is a free ticket. This ticket is categorized.",
         
          
          available: "Available Till: 31st Aug 2034, 06:00 PM IST",
          price: "FREE",
          btncontent: "Register",
        },
        {
          type: "Paid Ticket in Category1",
          description:
            "This is a ticket description. This is a free ticket. This ticket is categorized.",
          location:
            "KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India",
          subcontent: "This is additional venue details.",
          available: "Available Till: 31st Aug 2034, 06:00 PM IST",
          price: "₹1,000",
          btncontent: "Register",
        },
       
      ];
      const listdata3 = [
        {
          type: "Free Ticket in Category2",
          description:
            "This is a ticket description. This is a free ticket. This ticket is categorised.",
         
          
          available: "Available Till: 31st Aug 2034, 06:00 PM IST",
          price: "FREE",
          btncontent: "Register",
        },
        {
          type: "Paid Ticket in Category2",
          description:
            "This is a ticket description. This is a paid ticket. This ticket is categorised.",
          location:
            "KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India",
          subcontent: "This is additional venue details.",
          available: "Available Till: 31st Aug 2034, 06:00 PM IST",
          price: "₹1,000",
          btncontent: "Register",
        },
       
      ];
  return (
    
    <div>
            <Tickets listdata1={listdata1} listdata2={listdata2} listdata3={listdata3} />
    </div>
  )
}

export default List
