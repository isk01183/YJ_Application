package com.example.FoodRoad.biz.common.gacha;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.FoodRoad.biz.common.gacha.dto.GachaSearch;
import com.example.FoodRoad.biz.common.gacha.entity.Gacha;
import com.example.FoodRoad.biz.common.gacha.exception.GachaException;

@Mapper
public interface GachaMapper {
	List<Gacha> selectGachaList(GachaSearch gachaSearch)
    throws GachaException;
}
