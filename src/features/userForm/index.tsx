import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
    fetchMetaDataAsync, selectMetaData, selectUserData, selectStatus
} from './userFormSlice';
import UserForm from "./userForm";
import { UserView } from "./userFormView";
import { UserReTry } from "./userFormRetry";
import { UserFormLoading } from "./userFormLoading";

export default function User() {

    const dispatch = useAppDispatch();
    const status = useAppSelector(selectStatus);
    const metaData = useAppSelector(selectMetaData);
    const userData = useAppSelector(selectUserData);
    
    useEffect(() => {
        dispatch(fetchMetaDataAsync())
    }, [dispatch])

    return (
        <div className="pt-40 pb-10">
            {status === 'loading' && <UserFormLoading/>}
            {(status === 'idle' || status === 'failed') && !(metaData && metaData.length > 0) && <UserReTry/>}
            {status === 'idle' && metaData && metaData.length > 0 && !userData && <UserForm metaData={metaData}/>}
            {status === 'idle' && metaData && metaData.length > 0 && userData && <UserView />}
        </div>
    )
}