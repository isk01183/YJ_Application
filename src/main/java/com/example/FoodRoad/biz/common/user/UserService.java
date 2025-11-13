package com.example.FoodRoad.biz.common.user;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.FoodRoad.biz.common.user.dto.UserSearch;
import com.example.FoodRoad.biz.common.user.entity.User;
import com.example.FoodRoad.biz.common.user.exception.UserException;

@Service
public class UserService {

	@Autowired
	UserMapper userMapper;

	/**
	 * 로그인
	 */
	public List<User> loginCheck(UserSearch userSearch) throws UserException {
		List<User> selectUserList = new ArrayList<>();
    	selectUserList = userMapper.loginCheck(userSearch);
	    return selectUserList;
	}
	
	/**
	 * 회원가입 시 ID 중복체크
	 */
	public List<User> idCheck(UserSearch userSearch) throws UserException {
		List<User> selectIdCheck = new ArrayList<>();
		selectIdCheck = userMapper.idCheck(userSearch);
	    return selectIdCheck;
	}
	
	/**
	 * 회원가입 시 ID 중복체크
	 */
	public int insertUser(UserSearch userSearch) throws UserException {
		int insertUser = userMapper.insertUser(userSearch);
	    return insertUser;
	}
}
