import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'

const CheckBox = () => {
    const { user } = useContext(AuthContext);
    const products = useLoaderData();
    const { img, price, title } = products;



    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const date = form.date.value;
        const email = user?.email;
        const message = form.message.value;

        const checkout = { name, phone, date, email, message, img, price, title };

        fetch('http://localhost:5000/checkout', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(checkout)
        })
            .then(result => result.json())
            .then(data => {

                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }



    return (
        <div className='mt-[142px] bg-[#F3F3F3] space-y-5 p-20'>
            <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-2 gap-9 '>
                    <div className=''>
                        <input className='h-[60px] w-full border-3px border-[#F3F3F3] p-4' type="text" name="name" id="" placeholder='enter name' /><br />
                        <input className='h-[60px] w-full border-1px border-[#F3F3F3] p-4 mt-6' type="text" name="phone" id="" placeholder='your phone' />
                    </div>
                    <div className=''>
                        <input className='h-[60px] w-full border-1px border-[#F3F3F3] p-4' type="date" name="date" id="" placeholder='enter date' /><br />
                        <input className='h-[60px] w-full border-1px border-[#F3F3F3] p-4 mt-6' type="email" defaultValue={user?.email} name="email" id="" placeholder='your email' />
                    </div>
                </div>
                <textarea placeholder="Your message" name='message' className="textarea textarea-bordered textarea-lg w-full" ></textarea>

                <input className="btn btn-block bg-red-500 text-white" type="submit" value="Order confirm" />
            </form>

        </div>
    );
};

export default CheckBox;