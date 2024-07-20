package com.example.FoodRoad.biz.user;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.FoodRoad.biz.user.dto.UserSearch;
import com.example.FoodRoad.biz.user.entity.User;
import com.example.FoodRoad.biz.user.exception.UserException;

/**
 * @author ParkJunHyeok
 * @description
 *
 *              <pre>
 * 사용자 컨트롤러
 *              </pre>
 */
@RestController
@RequestMapping("/api/admin/user")
public class UserController {

	@Autowired
	UserService userService;

	@GetMapping("/userList")
	public List<User> selectUserList(UserSearch userSearch) throws UserException {
		return userService.selectUserList(userSearch);
	}

}
