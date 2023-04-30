import React, { useEffect, useState } from 'react'

import { getUserList } from '../services/UserService'
import { deleteUser } from '../services/UserService'
import EditDashboard from './EditDashboard'
import { MdOutlineDelete } from 'react-icons/md'

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

    const handleDeleteUser = async (id) => {
        try {
            const success = await deleteUser(id)
            if (success) {
                setRecords((prevUsers) => prevUsers.filter((u) => u.id !== id))
            }
        } catch (error) {
            console.error(error.message)
        }
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
                        <th>Email</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {records.map((record) => {
                        return (
                            <tr key={record.id}>
                                <td>{record.id}</td>
                                <td>{record.first_name}</td>
                                <td>{record.last_name}</td>
                                <td>{record.email}</td>
                                <td>
                                    <EditDashboard user={record} />
                                </td>
                                <td>
                                    <td className="flex justify-center group relative py-2 px-10">
                                        <button
                                            className="text-white hover:text-red-500"
                                            onClick={() =>
                                                handleDeleteUser(record.id)
                                            }
                                        >
                                            <MdOutlineDelete className="text-[#ac3c1c]" />
                                            <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 scale-0 rounded bg-gray-300 p-2 text-xs text-black group-hover:scale-100">
                                                Delete
                                            </span>
                                        </button>
                                    </td>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default UserList
