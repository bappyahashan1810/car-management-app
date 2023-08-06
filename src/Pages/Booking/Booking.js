import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import BookingRow from './BookingRow';
import Swal from 'sweetalert2'

const Booking = () => {
    const { user } = useContext(AuthContext);
    const [booking, setBooking] = useState([]);
    const url = `http://localhost:5000/checkout?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {

                setBooking(data);
            })
    }, [url])


    const handledelete = id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })

        fetch(`http://localhost:5000/checkout/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    const remaning = booking.filter(book => book._id !== id);
                    setBooking(remaning);
                }



            })
    }


    const handleconfirm = id => {
        fetch(`http://localhost:5000/checkout/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    const remainig = booking.filter(book => book._id !== id);
                    const updated = booking.find(book => book._id === id);
                    updated.status = 'confirm'
                    const newbooking = [updated, ...remainig];
                    setBooking(newbooking);
                }
            })
    }




    return (
        <div>
            <h1>total products : {booking.length}</h1>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            booking.map(booking => <BookingRow
                                key={booking._id}
                                booking={booking}
                                handledelete={handledelete}
                                handleconfirm={handleconfirm}
                            ></BookingRow>)
                        }



                    </tbody>


                </table>
            </div>



        </div>
    );
};

export default Booking;