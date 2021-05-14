import React from 'react'

export default function UserListTable({ data }) {

    const renderUserList = () => {
        return data.map((item, key) => {
            return <tr key={key}>
                <td className="py-1">
                    <img src={require(`../../../assets/images/faces/face${Math.floor(Math.random() * 26) + 1}.jpg`).default} alt="image" />
                </td>
                <td> {item.name} </td>
                <td> <a href="#"> {item.email} </a></td>
                <td> {item.phone} </td>
            </tr>
        })
    }

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th> User </th>
                    <th> Name </th>
                    <th> Email </th>
                    <th> Phone </th>
                </tr>
            </thead>
            <tbody>
                {renderUserList()}
            </tbody>
        </table>
    )
}
