package com.example.FoodRoad.biz.common.sample;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.FoodRoad.biz.common.sample.dto.SampleSearch;
import com.example.FoodRoad.biz.common.sample.entity.Sample;
import com.example.FoodRoad.biz.common.sample.exception.SampleException;

@Mapper
public interface SampleMapper {

	List<Sample> selectSampleList(SampleSearch sampleSearch)
    throws SampleException;
}
