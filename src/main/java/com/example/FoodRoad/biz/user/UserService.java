package com.example.FoodRoad.biz.user;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.FoodRoad.biz.user.dto.UserSearch;
import com.example.FoodRoad.biz.user.entity.User;
import com.example.FoodRoad.biz.user.exception.UserException;

/**
 * @author ParkJunHyeok
 * @description
 *
 * <pre>
 * 사용자 서비스
 * </pre>
 */
@Service
public class UserService {

	//@Autowired
	//UserService self;


	@Autowired
	UserMapper userMapper;

	/**
	 * @author ParkJunHyeok
	 * @description
	 *
	 * <pre>
	 * 유저 목록 가져오기 Test
	 * </pre>
	 */
	public List<User> selectUserList(UserSearch userSearch) throws UserException {

		List<User> selectUserList = new ArrayList<User>();
		int count = 1;
	    if (count > 0) {
	    	selectUserList = userMapper.selectUserList(userSearch);
	    }

		return selectUserList;
	}
}
