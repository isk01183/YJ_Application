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
	 * 유저 목록 가져오기 Test
	 */
	public List<User> loginCheck(UserSearch userSearch) throws UserException {
		List<User> selectUserList = new ArrayList<>();
    	selectUserList = userMapper.loginCheck(userSearch);
	    return selectUserList;
	}
}
