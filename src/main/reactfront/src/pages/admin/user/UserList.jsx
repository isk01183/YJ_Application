import Menu from '../../Common/Menu';
import '../../../css/admin/User.css';
import UserDetail from './UserDetail';
import axiosInstance from '../../../api';
import Bottom from '../../Common/Bottom';
import SearchBar from '../../Common/SearchBar';
import React, { useState, useEffect } from 'react';

export default function UserList() {
    // 유저 정보 변수
    const [info, setInfo] = useState([]); 
    // 선택된 유저ID
    const [userId, setUserId] = useState('')
    // 현재 선택된 페이지
    const [currentPage, setCurrentPage] = useState(1);

    // 유저리스트 API 
    const userInfo = (params) => {
        return axiosInstance
          .get(`/api/admin/user/userList`, params)
          .then((response) => {
            console.log(response.status);
            const newData = response.data;
            console.log(newData);
            setInfo(newData);
          })
          .catch((error) => {
            console.log(error);
          });
    };

    // userInfo 이벤트 호출
    useEffect(() => {
        userInfo();
    }, []);

    // 상세버튼
    const fn_userView = (userId) => {
      setUserId(userId)
    }

    // 페이지를 선택할 때 호출되는 함수
    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // 각 페이지 버튼의 클래스를 동적으로 설정하는 함수
    const getPageClass = (pageNumber) => {
        return pageNumber === currentPage ? 'active' : '';
    };

    

    return (
        <>
          <Menu />
          <div className="user_all">
            <div className="user_title">
              회원관리
            </div>
            <div className="user_list">
              <SearchBar/>
              <div className="user_content">
                <div>
                  <table className="list">
                    <tr className="list_title">
                      <td>ID</td>
                      <td>닉네임</td>
                      <td>이메일</td>
                      <td>전화번호</td>
                      <td>유저등급</td>
                      <td>상세버튼</td>
                    </tr>
                    {info.map((item, index) => (
                    <tr className="user_item" key={index}>
                        <td>{item.userId}</td>
                        <td>{item.userNm}</td>
                        <td>{item.emal}</td>
                        <td>{item.tel}</td>
                        <td>{item.userLvl}</td>
                        <td>
                          <button type="button" onClick={() => {fn_userView(item.userId)}}>상세</button>
                        </td>
                    </tr>
                    ))}
                  </table>
                </div>
              </div>
              <div className="page_wrap">
                <div className="page_nation">
                  <a className="arrow pprev" href="#">◀</a>
                  <a className="arrow prev" href="#">◁</a>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(pageNumber => (
                      <a 
                        key={pageNumber} 
                        className={`page ${getPageClass(pageNumber)}`} 
                        href="#" 
                        onClick={() => handlePageClick(pageNumber)}
                      >
                        {pageNumber}
                      </a>
                  ))}
                  <a className="arrow next" href="#">▷</a>
                  <a className="arrow nnext" href="#">▶</a>
                </div>
              </div>
            </div>
          </div>
          <Bottom />
          <UserDetail />
        </>
    );
}
