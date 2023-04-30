import React, { useEffect, useState } from 'react'

import { getUserList } from '../services/UserService'

function UserList() {
    const [records, setRecords] = useState([])
    const fetchRecords = () => {
        getUserList()
            .then((data) => {
                setRecords(data)
                console.log('This is the data', data)
            })
            .catch((error) => {
                console.log('This is an error', error)
            })
    }

    useEffect(() => {
        fetchRecords()
    }, [])

    return (
        <>
            <table className="table-auto">
                <thead className="w-full bg-slate-200 h-5">
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {records.map((record) => {
                        return (
                            <tr key={record.id}>
                                <td>{record.id}</td>
                                <td>{record.first_name}</td>
                                <td>{record.last_name}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default UserList
