package com.example.FoodRoad.biz.common.gacha;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.FoodRoad.biz.common.gacha.dto.GachaSearch;
import com.example.FoodRoad.biz.common.gacha.entity.Gacha;
import com.example.FoodRoad.biz.common.gacha.exception.GachaException;

@Service
public class GachaService {

	@Autowired
	GachaMapper gachaMapper;

	/**
	 * @author ParkJunHyeok
	 * @description
	 *
	 * <pre>
	 * 유저 목록 가져오기 Test
	 * </pre>
	 */
	public List<Gacha> selectGachaList(GachaSearch gachaSearch) throws GachaException {

		List<Gacha> selectGachaList = new ArrayList<Gacha>();
		int count = 1;
	    if (count > 0) {
		selectGachaList = gachaMapper.selectGachaList(gachaSearch);
	    }
	    return selectGachaList;
	}
}
