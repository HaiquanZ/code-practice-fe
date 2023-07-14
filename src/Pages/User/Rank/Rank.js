import React, { useEffect, useState } from "react";
import './Rank.css';
import axios from "axios";

function Rank(){

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/users')
        .then(function (response) {
            setUsers(response.data.users);
        })
        .catch(function (error) {
            console.log(error);
        });
    },[]);

    return(
        <div className="container rank">
            <h1>Top Ranking User</h1>

            <table className="table table-striped table-primary table-rank">
                <thead>
                    <tr>
                        <th>Numerical</th>
                        <th>Name</th>
                        <th>Trophy</th>
                        <th>Rank</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{user.name}</td>
                                <td>{user.trophy}</td>
                                <td>
                                    {
                                        users.trophy >= 50 ? 'Diamond' : (user.trophy >= 40 ? 'Gold' : (user.trophy >= 30 ? 'Silver' : (user.trophy >= 10 ? 'Bronze' : 'Vô danh')))
                                    }
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Rank;