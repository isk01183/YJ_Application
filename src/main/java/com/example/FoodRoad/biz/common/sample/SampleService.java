package com.example.FoodRoad.biz.common.sample;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.FoodRoad.biz.common.sample.dto.SampleSearch;
import com.example.FoodRoad.biz.common.sample.entity.Sample;
import com.example.FoodRoad.biz.common.sample.exception.SampleException;

@Service
public class SampleService {

	@Autowired
	SampleMapper sampleMapper;

	/**
	 * @author ParkJunHyeok
	 * @description
	 *
	 * <pre>
	 * 유저 목록 가져오기 Test
	 * </pre>
	 */
	public List<Sample> selectSampleList(SampleSearch sampleSearch) throws SampleException {
		System.out.println("SampleService");
		List<Sample> selectSampleList = new ArrayList<>();
		int count = 1;
	    if (count > 0) {
	    	selectSampleList = sampleMapper.selectSampleList(sampleSearch);
	    	System.out.println(selectSampleList);
	    }
	    return selectSampleList;
	}
}
