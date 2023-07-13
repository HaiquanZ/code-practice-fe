import React from "react";
import './Rank.css';

function Rank(){
    return(
        <div className="container rank">
            <h1>Top Ranking User</h1>

            <table class="table table-striped table-primary">
                <thead>
                    <tr>
                        <th>Numerical</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Rank</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td>john@example.com</td>
                        <td>Gold</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Rank;