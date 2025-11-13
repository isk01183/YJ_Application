package com.example.FoodRoad.biz.common.user;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.FoodRoad.biz.common.user.dto.UserSearch;
import com.example.FoodRoad.biz.common.user.entity.User;
import com.example.FoodRoad.biz.common.user.exception.UserException;

@Mapper
public interface UserMapper {

	List<User> loginCheck(UserSearch userSearch)
    throws UserException;
	
	List<User> idCheck(UserSearch selectIdCheck)
	throws UserException;
	
	int insertUser(UserSearch selectIdCheck)
	throws UserException;
}
