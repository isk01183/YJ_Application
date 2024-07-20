package com.example.FoodRoad.biz.common.gacha;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.FoodRoad.biz.common.gacha.dto.GachaSearch;
import com.example.FoodRoad.biz.common.gacha.entity.Gacha;
import com.example.FoodRoad.biz.common.gacha.exception.GachaException;

@RestController
@RequestMapping("/api/common/gacha")
public class GachaController {

	@Autowired
	GachaService gachaService;

	@GetMapping("/gachaList")
	public List<Gacha> selectGachaList(GachaSearch gachaSearch) throws GachaException {
		return gachaService.selectGachaList(gachaSearch);
	}
	
}
