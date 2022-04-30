import React from "react";
import { Col } from "../../components/common";
import { useAppSelector } from '../../app/hooks';
import { selectUserData} from './userFormSlice';
import { JSONTree } from 'react-json-tree';
import { Button } from "../../components/input";
import { useAppDispatch } from '../../app/hooks';
import {clearUserData} from './userFormSlice'


const UserView = () => {
    const userData = useAppSelector(selectUserData);
  const dispatch = useAppDispatch();

    const clearData = () => {
        dispatch(clearUserData())
    }

    return (
        <div data-testid="user-form-1" className="flex flex-col items-center justify-center mb-20">
            <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
                <div className={`font-medium self-center text-xl sm:text-2xl uppercase text-gray-800 text-center`}>Results</div>
                <div className={`mt-10`}>
                    <Col>
                        {userData && <JSONTree data={userData} />}
                    </Col>
                    <Col>
                    <Button
                        btnType={"button"}
                        label={"Clear Records"}
                        onClick={clearData} />
                    </Col>
                </div>
            </div>
        </div>
    )

}

export { UserView }