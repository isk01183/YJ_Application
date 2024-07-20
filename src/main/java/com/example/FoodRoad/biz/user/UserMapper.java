package com.example.FoodRoad.biz.user;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.FoodRoad.biz.user.dto.UserSearch;
import com.example.FoodRoad.biz.user.entity.User;
import com.example.FoodRoad.biz.user.exception.UserException;

/**
 * @author ParkJunHyeok
 * @description
 * 
 * <pre>
 * 사용자 매퍼
 * </pre>
 */
@Mapper
public interface UserMapper {
	List<User> selectUserList(UserSearch userSearch)
		      throws UserException;
}
