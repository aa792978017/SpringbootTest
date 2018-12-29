package com.agile.agiletest.controller;


import com.agile.agiletest.Result.Result;
import com.agile.agiletest.pojo.Trips;
import com.agile.agiletest.service.TripsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * 查询车票
 * @author 41688
 * @version 0.1
 * */
@RestController
@CrossOrigin
public class TripsController {
    /**
     *
     */
    @Autowired
    private TripsService tripsService;
    /**
     * get aim trips
     * @author 41688
     * @return
     * */
    @PostMapping("/getAimtrips")
    @ResponseBody
    public Result getAimtrips(@RequestBody Trips trips){
        Result result = tripsService.getAimtrips(trips);
        return result;
    }
    /**
     * get all trips
     * @author 41688
     * @return
     * */
    @PostMapping("/getalltrips")
    @ResponseBody
    public Result getAlltrips(@RequestBody Trips trips){
        Result result = tripsService.getAlltrips(trips);
        return result;
    }
}
