import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Pagination from '../../Components/Pagination/Pagination';
import UserListTable from '../../Components/Tables/UserList/UserListTable';
import { GET_USER_LIST_API } from '../../redux/constants/UserListConstant';

export default function UserList() {

    const dispatch = useDispatch();

    const { userList } = useSelector(state => state.UserListReducer);

    useEffect(() => {
        dispatch({
            type: GET_USER_LIST_API
        })
    }, [])


    return (
        <div className="row">
            <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">User Table</h4>
                        <div className="table-responsive">
                            {/* <UserListTable /> */}
                            <Pagination
                                data={userList}
                                RenderComponent={UserListTable}
                                total={userList.length}
                                perPage={5}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
