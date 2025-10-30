package com.example.FoodRoad.biz.common.user;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.FoodRoad.biz.common.user.dto.UserSearch;
import com.example.FoodRoad.biz.common.user.entity.User;
import com.example.FoodRoad.biz.common.user.exception.UserException;

@RestController
@RequestMapping("/api/common/user")
public class UserController {

	@Autowired
	UserService userService;

//	@GetMapping("/userList")
//	public List<User> selectUserList(UserSearch userSearch) throws UserException {
//		System.out.println("UserController");
//		return userService.selectUserList(userSearch);
//	}
	
	
	/**
     * 로그인 체크
     * 반환 타입을 List<User>가 아닌 ResponseEntity<?>로 변경
     * (HTTP 상태 코드와 데이터를 함께 반환하기 위함)
     */
	@PostMapping("/loginCheck")
	public ResponseEntity<?> loginCheck(@RequestBody UserSearch userSearch) throws UserException {	    
	    //	'List<User>' 타입으로 받아야함
	    List<User> userList = userService.loginCheck(userSearch);
	    //    리스트가 null이거나 비어있는지(isEmpty()) 확인하는 것이 올바른 로그인 실패 처리
	    if (userList == null || userList.isEmpty()) {
	        // [로그인 실패]
	        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("로그인 실패");
	    } else {
	        // [로그인 성공]
            // 리스트가 비어있지 않다면, 0번째(첫 번째) 사용자를 꺼냄
	        User loginUser = userList.get(0); 
	        
            // ResponseEntity.ok()로 성공(200) 응답과 유저 데이터를 반환
	        return ResponseEntity.ok(loginUser); 
	    }
	}
	

}

