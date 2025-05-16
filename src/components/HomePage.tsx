"use client"
import { useQuery } from 'convex/react'
import React from 'react'
import { api } from '../../convex/_generated/api'

const HomePage = () => {
    const tasks = useQuery(api.tasks.get)
    return (
        <div>
            {tasks?.map(({ _id, text }) => <div key={_id}>{text}</div>)}
        </div>
    )
}

export default HomePage