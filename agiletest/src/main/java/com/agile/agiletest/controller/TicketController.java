package com.agile.agiletest.controller;

import com.agile.agiletest.Result.Result;
import com.agile.agiletest.dao.TripsDao;
import com.agile.agiletest.dao.UserDao;
import com.agile.agiletest.pojo.Order;
import com.agile.agiletest.pojo.Trips;
import com.agile.agiletest.service.TripsService;
import com.alibaba.fastjson.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@CrossOrigin
public class TicketController {


    @Autowired
    private TripsService tripsService;

    @Autowired
    private TripsDao tripsDao;

    @Autowired
    private UserDao userDao;
    /**
     * 预定车票
     * @param data
     * @return
     */
    @PostMapping("/buyticket")
    public Result buyTicket(@RequestBody JSONObject data){
        //获取前端传来的数据
        String username = data.getString("username");
        String carNum = data.getString("carNum");
        String startTime = data.getString("startTime");

        Trips trips = tripsDao.getTripsInfoByCarNumAndStartTime(carNum, startTime);
        int carInfoId = trips.getId();
        //        int carInfoId  = data.getInteger("id");
        //进入购票service
        Result result = tripsService.buyTicket(username, carInfoId, carNum);
        Order order = (Order) ((Map<String, Object>)result.getData()).get("order");
        return tripsService.payMoney(order.getId());
    }


    /**
     *退票
     * @param data
     * @return
     */
    @PostMapping("/ticketrefund")
    public Result ticketRefund(@RequestBody JSONObject data){
//       获取这三个信息进行订单查询 personId  carNum  orginLocation  destinationLocation
//        int personId = 0;
        String username = data.getString("username");
        int personId = userDao.getUserByUsername(username).getPersonId();
        String carNum = data.getString("carNum");
        String startTime = data.getString("startTime");
        String reachTime = data.getString("reachTime");
        Result result = tripsService.ticketRetund(personId, carNum, startTime, reachTime);
        return result;
    }

    @PostMapping("/paymoney")
    public Result payMoney(@RequestBody JSONObject data){
        int orderId = data.getInteger("orderId");
        return tripsService.payMoney(orderId);
    }
}
