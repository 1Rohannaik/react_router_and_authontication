import React from 'react'
import { UserAuth } from './AuthContaxt'
import {  Navigate } from 'react-router-dom'


const Protected = ({children}) => {
    const { user } = UserAuth();
    if (!user) {
       return <Navigate to='/signup'/>
    }
    return children;
}

export default Protected